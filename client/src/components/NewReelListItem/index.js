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
    const {title, actors, link, description, newReelMovieImg, recipeTitle, recipeCuisine, recipeLink, newReelRecipeImg} = this.props;

  return (
    <li>
      <div className="new-reel-content">
        <div className="movie-data">
          <h4 className="movie-pick"># REEL PICK</h4>
          <img className="movie-image" src={`https://image.tmdb.org/t/p/original${this.props.movieImg}`} alt={title} />
          <p className="movie-title"><span>Title: </span>{this.props.title}</p>
          <p className="movie-description"><span>Description: </span>{this.props.description}</p>
        </div>

        <div className="recipe-data">
          <h4 className="food-pick"># YUM PICK</h4>
          <img className="recipe-image" src={this.props.recipeImage} alt={recipeTitle} />
          {/* <img className="recipe-image" src={newReelRecipeImg} alt={recipeTitle} /> */}
          <p className="recipe-title"><span>Title: </span>{this.props.recipeTitle}</p>
          {/* <p className="recipe-title"><span>Title: </span>{recipeTitle}</p> */}

          <p className="recipe-cuisine"><span>Cuisine: </span>Italian</p>
          {/* <p className="recipe-cuisine"><span>Cuisine: </span>{recipeCuisine}</p> */}

          <p className="recipe-link"><span>Recipe: </span><a href="https://www.goodtoknow.co.uk/recipes/spaghetti-carbonara" target="_blank">CLICK ME</a></p>
          {/* <p className="recipe-link"><span>Link: </span>{recipeLink}</p> */}
        </div>
      </div>

        <div className="book-buttons">
            {/* {!isDelete ? (
                need to pass this function name to the deconstructor
            <button onClick={this.HandleSave}>{this.state.text}</button>
            ) : (
                need to pass this function name to the deconstructor
            <button onClick={HandleClick}>Delete</button>
            )} */}
            {/* <a className="view-link btn" rel="noreferrer noopener" target="_blank" href={link}>View</a> */}
        </div>
    </li>
  );
  }
}

export default NewReelListItem;