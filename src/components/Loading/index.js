import React, { Component } from "react";

class Loading extends Component {
  componentWillUnmount() {
    ("componentWillUnmount");
  }
  render() {
    return <p>Loading...</p>;
  }
}

export default Loading;
