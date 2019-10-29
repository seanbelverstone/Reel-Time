import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import BackgroundVideo from "../components/BackgroundVideo";

class LoginPage extends Component {
  render() {

    return (
        <div>
            <BackgroundVideo />
            <DefaultCard>
            <Logo></Logo>
            <LoginForm></LoginForm>
            </DefaultCard>
        </div>
    );
  }
}

export default LoginPage;