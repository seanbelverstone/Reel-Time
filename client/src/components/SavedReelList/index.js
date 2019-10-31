import React from "react";
import "./style.css";


// RecipeList renders a bootstrap list item
function SavedReelList (props) {
  return (
    <ul className="list-group">{props.children}</ul>
  );
}

export default SavedReelList;