import React from 'react';
import "./style.css";

function Title(props) {
    
    return (
        <div className="title-text">
            <p>{ props.title }</p>
        </div>
      );
}

export default Title;