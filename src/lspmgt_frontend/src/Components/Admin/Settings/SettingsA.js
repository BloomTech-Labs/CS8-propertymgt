import React, { Component } from 'react';
import { Form, Input, Button, Grid, Header } from 'semantic-ui-react';
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
    // const { Email, Phone, DisplayName, OldPassword, NewPassword } = this.state;
    return (
      <Grid>
        <Grid.Column>
          <Header as="h1">Account Settings</Header>
          <Form>
            <Form.Field
              icon="at"
              iconPosition="left"
              control={Input}
              label="Email"
              onChange={this.handleChange}
            />
            <Form.Field
              icon="phone"
              iconPosition="left"
              control={Input}
              label="Phone Number"
              onChange={this.handleChange}
            />
            <Form.Field
              icon="user"
              iconPosition="left"
              control={Input}
              label="Username"
              onChange={this.handleChange}
            />
            <Form.Group>
              <Form.Checkbox label="Receive Texts?" />
              <Form.Checkbox label="Receive Emails?" />
            </Form.Group>
          </Form>
          <Header as="h2">Password Reset</Header>
          <Form>
            {/* <Form.Field control={Input} label="Old Password" /> */}
            <Form.Field icon="key" iconPosition="left" control={Input} label="New Password" />
            <Form.Field
              icon="protect"
              iconPosition="left"
              control={Input}
              label="Re-enter Password"
            />
            <Button secondary>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SettingsA;
