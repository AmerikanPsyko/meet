import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import { OfflineAlert } from "./Alert";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import NumberofEvents from "./NumberOfEvents";

class App extends Component {
  state = {
    events: [],
    locations: [],
    locationSelected: "all",
    numberOfEvents: 15,
  };

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else this.setState({ numberOfEvents: eventCount });
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      let locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          numberOfEvents: eventCount,
          selectedLocation: location,
        });
      }
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    if (!navigator.onLine) {
      this.setState({
        offlineText: "Your're offline! The data was loaded from the cache.",
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { offlineText } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>

        <OfflineAlert text={offlineText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <br></br>
        <br></br>
        <NumberofEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city"  />
          <YAxis type="number" dataKey="number" name="number of events"  />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        <EventList
          events={this.state.events}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default App;
