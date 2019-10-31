import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import NewUserPage from "./pages/NewUserPage";
import DashboardPage from "./pages/DashboardPage";
// import SavedReelsPage from "./pages/SavedReelsPage";
 import NewReelPage from "./pages/NewReelPage";
// import SuccessReelPage from "./pages/SuccessReelPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/new-user" component={NewUserPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/new-reel" component={NewReelPage} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
