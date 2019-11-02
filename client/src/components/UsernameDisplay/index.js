import React from "react";
import "./style.css";

function UsernameDisplay(props) {
    return (
        <p className="username-text">Hi, { props.username }!</p>
    );
}

export default UsernameDisplay;