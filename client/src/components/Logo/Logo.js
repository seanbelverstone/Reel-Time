import React, { Component } from 'react';
import "./Logo.css";
import AppLogo from "";

class Logo extends Component {

    render () {
        return (
            <div>
                <img src={AppLogo} alt="Application Logo" />
            </div>
        )
    }
}

export default Logo;
