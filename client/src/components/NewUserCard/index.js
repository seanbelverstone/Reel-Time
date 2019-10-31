import React, { Component } from "react";
import "./style.css";

class DefaultCard extends Component {
  render() {
    return (
      <div className="newUserCard">
        {this.props.children}
        <span className="copyright">© 2019 Reel Time</span>
      </div>
    )
  }
}

export default DefaultCard;
