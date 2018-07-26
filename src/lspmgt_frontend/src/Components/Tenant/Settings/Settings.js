import React, { Component } from 'react';
import { Grid, Segment, Form } from 'semantic-ui-react';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Segment basic>Email</Segment>
          <Segment basic>Mobile#</Segment>
          <Segment basic>Get Text or Emails?</Segment>
          <Segment basic>Old Password</Segment>
          <Segment basic>New Password</Segment>
          <Segment basic>Save Changes</Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Settings;
