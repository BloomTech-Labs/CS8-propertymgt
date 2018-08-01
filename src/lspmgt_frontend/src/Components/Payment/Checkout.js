import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import InjectedPaymentForm from './PaymentForm';

class Checkout extends Component {
  render() {
    return (
      <Elements>
        <InjectedPaymentForm />
      </Elements>
    );
  }
}

export default Checkout;
