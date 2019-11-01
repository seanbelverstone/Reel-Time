import React, { Component } from "react";
import SuccessReelCard from "../components/SuccessReelCard";
import Logo from "../components/Logo";
import Title from "../components/TitleForEachPage";
import UsernameDisplay from "../components/UsernameDisplay";

class SuccessReelPage extends Component {
    state ={
        title: "Success",
        username: "username"
    }
    render () {
        return (
            <div>
            <SuccessReelCard>
            <div className="page-header">
                <Logo />
                <p className="title-div">
                    <Title title={this.state.title} />
                    <UsernameDisplay username={this.state.username}/>
                </p>
            </div>
            <div><img alt="goes here"></img></div>
            <div><p><a href="https://www.netflix.com/">Netflix</a>,<a href="https://www.hbo.com/">HBO</a>, <a href="https://www.hulu.com/">Hulu</a>, <a href="https://www.amazon.com/gp/video/offers/ref=dvm_us_dl_sl_go_brw_pv3%7Cc_77172024769843_m_tqKSdolx-dc_">Amazon Prime Video</a></p></div>
            <br></br>
            <div><img alt="goes here"></img></div>
            <div><p>Clink any link above and get your movie and recipe.</p></div>
            </SuccessReelCard>
            </div>

        );
    }
}


export default SuccessReelPage;