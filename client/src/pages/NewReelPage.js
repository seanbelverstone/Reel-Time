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

        let token;
        let uID;

        // getting user-id from cookie
        let strDC  = JSON.stringify(document.cookie);        
        let aa = strDC.search("}; ") + 3;
        let userInfoArr = strDC.substring(aa, aa.length).split(";");
        console.log("8888888888888888");
        console.log(userInfoArr);

        for(let i = 0; i < userInfoArr.length; i++) {

            userInfoArr[i] = userInfoArr[i].trim();
            let val = userInfoArr[i].split("=");

            if(val[0] === "id") {
                uID = val[1];  }
            else if(val[0] === "token") {
                token = val[1]}
        }

        console.log("11111111");
        console.log(token);
        console.log("11111111");
        console.log(uID);



        // // gathering movie data in localstorage
        // const moviestr = localStorage.getItem("movie");
        // const movieObj = JSON.parse(moviestr);

        // // gathering saved food-data in localstorage
        // const foodStr  = localStorage.getItem("recipe");
        // const foodObj  = JSON.parse(foodStr);

        // let reelObj = { movieTitle: movieObj.title,
        //                 movieImage: movieObj.poster_path,
        //                 movieSynopsis: movieObj.overview,
        //                 recipeTitle: foodObj.recipe.label, 
        //                 recipeImage: foodObj.recipe.image,
        //                 recipeLink: foodObj.recipe.shareAs,
        //                 rating: null,
        //                 user_id: uID
        // };

        // this.storeReel(reelObj);
    }

    componentWillMount = () => {
        this.getReel();
    }

    storeReel = reelObj => {
        API.saveReel(reelObj)
        .then(abc => {
            // atm, no post-stored process
        })
        .catch(err => {
            console.log(err);
        });
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
            buttonDiv = <StreamingService />
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
                    recipeLink={recipe.recipe.url}
                    onClick={this.handleButtonClick}/>
            </div>

            </NewReelCard>
            </div>
        );
    }
}


export default NewReelPage;