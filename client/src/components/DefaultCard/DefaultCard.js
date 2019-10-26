import React, { Component } from 'react';
import "./DefaultCard.css";
import LoginForm from "../LoginForm/LoginForm";
import NewUserButton from "../NewUserButton/NewUserButton";
import { Card } from "reactstrap";


class DefaultCard extends Component {

    render () {
        return (
            <div>
                <Card className="default_card">
                    <LoginForm/>
                    <NewUserButton/>
                </Card>
            </div>
        )
    }
}

export default DefaultCard;
