import React, { Component } from "react";
import "./Stepper.css";

class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    };
  }

  subtractButton = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  addButton = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="stepper-div">
        <button onClick={this.subtractButton}>-</button>
        <h5>{this.state.counter}</h5>
        <button onClick={this.addButton}>+</button>
      </div>
    );
  }
}

export default Stepper;
