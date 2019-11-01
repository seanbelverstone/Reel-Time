import React, { Component } from "react";
import "./style.css";

class SavedReelsCard extends Component {
  render() {
    return (
      <div className="savedReelsCard">
        {this.props.children}
        <span className="copyright">© 2019 Reel Time</span>
      </div>
    )
  }
}

export default SavedReelsCard;
