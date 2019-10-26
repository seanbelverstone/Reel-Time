import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import NewUserSubmitBtn from "../NewUserSubmitBtn";
import "./style.css"

const NewUserForm = () => {

  return(
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </FormGroup>

      <NewUserSubmitBtn />
    </Form>
  );
}
export default NewUserForm;

