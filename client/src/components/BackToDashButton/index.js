import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./style.css";

class BackToDashButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    onClick={this.onSubmit}
                    id="back-to-dash-button">BACK TO DASHBOARD</Button>
            </div>
        )
    }
}

export default BackToDashButton;
