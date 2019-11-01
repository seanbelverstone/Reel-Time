import React, { Component } from "react";
import "./style.css";

class SuccessReelCard extends Component {
  render() {
    return (
      <div className="successReelCard">
        {this.props.children}
        <span className="copyright">© 2019 Reel Time</span>
      </div>
    )
  }
}

export default SuccessReelCard;
