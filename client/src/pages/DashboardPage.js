import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import DashboardForm from "../components/DashboardForm";
import UsernameDisplay from "../components/UsernameDisplay";




class DashboardPage extends Component {
    render () {
        return (
            <div>
            <DefaultCard>
            <Logo />
            <UsernameDisplay />
            <DashboardForm />
            </DefaultCard>
            </div>

        );
    }
}


export default DashboardPage;