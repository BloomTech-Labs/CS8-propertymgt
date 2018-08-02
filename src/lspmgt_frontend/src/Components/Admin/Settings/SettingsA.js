import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import './SettingsA.css';

class SettingsA extends Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Phone: '',
      DisplayName: '',
      OldPassword: '',
      NewPassword: '',
      id: 123,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.state;
    axios
      .patch(`http://localhost:5000/api/settings/update/${id}`, this.state)
      .then((res) => {
        console.log('Updated admin info..', res);
      })
      .catch((err) => {
        console.log('Error in SettingsA component..', err);
      });
  };

  render() {
    const { Email, Phone, DisplayName, OldPassword, NewPassword } = this.state;
    return (
      <Form className="form">
        <Form.Group className="settings">
          <Form.Input label="Email: " name="Email" value={Email} onChange={this.handleChange} />
          <Form.Input label="Phone: " name="Phone" value={Phone} onChange={this.handleChange} />
          <Form.Input
            label="DisplayName: "
            name="DisplayName"
            value={DisplayName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="OldPassword: "
            name="OldPassword"
            value={OldPassword}
            onChange={this.handleChange}
          />
          <Form.Input
            label="NewPassword: "
            name="NewPassword"
            value={NewPassword}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button type="Submit" onClick={this.handleSubmit} content="Save" />
      </Form>
    );
  }
}

export default SettingsA;
