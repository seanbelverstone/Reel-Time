import React, { Component } from "react";
import "./style.css";

class StreamingService extends Component {

  render() {
    return (
      <div className="streaming-buttons">
        <button className="netflix">NF</button>
        <button className="hulu">HL</button>
        <button className="amazon-prime">AP</button>
        <button className="apple-tv">AT</button>
      </div>
    )
  }
}

export default StreamingService;
