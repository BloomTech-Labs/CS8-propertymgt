import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AdminSignUpModal from './AdminSignUpModal';
import TenantSignUpModal from './TenantSignUpModal';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInput = (e) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('this is the submit -> ', this.state);
    // // eslint suggests destructuring the next line
    // const { username, password } = this.state;
    // if (username && password) {
    //   axios
    //     // need /login route via userRouter.js, nonexistent
    //     .post('/login', this.state)
    //     .then()
    //     .catch();
    // }
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
            <Form size="large" style={{ maxWidth: '100%' }} onSubmit={this.handleSubmit}>
              <Segment raised style={{ maxWidth: '100%' }}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="email"
                  placeholder="E-mail address"
                  onChange={this.handleInput}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleInput}
                />
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              {/* link to /signup instead of /admin/properties */}
              <AdminSignUpModal /> <TenantSignUpModal />
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
