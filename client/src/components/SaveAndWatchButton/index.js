import React from 'react';
import { Button } from "reactstrap";
import "./style.css";

const SaveAndWatchButton = (props) => {

    return (
            <Button 
                onClick={props.onClick}
                id="save-and-watch-button">SAVE + WATCH</Button>
    )
}


export default SaveAndWatchButton;
