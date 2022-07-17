import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import { Container, Row, Col } from 'react-bootstrap/';


class App extends Component {
  state = {
    events: [],
    locations: [],
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
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
        <Container>
        <Row className="d-flex justify-content-center align-item-center p-3 m-3">
          <Col md={6} className="d-flex flex-column align-items-center justify-content-center p-5">
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
