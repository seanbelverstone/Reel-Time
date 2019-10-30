import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FormErrors } from '../FormErrors';
import { Link } from "react-router-dom";
import "./style.css";


class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          formErrors: {username: '', password: ''},
          usernameValid: false,
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

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'username':
            usernameValid = value.match(/^[a-zA-Z]*$/);
            fieldValidationErrors.username = usernameValid ? '' : ' can only be letters';
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
                        passwordValid: passwordValid
                      }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
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
                        <Link to="/dashboard">
                            <Button onClick={this.onSubmit} id="login_btn" disabled={!this.state.formValid}>LOG IN</Button>
                        </Link>
                    </div>
                    <div className="button-container">
                        <Link to="/new-user">
                            <p id="new-user-text-link">Create New User</p>
                        </Link>
                    </div>
                </Form>
            </div>
        )
    }
}


export default LoginForm;
