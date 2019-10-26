import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./ShareButton.css";

class ShareButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    onClick={this.onSubmit}
                    id="share-button">SHARE</Button>
            </div>
        )
    }
}

export default ShareButton;