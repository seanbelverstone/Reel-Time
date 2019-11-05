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
        <p className="streaming-text">Clicking on the buttons will open 2 new tabs. One to the player you selected and one to the recipe above. Keep it Reel and see you next time!</p>
        <a href="https://www.netflix.com"><img className="netflix" src={netflix} alt="netflix"></img></a>

        <a href="https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F"><img className="hulu" src={hulu} alt="hulu"></img></a>
        
        <a href="https://www.apple.com/tv/"><img className="apple" src={apple} alt="appletv"></img></a>  
        
        <a href="https://www.amazon.com/Prime-TV-Shows/b?ie=UTF8&amp;node=7613705011"><img className="amazon" src={amazon} alt="netflix"></img></a>  
      </div>
    )
  }
}

export default StreamingService;
