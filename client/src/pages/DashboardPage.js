import React, { Component } from "react";
import DashboardCard from "../components/DashboardCard";
import Logo from "../components/Logo";
import DashboardForm from "../components/DashboardForm";
import UsernameDisplay from "../components/UsernameDisplay";
import Title from "../components/TitleForEachPage";

const allCookies = document.cookie.split(";");
const userNameToken = allCookies[14].split("=");
const userNameValue = userNameToken[1];

class DashboardPage extends Component {
    state = {
        title : "Create Your Reel",
        username: userNameValue
      }

    render () {
        return (
            <div>
            <DashboardCard>
            <div className="page-header">
                <Logo />
                <p className="title-div">
                    <Title title={this.state.title} />
                    <UsernameDisplay username={this.state.username}/>
                </p>
            </div>          
            <DashboardForm />
            </DashboardCard>
            </div>

        );
    }
}


export default DashboardPage;