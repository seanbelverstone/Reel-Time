import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

class LoginPage extends Component {
  render() {

    return (
        <div>
            <DefaultCard>
            <Logo></Logo>
            <LoginForm></LoginForm>
            </DefaultCard>
        </div>
    );
  }
}

export default LoginPage;