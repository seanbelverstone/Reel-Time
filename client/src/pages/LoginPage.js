import React, { Component } from "react";
import LoginCard from "../components/LoginCard";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import BackgroundVideo from "../components/BackgroundVideo";
import Title from "../components/TitleForEachPage";
import "../App.css";

class LoginPage extends Component {

  state = {
    title : "Have A Reel Time"
  }

  render() {

    return (
        <div>
            <BackgroundVideo />
            <LoginCard>
            <div className="page-header">
              <Logo></Logo>
              <div>
                <Title title={this.state.title} id="loginTitle" />
                <p id="loginSlogan">The app that makes your date</p>
              </div>
            </div>

            <LoginForm></LoginForm>
            </LoginCard>
        </div>
    );
  }
}

export default LoginPage;