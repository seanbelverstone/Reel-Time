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
                <h5 className="movie-title">Title: Black Panther</h5>
                <p className="movie-synopsis"><span id="synopsis">Synopsis: </span>After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.</p>
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