import React, { Component } from "react";
import "./style.css";
import netflix from "../../images/netflix-logo.png";
import hulu from "../../images/hulu-logo.png";
import apple from "../../images/apple-tv-logo.png";
import amazon from "../../images/amazon-tv-logo.png";

class StreamingService extends Component {
  // const {recipeLink} = this.props;
  
  handleClickNetflix = () => {
    window.open('https://www.netflix.com/login','_blank');
    window.open('http://yahoo.com','_blank');
  }
  handleClickHulu = () => {
    window.open('https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F','_blank');
    window.open('http://yahoo.com','_blank');
  }
  handleClickApple = () => {
    window.open('https://www.apple.com/tv/','_blank');
    window.open('http://yahoo.com','_blank');
  }
  handleClickAmazon = () => {
    window.open('https://www.amazon.com/Prime-Movies/b?ie=UTF8&node=7613704011','_blank');
    window.open('http://yahoo.com','_blank');
  }
  

  render() {
    return (
      <div className="streaming-buttons">
        <p className="streaming-text">This Reel is now in your Saved Reels collection!<br></br>Click on your favorite movie streamer to open a tab to watch and a tab to eat.</p>
        <button onClick={this.handleClickNetflix}><img className="netflix" src={netflix} alt="netflix"></img></button>

        <button onClick={this.handleClickHulu}><img className="hulu" src={hulu} alt="hulu"></img></button>
        
        <button onClick={this.handleClickApple}><img className="apple" src={apple} alt="appletv"></img></button>  
        
        <button onClick={this.handleClickAmazon}><img className="amazon" src={amazon} alt="amazon"></img></button>  
      </div>
    )
  }
}

export default StreamingService;
