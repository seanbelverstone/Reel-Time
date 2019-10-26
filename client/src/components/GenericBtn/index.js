import React from "react";
import { Button } from "reactstrap";
import "./style.css";

const GenericBtn = ({btnText}) => {
  return(
    <Button>
      {btnText}
    </Button>
  );
}

export default GenericBtn;