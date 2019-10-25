import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Login.css";


class Login extends Component {

    render () {
        return (
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
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                </FormGroup>

                <Button 
                    onClick={this.onSubmit}
                    id="login_btn"
                    >LOG IN</Button>
            </Form>
        )
    }
}


export default Login;
