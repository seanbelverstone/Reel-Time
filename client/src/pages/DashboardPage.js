import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import GenericBtn from "../components/GenericBtn"
import DashboardForm from "../components/DashboardForm";



class DashboardPage extends Component {
    render () {
        return (
            <div>
            <DefaultCard>
            <Logo />
            <DashboardForm />

            <GenericBtn />
            </DefaultCard>
            </div>

        );
    }
}


export default DashboardPage;