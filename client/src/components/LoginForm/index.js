import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./style.css";


class LoginForm extends Component {

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
                        >LOG IN
                    </Button>
                </Form>
            </div>
        )
    }
}


export default LoginForm;
