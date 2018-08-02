/*eslint-disable import/first*/
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';
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

  // componentDidMount() {

  //   Auth.currentSession()
  //   .then(data => {
  //     data.idToken.payload['custom:access_level'] == 'admin' ?
  //     this.props.history.push('/admin/dashboard') :
  //     this.props.history.push('/tenant/dashboard');
  //   })
  //   .catch(err => console.log(err))
  // }

  handleSignin = () => {
    Auth.signIn(this.state.username, this.state.password)
      .then((data) => {
        data.signInUserSession.idToken.payload['custom:access_level'] == 'admin' ?
        this.props.history.push('/admin/dashboard') :
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
      <Container>
        <Grid inverted textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              PropertyMaxx
            </Header>
            <Form inverted size="large" style={{ maxWidth: '100%' }} onSubmit={this.handleSubmit}>
              <Segment inverted raised style={{ maxWidth: '100%' }}>
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
                <Segment >
                <Button fluid size="large">
                  Login
                </Button>
                {/* <Link to="/">
                  <Button size='large'>Back</Button>
                </Link> */}
                  </Segment>
              </Segment>
            </Form>

          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
