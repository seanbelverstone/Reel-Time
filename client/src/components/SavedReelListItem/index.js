import React from "react";
import "./style.css"
import ShareButton from "../ShareButton";
import DeleteButton from "../DeleteButton";
import ReplayButton from "../ReplayButton";
import RatingButton from "../RatingButton";

// RecipeList renders a bootstrap list item
function SavedReelListItem (props) {
    return (
        <li>
            <div className="saved-content">
                <p className="time-stamp"></p>
                <img className="movie-image" src="" alt=""></img>
                <img className="food-image" src="" alt=""></img>
                <ul className="buttons">
                    <li><ShareButton /></li>
                    <li><DeleteButton /></li>
                    <li><ReplayButton /></li>
                    <li><RatingButton /></li>
                </ul>
            </div>
        </li>
    );
}

export default SavedReelListItem;