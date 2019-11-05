import React, { Component } from "react";
import NewReelCard from "../components/NewReelCard";
import Logo from "../components/Logo";
import NewReelList from "../components/NewReelList";
import NewReelListItem from "../components/NewReelListItem";
import Title from "../components/TitleForEachPage";
import UsernameDisplay from "../components/UsernameDisplay";
import BackToDashButton from "../components/BackToDashButton";
import SaveAndWatchButton from "../components/SaveAndWatchButton";
import StreamingService from "../components/StreamingService";
import { Button } from "reactstrap";
import API from "../utils/API";

var movie;
var recipe;
var movieResults;
var recipeResults;

class NewReelPage extends Component {
    
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {isButtonClicked: false};
        this.state.title = "New Reel + Yum Combo";
    }
    
    handleButtonClick() {
        this.setState({isButtonClicked: true});
    }

    componentWillMount = () => {
        this.getReel();
    }

    getReel = () => {
        // Grabs the previously stored results from local storage
        var currentMovie = localStorage.getItem("movie");
        var currentRecipe = localStorage.getItem("recipe");

        // Parses it from a string into a once again useable JSON and assigns it to a global variable
        movie = JSON.parse(currentMovie);
        recipe = JSON.parse(currentRecipe);
    }

    // This function is similar to the one on Dashboard form, however it reloads the page instead of navigating to the next one
    reReel = () => {
        this.movieSearch().then(() => {
          this.recipeSearch().then(() => {
            document.location.reload();
          })
        })
    }

    movieSearch = () => {
        // Grabs the genreId from cookies and plugs it into the API call
        var movieCookie = document.cookie.split(";");
        var movieSplit = movieCookie[3].split("=");
        var movieValue = movieSplit[1];

        return API.searchMovie(movieValue)
          .then(results => {
    
            movieResults = results.data.results;
    
            // generates a random number
            var randomNumber = Math.floor(Math.random() * 9) +1;
    
            // grabs a result in a random position, parses it into a string then adds it to local storage.
            // This overwrites previous storage
            var movieString = JSON.stringify(movieResults[randomNumber]);
            localStorage.setItem("movie", movieString);
          });
      }


      recipeSearch = () => {
        var cuisineCookie = document.cookie.split(";");
        var cuisineSplit = cuisineCookie[4].split("=");
        var cuisineValue = cuisineSplit[1];

        return API.searchRecipe(cuisineValue)
          .then(results => {
    
            recipeResults = results.data.hits;
    
            var randomNumber = Math.floor(Math.random() * 9) +1;
    
            // grabs a result in a random position, parses it into a string then adds it to local storage.
            // Local storage can only accept strings
            var recipeString = JSON.stringify(recipeResults[randomNumber]);
            localStorage.setItem("recipe", recipeString);
          });
      }

    
    render () {

        const isButtonClicked = this.state.isButtonClicked;
        let buttonDiv;

        if (!isButtonClicked) {
            buttonDiv = "";
        } else {
            buttonDiv = <StreamingService recipeLink={recipe.recipe.url}/>
        }

        return (
            <div>
            <NewReelCard>
            <div className="page-header">
                <Logo />
                <div className="title-div">
                    <Title title={this.state.title} />
                    <UsernameDisplay />
                </div>
            </div>

            <div className="new-reel-page-container">
                <NewReelList>
                    <NewReelListItem
                    // Movie data
                    movieImg={movie.poster_path}
                    movieTitle={movie.original_title}
                    description={movie.overview}

                    // Recipe data
                    recipeImage={recipe.recipe.image}
                    recipeTitle={recipe.recipe.label}
                    recipeLink={recipe.recipe.url}
                    recipeSource={recipe.recipe.source}
                    />
                </NewReelList>
            </div>
            
            <div className="streaming-buttons">
                {buttonDiv}
            </div>

            <div className="button-section">
                <BackToDashButton/>

                <Button onClick={this.reReel} id="reReel">RE-REEL</Button>

                <SaveAndWatchButton
                    onClick={this.handleButtonClick}/>
            </div>

            </NewReelCard>
            </div>
        );
    }
}


export default NewReelPage;