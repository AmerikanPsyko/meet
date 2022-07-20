import React, { Component } from "react";

class NumberofEvents extends Component {


  handleInputChanged = (event) => {
    const selectedValue = parseInt(event.target.value);
    if (selectedValue <= 20 && selectedValue > 0) {
      this.setState({
        numberOfEvents: selectedValue
      });
    } else {
      this.setState({
        numberOfEvents: 20,
        Error: 'Please select a number greater than 0.'
      })
    }
    this.props.updateEvents(undefined, selectedValue);
  };

  render() {
    const { numberOfEvents } = this.props;
    return <div className="event-count">
      <p>Number of Events:</p>
      <input className="event-number" type="number" min="1" max="100" value={numberOfEvents} onChange={this.handleInputChanged}>

      </input>


    </div>
  }
}

export default NumberofEvents;