import React, { Component } from "react";
import SavedReelsCard from "../components/SavedReelsCard";
import Logo from "../components/Logo";
import BackgroundVideo from "../components/BackgroundVideo";
import Title from "../components/TitleForEachPage";
import SavedReelList from "../components/SavedReelList";
import SavedReelListItem from "../components/SavedReelListItem";
import API from "../utils/API";

class SavedReelPage extends Component {

  state = {
    title : "Saved Reel"
  }

  componentDidMount() {
    console.log("done")
  } 

  render() {

    return (
        <div>
            <BackgroundVideo />
            <SavedReelsCard>
            <div className="page-header">
              <Logo></Logo>
              <Title title={this.state.title} />
            </div>
            <div className="saved-page-container">
                <SavedReelList>
                    <SavedReelListItem/>
                </SavedReelList>
            </div>
            </SavedReelsCard>
        </div>
    );
  }
}

export default SavedReelPage;

/* SeanyB Psuedocode
On component mount, do an API get all saved reels using the user's ID.
*/