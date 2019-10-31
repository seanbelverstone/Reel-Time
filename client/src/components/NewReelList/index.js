import React from "react";

// RecipeList renders a bootstrap list item
function NewReelList (props) {
  return (
    <ul className="list-group">{props.children}</ul>
  );
}

export default NewReelList;