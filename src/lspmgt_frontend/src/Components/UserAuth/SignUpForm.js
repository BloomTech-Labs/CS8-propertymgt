import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';

export default class SignUp extends Component {
  state = {
    Name: '',
    Email: '',
    Phone: '',
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
      .post('http://localhost:5000/users/signup', temp)
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
    return (
      <Form>
        <Form.Input
          label="Name"
          placeholder="Tenant name.."
          type="text"
          name="Name"
          value={this.state.Name}
          onChange={this.handleInput}
        />
        <Form.Input
          label="Email"
          placeholder="Tenant email.."
          type="text"
          name="Email"
          value={this.state.Email}
          onChange={this.handleInput}
        />
        <Form.Input
          label="Phone"
          placeholder="Tenant phone.."
          type="text"
          name="Phone"
          value={this.state.Phone}
          onChange={this.handleInput}
        />
        <Button disabled={!this.canBeDisplayed()} type="Submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
