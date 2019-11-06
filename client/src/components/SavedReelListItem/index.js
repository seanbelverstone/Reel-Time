// import React from "react";
// import "./style.css"
// import StarRating from "../StarRatingComponent";
// import ShareButton from "../ShareButton";
// import DeleteButton from "../DeleteButton";
// import ReplayButton from "../ReplayButton";

// // RecipeList renders a bootstrap list item
// function SavedReelListItem (props) {
//     return (
//         <div>
//             <li>
//                 <div className="saved-content">
//                     <p className="time-stamp">Watched: 00:00:00 / xx.xx.2019</p>
//                     <div className="movie-content-container">
//                         <img className="movie-image" src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt=""></img>
//                         <div className="movie-content-right">
//                             <h5 className="movie-title">Title: Black Panther</h5>

//                             <StarRating />

//                             <p className="movie-synopsis"><span id="synopsis">Synopsis: </span>After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.</p>
                        
//                             <ul className="buttons">
//                                 <li><ReplayButton /></li>
//                                 <li><ShareButton /></li>
//                                 <li><DeleteButton /></li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="saved-recipe">
//                         <p><span id="saved-recipe-head">Saved Recipe</span></p>
//                         <p><span id="saved-recipe"># Menu: </span>Food Title Here</p>
//                         <p><span id="saved-recipe"># Link: </span><a href="#">CLICKABLE LINK HERE</a></p>
//                     </div>
//                 </div>
//             </li>
//             <li>
//             <div className="saved-content">
//                     <p className="time-stamp">Watched: 00:00:00 / xx.xx.2019</p>
//                     <div className="movie-content-container">
//                         <img className="movie-image" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt=""></img>
//                         <div className="movie-content-right">
//                             <h5 className="movie-title">Title: Avengers: Infinity War</h5>

//                             <StarRating />

//                             <p className="movie-synopsis"><span id="synopsis">Synopsis: </span>As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.</p>
                        
//                             <ul className="buttons">
//                                 <li><ReplayButton /></li>
//                                 <li><ShareButton /></li>
//                                 <li><DeleteButton /></li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="saved-recipe">
//                         <p><span id="saved-recipe-head">Saved Recipe</span></p>
//                         <p><span id="saved-recipe"># Menu: </span>Food Title Here</p>
//                         <p><span id="saved-recipe"># Link: </span><a href="#">CLICKABLE LINK HERE</a></p>
//                     </div>
//                 </div>
//             </li>
//             <li>
//             <div className="saved-content">
//                     <p className="time-stamp">Watched: 00:00:00 / xx.xx.2019</p>
//                     <div className="movie-content-container">
//                         <img className="movie-image" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg" alt=""></img>
//                         <div className="movie-content-right">
//                             <h5 className="movie-title">Title: The Lion King</h5>

//                             <StarRating />

//                             <p className="movie-synopsis"><span id="synopsis">Synopsis: </span>Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.</p>
                        
//                             <ul className="buttons">
//                                 <li><ReplayButton /></li>
//                                 <li><ShareButton /></li>
//                                 <li><DeleteButton /></li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="saved-recipe">
//                         <p><span id="saved-recipe-head">Saved Recipe</span></p>
//                         <p><span id="saved-recipe"># Menu: </span>Food Title Here</p>
//                         <p><span id="saved-recipe"># Link: </span><a href="#">CLICKABLE LINK HERE</a></p>
//                     </div>
//                 </div>
//             </li>
//         </div>
//     );
// }

// export default SavedReelListItem;


import React from "react";
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
                <p className="time-stamp">{`Watched: ${props.timestamp}`}</p>

                <img className="movie-image" src={props.movieImage} alt=""></img>

                <h5 className="movie-title">{props.movieTitle}</h5>

                <StarRating />

                <p className="movie-synopsis"><span id="synopsis">Synopsis: </span>{props.movieSynopsis}</p>
                
                <ul className="buttons">
                    <li><ReplayButton /></li>
                    <li><ShareButton /></li>
                    <li><DeleteButton /></li>
                </ul>

                <div className="saved-recipe">
                    <p><span id="saved-recipe-head">Saved Recipe</span></p>
                    <p><span id="saved-recipe"># Menu: </span>{props.recipeTitle}</p>
                    <p><span id="saved-recipe"># Link: </span><a href={props.recipeLink}>CLICKABLE LINK HERE</a></p>
                </div>
            </div>
        </li>
    );
}

export default SavedReelListItem;