import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
// import LoginForm from "../components/LoginForm";
import BackgroundVideo from "../components/BackgroundVideo";
import Title from "../components/TitleForEachPage";

class SavedReelPage extends Component {

  state = {
    title : "Saved Reel"
  }

  render() {

    return (
        <div>
            <BackgroundVideo />
            <DefaultCard>
            <div className="page-header">
              <Logo></Logo>
              <Title title={this.state.title} />
            </div>
            {/* <LoginForm></LoginForm> */}
            </DefaultCard>
        </div>
    );
  }
}

export default SavedReelPage;