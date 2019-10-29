import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import NewUserForm from "../components/NewUserForm";
import BackgroundVideo from "../components/BackgroundVideo";

class NewUserPage extends Component {
    render() {
        return (
            <div>
            <BackgroundVideo />
            <DefaultCard>
            <Logo />
            <NewUserForm />
            </DefaultCard>
            </div>

        );
    }
}
export default NewUserPage;