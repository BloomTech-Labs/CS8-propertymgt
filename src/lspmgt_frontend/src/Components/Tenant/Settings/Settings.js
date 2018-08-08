import React, { Component } from 'react';
import { Grid, Button, Form, Header, Input } from 'semantic-ui-react';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Header as="h1">Account Settings</Header>
          <Form>
            <Form.Field icon="at" iconPosition="left" control={Input} label="Email" />
            <Form.Field icon="phone" iconPosition="left" control={Input} label="Phone Number" />
            <Form.Group>
              <Form.Checkbox label="Receive Texts?" />
              <Form.Checkbox label="Receive Emails?" />
            </Form.Group>
          </Form>
          <Header as="h2">Password Reset</Header>
          <Form>
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
            <Button style={styles.button}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#093F6B',
    color: '#F2F2F0',
    width: '120px',
  },
};

export default Settings;

// 1. tenant logs in? add tenant info to redux store
// 2.
