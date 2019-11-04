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
          <h4 className="movie-pick">REEL PICK</h4>
          <img className="movie-image" src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt={title} />
          {/* <img className="movie-image" src={newReelMovieImg} alt={title} /> */}
          <p className="movie-title"><span>Title: Black Panther</span>{title}</p>
          <p className="movie-actors"><span>Actors: </span>Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o</p>
          {/* <p className="movie-actors"><span>Actors: </span>{actors}</p> */}

          <p className="movie-description"><span>Description: </span>After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.</p>
          {/* <p className="movie-description"><span>Description: </span>{description}</p> */}
        </div>

        <div className="recipe-data">
          <h4 className="food-pick">YUM PICK</h4>
          <img className="recipe-image" src="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/07/Cheap-family-meals-Recipes-under-%C2%A31-per-head-920x605.jpg" alt={recipeTitle} />
          {/* <img className="recipe-image" src={newReelRecipeImg} alt={recipeTitle} /> */}
          <p className="recipe-title"><span>Title: </span>{recipeTitle}</p>
          <p className="recipe-cuisine"><span>Cuisine: </span>{recipeCuisine}</p>
          <p className="recipe-link"><span>Link: </span>{recipeLink}</p>
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