import React from "react";
import { Button } from "reactstrap";
import "./style.css";

const NewUserSubmitBtn = () => {
  return(
    <div className="new-user-button-container">
      <Button
        id="new-user-submit-btn"
        type="submit"
      >
        Sign Up
      </Button>
    </div>
  );
}

export default NewUserSubmitBtn;