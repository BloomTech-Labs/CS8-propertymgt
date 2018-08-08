import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';
import { connect } from 'react-redux';
import { getUserStatus } from '../Redux/Actions';
import {
  LandingPage,
  Dashboard,
  LoginForm,
  AdminSignup,
  AdminSignupForm,
  AdminCheckout,
  Loader,
} from './Components';

Amplify.configure(AmplifyConfig);

class Home extends Component {
  state = {
    allow: false,
    isAdmin: false,
  };

  componentDidMount() {
    console.log('checking for user auth -> ', this.props);
    this.props.getUserStatus();
    this.setState({
      allow: this.props.isLoggedIn,
    });
  }

  render() {
    console.log('this is home checking user ->  ', this.props);
    if (this.props.isLoggedIn) {
      return <Dashboard isAdmin={this.props} />;
    }
    return (
      <Container fluid>
        <Loader stat={false} />
        <LandingPage />
        <Route path="/signup" component={AdminCheckout} />
        <Route path="/login" component={LoginForm} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getUser: state,
    isAdmin: state.isAdmin,
    isLoggedIn: state.isLoggedIn,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUserStatus }
  )(Home)
);
