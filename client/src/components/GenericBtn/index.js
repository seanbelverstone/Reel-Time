import React from "react";
import { Button } from "reactstrap";
import "./style.css";

const GenericBtn = ({btnText}) => {
  return(
    <Button
      id="generic-btn"
    >
      {btnText}
    </Button>
  );
}

export default GenericBtn;