import React, { Component } from "react";
import "./style.css";

class DashboardCard extends Component {
  render() {
    return (
      <div className="dashboardCard">
        {this.props.children}
        <span className="copyright">© 2019 Reel Time</span>
      </div>
    )
  }
}

export default DashboardCard;
