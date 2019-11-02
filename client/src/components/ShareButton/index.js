import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./style.css";

class ShareButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    a href="https://www.facebook.com/"
                    target="_blank"
                    onClick={this.onSubmit}
                    id="share-button">SHARE</Button>
            </div>
        )
    }
}

export default ShareButton;
