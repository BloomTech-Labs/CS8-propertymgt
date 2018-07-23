import React, {Component} from 'react';
import { Elements } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';

class Checkout extends Component {
  render() {
    return (
      <Elements>
        <PaymentForm />
      </Elements>
    );
  }
}

export default Checkout;