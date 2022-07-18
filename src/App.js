import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberOfEvents from "./NumberOfEvents";


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 15,
  };

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
        eventCount = this.state.numberOfEvents;
    } else(
        this.setState({ numberOfEvents: eventCount })
    )
    if (location === undefined) {
        location = this.state.locationSelected;
    }
    getEvents().then((events) => {
        let locationEvents = location === "Everywhere" ?
            events :
            events.filter((event) => event.location === location);
        this.setState({
            events: locationEvents.slice(0, eventCount),
            numberOfEvents: eventCount,
            locationSelected: location,
        });
    })
}

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
        <Container>
        <Row className="d-flex justify-content-center align-item-center p-3 m-3">
          <Col md={6} className="d-flex flex-column align-items-center justify-content-center p-5">
          <NumberOfEvents updateEvents = { this.updateEvents } />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
        </Col>
        </Row>
        </Container>
      </div>
      
    );
  }
}

export default App;
