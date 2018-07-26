import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Form>
            <Form.Input label="Email" placeholder="Email" />
            <Form.Input label="Phone Number" placeholder="Phone Number" />
          </Form>
          <Form.Group inline>
            <Form.Checkbox label="Get Texts?" />
            <Form.Checkbox label="Get Emails?" />
          </Form.Group>
          <Form.Input label="Old Password" />
          <Form.Input label="New Password" />
          <Button primary>Save</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Settings;
