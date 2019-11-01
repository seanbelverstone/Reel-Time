

import React from "react";
import "./style.css";

function UsernameDisplay(props) {
    
    return (
        <div className="username-text">
            <p>{ props.username }testing</p>
        </div>
      );
}

export default UsernameDisplay;