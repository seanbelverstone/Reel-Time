import React, { Component } from "react";
import DashboardCard from "../components/DashboardCard";
import Logo from "../components/Logo";
import DashboardForm from "../components/DashboardForm";
import UsernameDisplay from "../components/UsernameDisplay";




class DashboardPage extends Component {
    render () {
        return (
            <div>
            <DashboardCard>
            <Logo />
            <UsernameDisplay />
            <DashboardForm />
            </DashboardCard>
            </div>

        );
    }
}


export default DashboardPage;