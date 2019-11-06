import React, {Component} from "react";
import "./style.css";


class NewReelListItem extends Component {

  render() {
  return (
    <li>
      <div className="new-reel-content">
        <div className="movie-data">
          <h4 className="movie-pick"># REEL PICK</h4>
          <img className="movie-image" src={`https://image.tmdb.org/t/p/original${this.props.movieImg}`} alt={this.props.movieTitle} />
          <p className="movie-title"><span>Title: </span>{this.props.movieTitle}</p>
          <p className="movie-rating"><span>Rating: </span>  {this.props.movieRating} / 10</p>
          <p className="movie-release-date"><span>Date Released: </span>{this.props.movieReleaseDate}</p>
          <p className="movie-description"><span>Synopsis: </span>{this.props.description}</p>
        </div>

        <div className="recipe-data">
          <h4 className="food-pick"># YUM PICK</h4>
          <img className="recipe-image" src={this.props.recipeImage} alt={this.props.recipeTitle} />
          <p className="recipe-title"><span>Title: </span>{this.props.recipeTitle}</p>
          <p className="recipe-cuisine"><span>Source: </span>{this.props.recipeSource}</p>
          <p className="recipe-link"><span>Recipe: </span><a href={this.props.recipeLink} target="_blank" rel="noopener noreferrer">CLICK ME</a></p>
        </div>
      </div>
    </li>
  );
  }
}

export default NewReelListItem;