import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./style.css";

class SaveAndWatchButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    onClick={this.onSubmit}
                    id="save-and-watch-button">SAVE + WATCH</Button>
            </div>
        )
    }
}

export default SaveAndWatchButton;
