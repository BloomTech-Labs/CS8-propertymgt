/*eslint-disable import/first*/
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';
import { Loader } from '../Common/Components';

import { connect } from 'react-redux';
import { signInUser } from '../Redux/Actions';

Amplify.configure(AmplifyConfig);

class Login extends Component {
  state = {
    username: '',
    password: '',
    loader: false,
  };

  handleSignin = () => {
    this.setState({ loader: true });
    Auth.signIn(this.state.username, this.state.password)
      .then((data) => {
        // let isAdmin = data.idToken.payload['custom:access_level'] == 'admin' || 'tenant'

        this.setState({ loader: false });
        this.props.signInUser(true);
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        this.setState({ loader: false });
        console.log('THERE WAS AN ERROR -> ', err);
      });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSignin();
  };

  render() {
    return (
      <Container>
        <Loader stat={this.state.loader} />
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
                <Segment>
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

const mapStateToProps = (state) => {
  console.log('this is maptoprops --> ', state);
  return {
    isAdmin: state,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { signInUser }
  )(Login)
);
