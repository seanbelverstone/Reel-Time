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
                <img className="movie-image" src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt=""></img>
                <ul className="buttons">
                    <li><ReplayButton /></li>
                    <li><ShareButton /></li>
                    <li><RatingButton /></li>
                    <li><DeleteButton /></li>
                </ul>
            </div>
        </li>
    );
}

export default SavedReelListItem;