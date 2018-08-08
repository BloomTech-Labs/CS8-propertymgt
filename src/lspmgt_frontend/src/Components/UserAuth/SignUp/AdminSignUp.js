import React, { Component } from 'react';
// import { Grid, Button, Form, INput } from 'semantic-ui-react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Checkout from './Checkout';

// *************************
// TO BE PHASED OUT -- DEPRECATED
// *************************

class AdminSignUp extends Component {
  render() {
    return (
      <div>
        <h1> ADMIN SIGNUP </h1>
        <Checkout />
      </div>
    );
  }
}

export default withRouter(AdminSignUp);
