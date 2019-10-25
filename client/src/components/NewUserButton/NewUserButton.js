import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./NewUserButton.css";

class NewUserButton extends Component {

    render () {
        return (
            <div>
                <Button 
                    onClick={this.onSubmit}
                    id="register-button">REGISTER</Button>
            </div>
        )
    }
}

export default NewUserButton;
