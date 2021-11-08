import React, { Component } from "react";

class Roller extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        "Group Discussions?",
        "Deep Talks?",
        "Mentorship?",
      ],
      current: 0,
    };
  }

  increaseIndex = () => {
    this.setState({
      current:
        this.state.current == this.state.names.length - 1
          ? (this.state.current = 0)
          : this.state.current + 1,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.increaseIndex();
    }, 2000);
  }

  render() {
    return this.state.names[this.state.current];
  }
}

export default Roller;