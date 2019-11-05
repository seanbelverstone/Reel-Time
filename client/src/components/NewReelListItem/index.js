import React, {Component} from "react";
import "./style.css";

// BookListItem renders a list item containing data from the book api call
class NewReelListItem extends Component {
  // state = {
  //   newReelMovieImg: BackToDashButton
  // }

  // HandleSave = () => {
  //   this.setState({text: "Saved"});
  //   this.props.HandleClick();
  // }

  render() {
  return (
    <li>
      <div className="new-reel-content">
        <div className="movie-data">
          <h4 className="movie-pick"># REEL PICK</h4>
          <img className="movie-image" src={`https://image.tmdb.org/t/p/original${this.props.movieImg}`} alt={this.props.movieTitle} />
          <p className="movie-title"><span>Title: </span>{this.props.movieTitle}</p>
          <p className="movie-description"><span>Description: </span>{this.props.description}</p>
        </div>

        <div className="recipe-data">
          <h4 className="food-pick"># YUM PICK</h4>
          <img className="recipe-image" src={this.props.recipeImage} alt={this.props.recipeTitle} />
          <p className="recipe-title"><span>Title: </span>{this.props.recipeTitle}</p>
          <p className="recipe-cuisine"><span>Source: </span>{this.props.recipeSource}</p>
          <p className="recipe-link"><span>Recipe: </span><a href={this.props.recipeLink} target="_blank">CLICK ME</a></p>
        </div>
      </div>
    </li>
  );
  }
}

export default NewReelListItem;