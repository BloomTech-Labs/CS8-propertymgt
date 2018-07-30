/*eslint-disable import/first*/
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';

Amplify.configure(AmplifyConfig);

import TenantLogin from './TenantLogin';
import AdminLogin from './AdminLogin';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    Auth.currentSession()
      .then((data) => {
        console.log(data);
        this.props.history.push('/tenant/dashboard');
      })
      .catch((err) => console.log(err));
  }

  handleSignin = () => {
    console.log(this.state);
    Auth.signIn(this.state.username, this.state.password)
      .then((data) => {
        console.log('Sign in sucess data -> ', data);
        this.props.history.push('/tenant/dashboard');
      })
      .catch((err) => {
        console.log('THERE WAS AN ERROR -> ', err);
      });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(Amplify);
    this.handleSignin();
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
                  name="username"
                  placeholder="E-mail address"
                  onChange={this.handleInput}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleInput}
                />
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Segment>
              <AdminLogin /> <TenantLogin />
            </Segment>
            <Link to="/">
              <Button secondary>Back</Button>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
