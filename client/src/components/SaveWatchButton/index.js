import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./style.css";

class SaveWatchButton extends Component {

    render () {
        return (
            <div>
                <Button 
                  onClick={this.onSubmit}
                  id="delete-button">Save &amp; Watch
                </Button>
            </div>
        )
    }
}

export default SaveWatchButton;
