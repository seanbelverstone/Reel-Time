import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./style.css";

class RatingButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    onClick={this.onSubmit}
                    id="rating-button">RATING</Button>
            </div>
        )
    }
}

export default RatingButton;
