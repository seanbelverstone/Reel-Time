import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import GenericBtn from "../components/GenericBtn"



class DashboardPage extends Component {
    render () {
        return (
            <div>
            <DefaultCard>
            <Logo />
            

            <GenericBtn />
            </DefaultCard>
            </div>

        );
    }
}


export default DashboardPage;