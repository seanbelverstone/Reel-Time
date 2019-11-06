import React, { Component } from "react";
import DashboardCard from "../components/DashboardCard";
import Logo from "../components/Logo";
import DashboardForm from "../components/DashboardForm";
import UsernameDisplay from "../components/UsernameDisplay";
import Title from "../components/TitleForEachPage";

class DashboardPage extends Component {
    state = {
        title : "Create Your Reel"
      }

    render () {
        return (
            <div>
            <DashboardCard>
            <div className="page-header">
                <Logo />
                <div className="title-div">
                    <Title title={this.state.title} />
                    <UsernameDisplay />
                </div>
            </div>          
            <DashboardForm />
            </DashboardCard>
            </div>

        );
    }
}


export default DashboardPage;