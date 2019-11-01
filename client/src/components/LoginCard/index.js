import React, { Component } from "react";
import "./style.css";

class LoginCard extends Component {
  render() {
    return (
      <div className="loginCard">
        {this.props.children}
        <span className="copyright">© 2019 Reel Time</span>
      </div>
    )
  }
}

export default LoginCard;
