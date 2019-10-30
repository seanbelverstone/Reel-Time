import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import NewUserForm from "../components/NewUserForm";
import BackgroundVideo from "../components/BackgroundVideo";
import Title from "../components/TitleForEachPage";


class NewUserPage extends Component {

    state = {
        title : "New User Sign Up"
    }

    render() {
        return (
            <div>
            <BackgroundVideo />
            <DefaultCard>
            <div className="page-header">
                <Logo />
                <Title title={this.state.title} />
            </div>
            <NewUserForm />
            </DefaultCard>
            </div>

        );
    }
}
export default NewUserPage;