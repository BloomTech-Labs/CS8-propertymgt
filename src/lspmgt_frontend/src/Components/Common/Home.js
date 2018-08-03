import React, { Component } from 'react';
import { Container, Grid, GridColumn, Gr } from 'semantic-ui-react';
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
  };

  componentDidMount() {
    this.props.getUserStatus();
    this.setState({
      allow: this.props.isAdmin,
    });
  }

  render() {
    if (this.props.isAdmin) {
      return <Dashboard />;
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
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUserStatus }
  )(Home)
);
