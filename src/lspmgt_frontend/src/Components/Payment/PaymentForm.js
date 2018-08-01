import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Email: '',
      Phone: '',
      stripeToken: {},
    };
  }

  // this.submit = this.submit.bind(this);
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');

    this.props.stripe.createToken().then((token) => {
      console.log('Received Stripe token:', token);
      this.setState({
        stripeToken: token,
      });

      axios
        .post('http://localhost:5000/billing/new_admin', this.state)
        .then((res) => {
          console.log('full success token created and admin made', res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    console.log(this.state);

    // axios
    //   .post('http://localhost:5000/billing/new_admin', this.state)
    //   .then((res) => {
    //     console.log('full success token created and admin made', res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  // async submit(e) {
  //   // user clicked submit
  //   const { stripe } = this.props; // === this.props.stripe
  //   const { token } = await stripe.createToken({ name: 'Name' });
  //   const response = await fetch('/billing/testcharge', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'text/plain' },
  //     body: token.id,
  //   });

  //   if (response.ok) console.log('Purchase Complete');
  // }

  render() {
    return (
      <div className="checkout">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="Prepare for Trouble"
              name="Name"
              onChange={this.handleInput}
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="And Make it Double"
              name="Email"
              onChange={this.handleInput}
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Meeeowth Thats Right!"
              type="test"
              name="Phone"
              onChange={this.handleInput}
            />
          </Form.Group>
          <CardElement />
          <button type="button" onClick={this.handleSubmit}>
            Confirm
          </button>
        </Form>
      </div>
    );
  }
}

export default injectStripe(PaymentForm);
