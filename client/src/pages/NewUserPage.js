import React, { Component } from "react";
import NewUserCard from "../components/NewUserCard";
import Logo from "../components/Logo";
import NewUserForm from "../components/NewUserForm";
import BackgroundVideo from "../components/BackgroundVideo";
import Title from "../components/TitleForEachPage";


class NewUserPage extends Component {

    state = {
        title : "Sign Up"
    }

    render() {
        return (
            <div>
            <BackgroundVideo />
            <NewUserCard>
            <div className="page-header">
                <Logo />
                <Title title={this.state.title} />
            </div>
            <NewUserForm />
            </NewUserCard>
            </div>

        );
    }
}
export default NewUserPage;