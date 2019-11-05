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

var movie;
var recipe;

class NewReelPage extends Component {
    // state = {
    //     title: "New Reel + Yum Combo"
    // }
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
        var currentMovie = localStorage.getItem("movie");
        var currentRecipe = localStorage.getItem("recipe");

        movie = JSON.parse(currentMovie);
        recipe = JSON.parse(currentRecipe);

        console.log(movie, recipe);
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
                <SaveAndWatchButton onClick={this.handleButtonClick}/>
            </div>

            </NewReelCard>
            </div>
        );
    }
}


export default NewReelPage;