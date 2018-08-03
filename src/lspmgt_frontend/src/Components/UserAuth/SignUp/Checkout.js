import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import injectedAdminSignUpForm from './AdminSignUpForm';
import { withRouter } from 'react-router-dom';

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1> ADMIN SIGNUP checkout </h1>
        <Elements>
          <injectedAdminSignUpForm />
        </Elements>
      </div>
    );
  }
}

export default withRouter(Checkout);
