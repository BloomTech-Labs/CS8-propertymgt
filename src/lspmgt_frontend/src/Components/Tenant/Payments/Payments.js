import React, { Component } from 'react';
import { Grid, Segment, Form } from 'semantic-ui-react';

class Payments extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Segment basic>Outstanding Balance</Segment>
        </Grid.Row>
        <Grid.Row column={3}>
          <Grid.Column>
            <Segment basic>Payment Details</Segment>
            <Segment basic>Payment Method</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>Payment info Card or Bank account</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Payments;
