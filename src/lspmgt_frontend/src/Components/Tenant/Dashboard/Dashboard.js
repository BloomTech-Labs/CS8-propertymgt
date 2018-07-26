import React, { Component } from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid columns={2} relaxed style={{ maxWidth: '100%' }}>
        <Grid.Column>
          <Segment basic>Outstanding Balance</Segment>
          <Segment basic>Make Payment</Segment>
          <Segment basic>Submit a work order</Segment>
          <Segment basic>Alerts</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic>Office Address</Segment>
          <Segment basic>Office Number</Segment>
          <Segment basic>landlords email</Segment>
          <Segment basic>Maintenance info</Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dashboard;
