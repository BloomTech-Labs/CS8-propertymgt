import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';

export default class SignUp extends Component {
  state = {
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    RetypePassword: '',
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

    axios
      .post('/users/tenant/signup', temp)
      .then((res) => {
        console.log('Posted user..', res);
      })
      .catch((err) => {
        console.log('Error in SignUpForm', err);
      });
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
        <Form.Input
          label="Name"
          placeholder="Tenant name.."
          type="text"
          name="Name"
          value={Name}
          onChange={this.handleInput}
        />
        <Form.Input
          label="Email"
          placeholder="Tenant email.."
          type="text"
          name="Email"
          value={Email}
          onChange={this.handleInput}
        />
        <Form.Input
          label="Phone"
          placeholder="Tenant phone.."
          type="text"
          name="Phone"
          value={Phone}
          onChange={this.handleInput}
        />
        <Form.Input
          label="Password"
          placeholder="Enter Password"
          type="text"
          name="Password"
          value={Password}
          onChange={this.handleInput}
        />
        <Form.Input
          label="RetypePassword"
          placeholder="Confirm your Password"
          type="text"
          name="RetypePassword"
          value={RetypePassword}
          onChange={this.handleInput}
        />
        <Button disabled={!this.canBeDisplayed()} type="Submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
