import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../utils/API";
import "./style.css";


class LoginForm extends Component {

    state = {
        username: "",
        password: "",
        authError: ""
    }

    // Handles the change for state, so we can access the username and password entered by the client.
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(
          {[name]: value}
        )
      }

    onSubmit = (event) => {
        event.preventDefault()
        API.checkUser(this.state.username, this.state.password)
        .then(results => {
            document.cookie = results.data.token;
            // stores the token to cookies. By default, the cookie is deleted when the browser is closed
            window.location.pathname = "/dashboard"; 
            // changes the location to the dashboard
         }).catch(err => this.setState(
             {authError: "Your username or password is incorrect."}
            ));
    }

    

    createUser = (event) => {
        event.preventDefault();
        window.location.pathname = "/new-user";
    }

    render () {
        return (
            <div>
                <Form className="form-container">
                   
                    <FormGroup className="form-group">
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <div id="authError">
                        {this.state.authError}
                    </div> 
                    <div className="button-container">
                        <Button 
                            onClick={this.onSubmit}
                            id="login_btn"
                            >LOG IN
                        </Button>
                        <Button
                            onClick={this.createUser}
                            id="new-user"
                            >CREATE NEW USER
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}


export default LoginForm;
