import React from 'react';
import "./style.css";

function Title(props) {
    
    return (
        <div className="title-text">
            { props.title }
        </div>
      );
}

export default Title;