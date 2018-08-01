import React, { Component } from 'react';
import { Grid, Button, Form, Input } from 'semantic-ui-react';
import axios from 'axios';
import Checkout from './Checkout';

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <Grid.Row>
          <Form.Field control={Input} label="Address" placeholder="Enter Address" />
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Form.Field control={Input} label="City" placeholder="Enter City" />
          </Grid.Column>
          <Grid.Column>
            <Form.Field control={Input} label="State" placeholder="Enter State" />
          </Grid.Column>
          <Grid.Column>
            <Form.Field control={Input} label="ZIP" placeholder="Enter ZIP" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Form.Field control={Input} label="CardNumber" placeholder="Enter Card Number" />
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field control={Input} label="Expiration" placeholder="Enter Card Expiration" />
          </Grid.Column>
          <Grid.Column>
            <Form.Field control={Input} label="CVC" placeholder="Enter Card CVC" />
          </Grid.Column>
        </Grid.Row> */}
        <Checkout />
      </div>
    );
  }
}

export default Payment;
