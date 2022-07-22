import React, { Component } from "react";
// import { ErrorAlert } from "./Alert";

class NumberofEvents extends Component {


  handleInputChanged = (event) => {
    const selectedValue = parseInt(event.target.value);

    if (selectedValue <= 20 && selectedValue > 0) {
      this.setState({
        numberOfEvents: 20,
        infoText: 'Please select a number from 1-20'

      });
    } else {
      this.setState({
        numberOfEvents: selectedValue,
        infoText: ''
      })
    }
    this.props.updateEvents(undefined, selectedValue);
  };

  render() {
    const { numberOfEvents } = this.props;
    return <div className="event-count">
      {/* <ErrorAlert text={this.state.infoText} /> */}
      <p>Number of Events:</p>
      <input className="event-number" type="number" min="1" max="100" value={numberOfEvents} onChange={this.handleInputChanged}>

      </input>


    </div>
  }
}

export default NumberofEvents;