import React from "react";
import "./style.css"
import ShareButton from "../ShareButton";
import DeleteButton from "../DeleteButton";
import ReplayButton from "../ReplayButton";

// RecipeList renders a bootstrap list item
function SavedReelListItem (props) {
    return (
        <li>
            <div className="saved-content">
                <p className="time-stamp">Watched: 00:00:00 / xx.xx.2019</p>
                <img className="movie-image" src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt=""></img>
                <ul className="buttons">
                    <li><ReplayButton /></li>
                    <li><ShareButton /></li>
                    <li><DeleteButton /></li>
                </ul>
                <p className="recipe-link">Your Recipe: <a href="#">CLICKABLE LINK HERE</a></p>
            </div>
        </li>
    );
}

export default SavedReelListItem;