import React, { Component } from 'react';
import { Form, Input, Button, Grid, Header } from 'semantic-ui-react';
// import axios from 'axios';
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
      adminId: '',
      OldPassword: '',
      NewPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get id by passing email back to server
  // Get email from logged in user
  componentDidMount() {
    console.log('props in did mount --------> ', this.props);
    this.setState({
      email: this.props.userHandle.email,
      // phone: this.props.userHandle.phone,
      // name: this.props.userHandle.name,
      adminId: this.props.userHandle.adminId,
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.adminId === )
  // }

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
    console.log('before sending state to action, it is ->', this.state);
    this.props.updateUserSettings(this.state);
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
    const { email, phone, name } = this.state;
    console.log(
      'after action -> after reducer -> after mapToProps -> after setstate -> my state is ->',
      this.state
    );
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
              disabled
              onChange={this.handleChange}
            />
            <Form.Field
              icon="phone"
              iconPosition="left"
              control={Input}
              label="Phone Number"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <Form.Field
              icon="user"
              iconPosition="left"
              control={Input}
              label="Username"
              name="name"
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
            <Button style={StyleSheet.button} type="submit" onClick={this.handleSubmit}>
              Save
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {
  color: 'blue',
};

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
