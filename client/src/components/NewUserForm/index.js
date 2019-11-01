import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FormErrors } from '../FormErrors';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./style.css"

class NewUserForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      formErrors: {username: '', email: '', password: ''},
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  

handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    () => { this.validateField(name, value) });
}

onSubmit = (event) => {
  event.preventDefault()
  API.createUser(this.state.username, this.state.email, this.state.password)
  .then(results => { 
    console.log(results)
      window.location.pathname = "/";
      
      
  }).catch(err => this.setState(
      {authError: "New user not created. Try again."}
  ));
}

validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.match(/^[a-zA-Z]*$/);
        fieldValidationErrors.username = usernameValid ? '' : ' can only be letters';
        break;
      case 'email':
        emailValid = value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        fieldValidationErrors.email = emailValid ? '' : ' can only be a valid email address';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
}

validateForm() {
    this.setState({
      formValid: 
      this.state.usernameValid &&
      this.state.emailValid &&
      this.state.passwordValid
    });
}

errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
}

render () {
    return (
      <div>
        <Form className="form-container">
        <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
          <Label for="username">Username</Label>
          <Input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={this.state.username}
              onChange={this.handleUserInput}
          />
        </FormGroup>

          <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            <Label for="password">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder=""
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </FormGroup>

          <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                        
            <Label for="password">Password</Label>
            
            <Input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={this.state.password}
                onChange={this.handleUserInput}
            />
          </FormGroup>

          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className="button-container">
              <Link to="/">
                  <Button onClick={this.onSubmit} id="signup_btn" disabled={!this.state.formValid}>Sign Up</Button>
              </Link>
          </div>
        </Form>
      </div>
    )
  }
}

export default NewUserForm;

