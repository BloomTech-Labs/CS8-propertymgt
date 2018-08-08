import React, { Component } from 'react';
import { Form, Input, Button, Grid, Header } from 'semantic-ui-react';
import axios from 'axios';
import './SettingsA.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserSettings, getUserSettings } from '../../Redux/Actions';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../../Config/Auth';
Amplify.configure(AmplifyConfig);

class SettingsA extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      phone: '',
      name: '',
      adminId,
      OldPassword: '',
      NewPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get id by passing email back to server
  // Get email from logged in user
  // ????
  componentDidMount() {
    Auth.currentSession()
      .then((data) => {
        console.log('current session -> ', data.idToken.payload);
        const { email } = data.idToken.payload;
        const user = data.idToken.payload['custom:access_level'];

        const sendEvent = {
          action: 'getusersettings',
          payload: {
            email,
            user,
          },
        };
        this.props.getUserSettings(sendEvent);

        this.setState({});
      })
      .catch((err) => console.log('there was an erro -> ', err));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // .patch(`{event.use}${event.action}`,event.payload)
    // const event = {
    //   user: 'admin',
    //   action: 'updatesettings',
    //   payload: this.state,
    // };

    this.props.userHandle.updateSettings(this.state);
    // axios
    //   .patch(`http://localhost:5000/api/settings/update/${id}`, this.state)
    //   .then((res) => {
    //     console.log('Admin settings patched -->', res);
    //   })
    //   .catch((err) => {
    //     console.log('Error patching admin -->', err);
    //   });
  };

  render() {
    const { email, phone, name, OldPassword, NewPassword } = this.state;
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
              name="Email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Field
              icon="phone"
              iconPosition="left"
              control={Input}
              label="Phone Number"
              name="Phone"
              value={phone}
              onChange={this.handleChange}
            />
            <Form.Field
              icon="user"
              iconPosition="left"
              control={Input}
              label="Username"
              name="DisplayName"
              value={name}
              onChange={this.handleChange}
            />
          </Form>
          <Header as="h2">Password Reset</Header>
          <Form>
            {/* <Form.Field control={Input} label="Old Password" /> */}
            <Form.Field
              icon="key"
              iconPosition="left"
              control={Input}
              label="New Password"
              type="password"
            />
            <Form.Field
              icon="protect"
              iconPosition="left"
              control={Input}
              label="Re-enter Password"
              type="password"
            />
            <Button secondary type="submit" onClick={this.handleSubmit}>
              Save
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('this is maptoprops in admin settings -->', state);
  return {
    userHandle: state,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateUserSettings, getUserSettings }
  )(SettingsA)
);
