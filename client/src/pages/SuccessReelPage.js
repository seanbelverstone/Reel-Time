import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import Title from "../components/TitleForEachPage";
class SuccessReelPage extends Component {
    state ={
        title: "Success"
    }
    render () {
        return (
            <div>
            <DefaultCard>
            <div className="page-header">
            <Logo></Logo>
              <Title title={this.state.title} />
            </div>
            <div><img alt="goes here"></img></div>
            <div><p><a href="https://www.netflix.com/">Netflix</a>,<a href="https://www.hbo.com/">HBO</a>, <a href="https://www.hulu.com/">Hulu</a>, <a href="https://www.amazon.com/gp/video/offers/ref=dvm_us_dl_sl_go_brw_pv3%7Cc_77172024769843_m_tqKSdolx-dc_">Amazon Prime Video</a></p></div>
            <br></br>
            <div><img alt="goes here"></img></div>
            <div><p>Clink any link above and get your movie and recipe.</p></div>
            </DefaultCard>
            </div>

        );
    }
}


export default SuccessReelPage;