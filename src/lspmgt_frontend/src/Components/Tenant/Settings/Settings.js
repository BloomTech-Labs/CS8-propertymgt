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
            <Form.Group style={styles.checkboxes}>
              <Form.Checkbox label="Receive Texts?" />
              <Form.Checkbox label="Receive Emails?" />
            </Form.Group>
          </Form>
          <Header as="h2">Password Reset</Header>
          <Form>
            {/* <Form.Field control={Input} label="Old Password" /> */}
            <Form.Field icon="key" iconPosition="left" control={Input} placeholder="New Password" />
            <Form.Field
              icon="protect"
              iconPosition="left"
              control={Input}
              placeholder="Re-enter Password"
            />
            <Button secondary>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {
  checkboxes: {
    paddingTop: '.5rem',
  },
};

export default Settings;
