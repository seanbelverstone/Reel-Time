import React from "react";
import { Button } from "reactstrap";
import "./style.css";

const NewUserSubmitBtn = () => {
  return(
    <Button
      id="new-user-submit-btn"
      type="submit"
    >
      Sign Up
    </Button>
  );
}

export default NewUserSubmitBtn;