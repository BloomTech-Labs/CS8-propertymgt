import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../../Config/Auth';
Amplify.configure(AmplifyConfig);
class AdminSignUp extends Component {
  state = {
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    RetypePassword: '',
    stripeToken: {},
  };

  // handle all input field changes
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // sends new user information to db
  handleSubmit = (event) => {
    event.preventDefault();

    const temp = { User: this.state };

    this.props.stripe.createToken().then((token) => {
      this.setState({
        stripeToken: token,
      });
    });

    Auth.signUp({
      username: this.state.Email,
      password: this.state.Password,
      attributes: {
        'custom:access_level': 'admin',
      },
    }).then((data) => {
      console.log('user signed up -> ', data);
    });
    // .catch((err) => console.log('there was an error -> '), err);

    // axios
    //   .post('http://localhost:5000/users/admin/signup', temp)
    //   .then((res) => {
    //     console.log('Posted user..', res);
    //   })
    //   .catch((err) => {
    //     console.log('Error in SignUpForm', err);
    //   });
  };

  // determines if submit button displays using boolean
  canBeDisplayed = () => {
    const { Name, Email, Phone } = this.state;
    return Name.length > 0 && Email.length > 0 && Phone.length > 0;
  };

  render() {
    const { Name, Email, Phone, Password, RetypePassword } = this.state;

    return (
      <Form>
        <Form.Field
          label="Name"
          placeholder="Admin name.."
          control={Input}
          type="text"
          name="Name"
          value={Name}
          onChange={this.handleInput}
        />
        <Form.Field
          label="Email"
          placeholder="Tenant email.."
          type="text"
          name="Email"
          value={Email}
          onChange={this.handleInput}
        />
        <Form.Field
          label="Phone"
          placeholder="Admin phone.."
          type="text"
          name="Phone"
          value={Phone}
          onChange={this.handleInput}
        />
        <Form.Field
          label="Password"
          placeholder="Enter Password"
          type="text"
          name="Password"
          value={Password}
          onChange={this.handleInput}
        />
        <Form.Field
          label="RetypePassword"
          placeholder="Confirm your Password"
          type="text"
          name="RetypePassword"
          value={RetypePassword}
          onChange={this.handleInput}
        />
        <CardElement />
        <Button disabled={!this.canBeDisplayed()} type="Submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default injectStripe(AdminSignUp);
