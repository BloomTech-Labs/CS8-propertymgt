import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import injectedAdminSignUpForm from './AdminSignUpForm';

class Checkout extends Component {
  render() {
    return (
      <Elements>
        <injectedAdminSignUpForm />
      </Elements>
    );
  }
}

export default Checkout;
