import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";
import API from "../../utils/API";
import "./style.css";


class LoginForm extends Component {

    state = {
        username: "",
        password: ""
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
            // results.token
            // store this to cookies
            // in the ccatch, set the state to show a message "your username/ password etc etc
            // using the auth key and bearer token (look on postman) 
            // any time any other request is made, grab from teh cookie and pass that token as an auth header
         }).catch(err => console.log("error:",err));
    }

    render () {
        return (
            <div>
                <Form>
                    <FormGroup>
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
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <Button 
                        onClick={this.onSubmit}
                        id="login_btn"
                        >LOG IN
                    </Button>
                </Form>
            </div>
        )
    }
}


export default LoginForm;
