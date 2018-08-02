import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    // user clicked submit
    const { stripe } = this.props; // === this.props.stripe
    const { token } = await stripe.createToken({ name: 'Name' });
    const response = await fetch('/billing/testcharge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id,
    });

    if (response.ok) console.log('Purchase Complete');
  }

  render() {
    return (
      <div className="checkout">
        <p>Complete Purchase</p>
        <CardElement />
        <button onClick={this.submit} type="button">
          Confirm
        </button>
      </div>
    );
  }
}

export default injectStripe(PaymentForm);
