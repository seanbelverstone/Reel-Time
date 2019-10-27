import React, { Component } from "react";
import "./App.css";
import NewUserForm from "./components/NewUserForm";
import GenericBtn from "./components/GenericBtn";
import DefaultCard from "./components/DefaultCard/DefaultCard";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Login-field">
          <DefaultCard/>
        </div>

        <NewUserForm />
        <GenericBtn btnText="create reel" />
        <GenericBtn btnText="view saved reel" />
        <GenericBtn btnText="find new reel" />

      </div>
    );
  }
}

export default App;
