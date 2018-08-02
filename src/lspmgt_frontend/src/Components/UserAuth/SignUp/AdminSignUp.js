import React, { Component } from 'react';
import { Grid, Button, Form, INput } from 'semantic-ui-react';
import axios from 'axios';
import Checkout from './Checkout';

class AdminSignUp extends Component {
  render() {
    return (
      <div>
        <Checkout />
      </div>
    );
  }
}

export default AdminSignUp;
