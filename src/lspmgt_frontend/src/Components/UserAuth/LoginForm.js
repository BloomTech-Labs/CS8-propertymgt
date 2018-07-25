import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SignUpModal from './SignUpModal';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  // handle all input field changes
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // eslint suggests destructuring the next line
    const { username, password } = this.state;
    if (username && password) {
      axios
        // need /login route via userRouter.js, nonexistent
        .post('/login', this.state)
        .then()
        .catch();
    }
  };

  render() {
    return (
      <div className="login-form">
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}
        </style>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              PropertyMaxx
            </Header>
            <Form size="large" style={{ maxWidth: '100%' }}>
              <Segment raised style={{ maxWidth: '100%' }}>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" />
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              {/* link to /signup instead of /admin/properties */}
              New to us? <SignUpModal />
            </Message>
            <Link to="/">
              <Button secondary>Back</Button>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
