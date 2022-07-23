import React, { Component } from "react";

// Info Alert

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

export { InfoAlert };

//Error Alert

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = "red";
      }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(255, 98, 0)';
    this.backgroundColor = 'rgb(202,202,202)';
    this.borderRadius = '8px';
    this.top = '90px';
  }
}

export { ErrorAlert, OfflineAlert };

