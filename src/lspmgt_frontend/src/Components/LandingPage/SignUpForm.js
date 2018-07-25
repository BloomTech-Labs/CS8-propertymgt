import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Email: '',
      Phone: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  // handle user form input
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { Name, Email, Phone } = this.state;

    return (
      <Form>
        <Form.Field>
          <label id="name">Name</label>
          <input placeholder="Full Name" />
        </Form.Field>
        <Form.Field>
          <label id="name">Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label id="name">Phone</label>
          <input placeholder="Phone Number" />
        </Form.Field>
      </Form>
    );
  }
}

export default SignUpForm;
