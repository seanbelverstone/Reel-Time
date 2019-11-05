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
    state = {
        title: "New Reel + Yum Combo",
    }

    componentWillMount = () => {
        this.getReel();
    }

    getReel = () => {
        var currentMovie = localStorage.getItem("movie");
        var currentRecipe = localStorage.getItem("recipe");

        movie = JSON.parse(currentMovie);
        recipe = JSON.parse(currentRecipe);

        console.log(movie, recipe);
    }

    reReel = () => {
        this.movieSearch().then(() => {
          this.recipeSearch().then(() => {
            document.location.reload();
          })
        })
    }

    movieSearch = () => {
        var movieCookie = document.cookie.split(";");
        var movieSplit = movieCookie[3].split("=");
        var movieValue = movieSplit[1];

        return API.searchMovie(movieValue)
          .then(results => {
    
            movieResults = results.data.results;
    
            // generates a random number
            var randomNumber = Math.floor(Math.random() * 9) +1;
    
            // grabs a result in a random position, parses it into a string then adds it to local storage.
            // Local storage can only accept strings
            var movieString = JSON.stringify(movieResults[randomNumber]);
            localStorage.setItem("movie", movieString);
          });
      }


      recipeSearch = () => {
        var cuisineCookie = document.cookie.split(";");
        var cuisineSplit = cuisineCookie[4].split("=");
        var cuisineValue = cuisineSplit[1];

        console.log(cuisineValue);

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
                <StreamingService/>
            </div>

            <div className="button-section">
                <BackToDashButton/>
                <Button onClick={this.reReel}/>
                <SaveAndWatchButton/>
            </div>

            </NewReelCard>
            </div>
        );
    }
}


export default NewReelPage;