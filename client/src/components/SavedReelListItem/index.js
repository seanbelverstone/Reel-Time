import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./style.css"
import StarRating from "../StarRatingComponent";
import ShareButton from "../ShareButton";
import DeleteButton from "../DeleteButton";
import ReplayButton from "../ReplayButton";

// RecipeList renders a bootstrap list item
function SavedReelListItem (props) {
    return (
        <li>
            <div className="saved-content">
                <p className="time-stamp">{`Watched: ${this.props.timestamp}`}</p>

                <img className="movie-image" src={this.props.movieImage} alt=""></img>

                <h5 className="movie-title">{this.props.movieTitle}</h5>

                <StarRating />

                <p className="movie-synopsis"><span id="synopsis">Synopsis: </span>{this.state.movieSynopsis}</p>
                
                <ul className="buttons">
                    <li><ReplayButton /></li>
                    <li><ShareButton /></li>
                    <li><DeleteButton /></li>
                </ul>

                <div className="saved-recipe">
                    <p><span id="saved-recipe-head">Saved Recipe</span></p>
                    <p><span id="saved-recipe"># Menu: </span>{this.props.recipeTitle}</p>
                    <p><span id="saved-recipe"># Link: </span><a href={this.props.recipeLink}>CLICKABLE LINK HERE</a></p>
                </div>
            </div>
        </li>
    );
}

export default SavedReelListItem;