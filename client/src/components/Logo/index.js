import React from "react";
import "./style.css";
import logo from './reel-time-logo.png';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <img src={logo} alt="Reel Time Logo" />
            </div>
        )
    }
}

export default Logo;
