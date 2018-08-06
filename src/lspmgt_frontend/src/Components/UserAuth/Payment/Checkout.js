import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';

class Checkout extends Component {
  render() {
    return (
      <Elements>
        <h1> ADMIN SIGNUP checkout </h1>
        <PaymentForm />
      </Elements>
    );
  }
}

export default Checkout;
