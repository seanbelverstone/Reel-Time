import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
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
            <DefaultCard>
            <div className="page-header">
              <Logo></Logo>
              <p>
                <Title title={this.state.title} id="loginTitle" />
                <p id="loginSlogan">The app that makes your date</p>
              </p>
            </div>

            <LoginForm></LoginForm>
            </DefaultCard>
        </div>
    );
  }
}

export default LoginPage;