import React, { Component } from 'react';
import { Grid, Segment, Form } from 'semantic-ui-react';

class WorkOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Segment basic>Submit a Work Order</Segment>
        </Grid.Row>
        <Grid.Row column={2}>
          <Grid.Column>
            <Segment basic>Address</Segment>
            <Segment basic>Description of issue</Segment>
            <Segment basic>Phone Number</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>Related Photo</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Segment basic>Permission to enter</Segment>
          <Segment basic>Submit form</Segment>
        </Grid.Row>
      </Grid>
    );
  }
}

export default WorkOrders;
