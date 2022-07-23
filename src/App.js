import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";



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
      let locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          numberOfEvents: eventCount,
          selectedLocation: location
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
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
              
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
              <br></br>
              <br></br>
              <NumberofEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
              <EventList events={this.state.events} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
            
      </div>
    );
  }
}

export default App;