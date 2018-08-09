import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom'; // Redirect deleted from here
// import axios from 'axios';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';
import { Loader } from '../Common/Components';

import { Tooltip } from 'react-tippy';

import { connect } from 'react-redux';
import { signInUser } from '../Redux/Actions';

Amplify.configure(AmplifyConfig);

class Login extends Component {
  state = {
    username: '',
    password: '',
    loader: false,
    wrongPwd: true,
  };

  handleSignin = () => {
    this.setState({ loader: true });
    Auth.signIn(this.state.username, this.state.password)
      .then((data) => {
        let user = data.signInUserSession.idToken.payload['custom:access_level'];

        // let status = data.idToken.payload['custom:access_level'] == 'admin' ? 'admin' : 'tenant';

        this.setState({ loader: false });
        this.props.signInUser(user);
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        this.setState({
          loader: false,
          wrongPwd: false,
        });
        console.log('THERE WAS AN ERROR -> ', err);
      });
    setTimeout(() => {
      this.setState({ wrongPwd: true });
    }, 3000);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSignin();
  };

  // determines if submit button displays using boolean
  canBeDisplayed = () => {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  };

  render() {
    return (
      <Container style={{ marginTop: '7rem' }}>
        <Loader stat={this.state.loader} />
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: '550px' }}>
            <Header style={styles.title}>PropertyMaxx</Header>
            <Form size="large" style={{ maxWidth: '100%' }} onSubmit={this.handleSubmit}>
              {/* <Segment raised style={{ maxWidth: '100%' }}> */}
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                type="email"
                name="username"
                placeholder="Email"
                onChange={this.handleInput}
                required
              />
              <Tooltip
                title="Password must contain at least one special character, one upper case, and one lower case with a minimum length of 8"
                position="top"
                trigger="click"
                style={{ 'background-color': 'blue' }}
              >
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleInput}
                  required
                />
              </Tooltip>
              <Button
                fluid
                size="large"
                // disabled={!this.canBeDisplayed()}
                style={styles.button}
                onClick={this.handleSubmit}
              >
                Sign In
              </Button>
              {/* <Link to="/">
                  <Button size='large'>Back</Button>
                </Link> */}
              {/* </Segment> */}
            </Form>
            <Message attached="bottom" info content style={{ textAlign: 'center' }}>
              <Link to="/signup">Need an account? Sign Up here.&nbsp;</Link> <br />
              <Link to="/">Forgot Password.&nbsp;</Link>
            </Message>
            <Message negative hidden={this.state.wrongPwd}>
              <Link to="/">Wrong Email or Password?&nbsp;</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#093F6B',
    margin: '1rem 0',
    color: '#F2F2F0',
  },
  title: {
    color: '#093F6B',
    textAlign: 'center',
    fontSize: '3rem',
  },
};

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
