import React, { Component } from 'react';
import "./DefaultCard.css";
import Login from "../Login/Login";
import NewUserButton from "../NewUserButton/NewUserButton";
import { Card } from "reactstrap";


class DefaultCard extends Component {

    render () {
        return (
            <div>
                <Card className="default_card">
                    <Login/>
                    <NewUserButton/>
                </Card>
            </div>
        )
    }
}

export default DefaultCard;
