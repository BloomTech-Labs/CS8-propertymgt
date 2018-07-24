import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SignUp extends Component {
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
    if (this.state.username && this.state.password) {
      axios
        // /signup route via userRouter.js
        .post('/signup')
        .then()
        .catch();
    }
  };

  render() {
    return (
      <div className="signup-form">
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.signup-form {
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
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Re-type Password" />
                <Button color="blue" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Link to="/login">
              <Button secondary>Back</Button>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
