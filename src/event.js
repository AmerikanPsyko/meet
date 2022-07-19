import React, { Component } from "react";

class Event extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showDetails: false,
    };
  }
 
  isClicked = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };


  render() {
    return <div></div>;
  }
}
export default Event;