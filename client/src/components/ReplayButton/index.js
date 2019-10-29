import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./ReplayButton.css";

class ReplayButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    onClick={this.onSubmit}
                    id="replay-button">REPLAY</Button>
            </div>
        )
    }
}

export default ReplayButton;
