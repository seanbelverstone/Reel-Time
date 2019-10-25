import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Login from "./components/Login/Login";
// import NewUserButton from "./components/NewUserButton/NewUserButton";
import DefaultCard from "./components/DefaultCard/DefaultCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="Login-field">
          <DefaultCard/>
          {/* <Login/> */}
        </div>

        {/* <div className="Register-field">
          <NewUserButton/>
        </div>         */}

      </div>
    );
  }
}

export default App;
