import React, { Component } from 'react';
import { Grid, Segment, Form, Header, Message, Input, Button } from 'semantic-ui-react';

class Payments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BalanceDue: '$400.00',
      // PaymentAmount: '',
      // PaymentType: '',
    };
  }

  render() {
    const { BalanceDue, PaymentAmount, PaymentType } = this.state;
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">Payments</Header>
            <Header as="h2">Outstanding Balance</Header>
            <Message>
              <Message.Header>{BalanceDue}</Message.Header>
            </Message>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h2">Payment Details</Header>
            <Input placeholder="Payment Amount" />
            <Segment basic>Payment Method</Segment>
            <Form.Group inline>
              <Form.Field label="Visa" control="input" type="radio" name="paymentType" />
              <Form.Field label="MasterCard" control="input" type="radio" name="paymentType" />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group widths="equal">
              <Form.Field
                id="CCNumber"
                control={Input}
                label="Credit Card Number  "
                placeholder="Enter Number here"
              />
              <Form.Field
                id="CCExpiration"
                control={Input}
                label="Expiration Date  "
                placeholder="Enter Date here"
              />
              <Form.Field
                id="CCCVV"
                control={Input}
                label="Credit Card CVV  "
                placeholder="Enter CVV here"
              />
            </Form.Group>
            <Form>
              <Form.Field>
                <input placeholder="Name on Bank Account" />
              </Form.Field>
              <Form.Field>
                <input placeholder="Type of Account" />
              </Form.Field>
              <Form.Field>
                <input placeholder="Routing Number" />
              </Form.Field>
              <Form.Field>
                <input placeholder="Accounting Number" />
              </Form.Field>
              <Button secondary>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Payments;
