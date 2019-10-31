import React, {Component} from "react";
import "./style.css";

// BookListItem renders a list item containing data from the book api call
class NewReelListItem extends Component {
  state = {
    newReelMovieImg: "asfkjd"
  }
  HandleSave = () => {
    this.setState({text: "Saved"});
    this.props.HandleClick();
  }

  render() {
    const {title, actors, link, description, newReelMovieImg} = this.props;
  return (
    <li className="list-group-item">
        <div className="movie-headers">
            <p className="movie-title"><span>Title: </span>{title}</p>
            <p className="movie-actors"><span>Actors: </span>{actors}</p>
        </div>
        <div className="book-buttons">
            {/* {!isDelete ? (
                need to pass this function name to the deconstructor
            <button onClick={this.HandleSave}>{this.state.text}</button>
            ) : (
                need to pass this function name to the deconstructor
            <button onClick={HandleClick}>Delete</button>
            )} */}
            <a className="view-link btn" rel="noreferrer noopener" target="_blank" href={link}>
            View
            </a>
        </div>
        <div className="movie-data">
            <img className="movie-image" src={newReelMovieImg} alt={title} />
            <p className="movie-description"><span>Description: </span>{description}</p>
        </div>
    </li>
  );
  }
}

export default NewReelListItem;