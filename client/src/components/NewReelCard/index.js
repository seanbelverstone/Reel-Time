import React, { Component } from "react";
import "./style.css";

class NewReelCard extends Component {
  render() {
    return (
      <div className="newReelCard" id="newReelCardId">
        {this.props.children}
        <span className="copyright">© 2019 Reel Time</span>
      </div>
    )
  }
}

export default NewReelCard;
