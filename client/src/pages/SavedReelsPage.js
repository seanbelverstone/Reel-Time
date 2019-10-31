import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import BackgroundVideo from "../components/BackgroundVideo";
import Title from "../components/TitleForEachPage";
import SavedReelList from "../components/SavedReelList";
import SavedReelListItem from "../components/SavedReelListItem";

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
            <div className="saved-page-container">
                <SavedReelList>
                    <SavedReelListItem/>
                </SavedReelList>
            </div>
            </DefaultCard>
        </div>
    );
  }
}

export default SavedReelPage;