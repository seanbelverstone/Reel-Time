import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./style.css";

class BackToDashButton extends Component {

    returnToDashboard = () => {
        window.location.pathname = "/dashboard";
    }

    render () {
        return (
            <div>
                <Button 
                    onClick={this.returnToDashboard}
                    id="back-to-dash-button">BACK TO DASHBOARD
                </Button>
            </div>
        )
    }
}

export default BackToDashButton;
