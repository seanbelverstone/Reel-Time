import React, { Component } from "react";
import SavedReelsCard from "../components/SavedReelsCard";
import Logo from "../components/Logo";
import Title from "../components/TitleForEachPage";
import SavedReelList from "../components/SavedReelList";
import SavedReelListItem from "../components/SavedReelListItem";
import BackToDashButton from "../components/BackToDashButton";
import UsernameDisplay from "../components/UsernameDisplay";
import API from "../utils/API";

class SavedReelPage extends Component {

      state = {
        title : "Your Saved Reels",
        username: "username",
        reelResults: [],
        splitResults: []
      }

  componentDidMount() {

    this.loadReels();
    
  } 


  loadReels = () => {
    console.log("done")
    // this grabs the cookies and splits it to grab just the user's ID value
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    var userId = getCookie("id");
    console.log(userId)

    API.getReels(userId)
      .then(results => {
          
        this.setState({reelResults: results.data});


        });

        // The array of items from the database is stored in this results.data.
        // Please create an if statement, saying if no results, just maybe render a div saying "no saved reels :("
        // If results returned, map through them and append them to the corresponding areas below.
  // })
}


deleteReel = (id) => {
  console.log("DELETING")
  API.deleteReel(id)
    .then(results => {
      window.location.reload();
    });
}

 renderSavedReels() {
    return this.state.reelResults.map(reel => { 
      return (
        <SavedReelListItem
          key={reel.id}
          timestamp={reel.createdAt}
          movieTitle={reel.movieTitle}
          movieImage={reel.movieImage}
          movieSynopsis={reel.movieSynopsis}
          rating={reel.rating}
          recipeTitle={reel.recipeTitle}
          recipeLink={reel.recipeLink}
          handleDelete={() => this.deleteReel(reel.id)}
        /> 
      )
  })
 }

  render() {

    return (
        <div>
            <SavedReelsCard>
            <div className="page-header">
                <Logo />
                <div className="title-div">
                    <Title title={this.state.title} />
                    <UsernameDisplay />
                </div>
            </div>
            <div className="saved-page-container">
                <SavedReelList>
                  {this.renderSavedReels()}
                </SavedReelList>
            </div>
            <div className="back-to-dashboard">
                <BackToDashButton />
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