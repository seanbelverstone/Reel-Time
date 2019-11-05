import React, { Component } from "react";
import "./style.css";
import netflix from "../../images/netflix-logo.png";
import hulu from "../../images/hulu-logo.png";
import apple from "../../images/apple-tv-logo.png";
import amazon from "../../images/amazon-tv-logo.png";

class StreamingService extends Component {

  render() {
    return (
      <div className="streaming-buttons">
        {/* <button className="netflix"><img src={netflix}></img></button> */}

        <a href="https://www.netflix.com/Login"><img className="netflix" src={netflix}></img></a>

        <button className="hulu"><img src={hulu}></img></button>

        <button className="apple-tv"><img src={apple}></img></button>   
        
        <button className="amazon-prime"><img src={amazon}></img></button> 
      </div>
    )
  }
}

export default StreamingService;
