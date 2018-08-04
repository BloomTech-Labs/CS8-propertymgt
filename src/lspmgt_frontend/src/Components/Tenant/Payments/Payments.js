import React, { Component } from 'react';
import { Grid, Segment, Form, Header, Message, Input, Button, Select } from 'semantic-ui-react';

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
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16}>
            <Header as="h1">Payments</Header>
            <Header as="h2" style={styles.balanceHeader}>
              Outstanding Balance
            </Header>
            <Message style={styles.balanceDue}>
              <Message.Header>{BalanceDue}</Message.Header>
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={styles.paymentHeader}>
          <Grid.Column mobile={16}>
            <Header as="h2">Payment Details</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} style={styles.paymentRow}>
          <Grid.Column mobile={16} computer={8} tablet={8}>
            <Form>
              <Form.Field
                control={Input}
                placeholder="Payment Amount"
                style={{ paddingTop: '1.65rem' }}
              />
              <Form.Group>
                <Form.Field
                  control={Select}
                  label="Payment Method"
                  options={fields}
                  placeholder="Select Method"
                  style={{ marginBottom: '1rem' }}
                />
                {/* <Form.Field label="Visa" control="input" type="radio" name="paymentType" />
              <Form.Field label="MasterCard" control="input" type="radio" name="paymentType" /> */}
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column mobile={16} computer={8} tablet={8}>
            <Form>
              <Form.Field
                id="CCName"
                control={Input}
                label="Cardholder's Name"
                placeholder="John Doe"
              />

              <Form.Field
                id="CCNumber"
                control={Input}
                label="Card Number"
                // placeholder=""
              />

              <Form.Group widths="2">
                <Form.Field
                  id="CCExpiration"
                  control={Input}
                  label="Expiration Date"
                  placeholder="MM/YY"
                />
                <Form.Field id="CCCVV" control={Input} label="CVV" />
              </Form.Group>

              <Form.Field
                id="CCAcountType"
                control={Input}
                label="Account Type"
                placeholder="Checking, Savings, etc"
              />

              <Form.Field id="CCRoutingNumber" control={Input} placeholder="Routing Number" />

              <Form.Field id="CCAccountNumber" control={Input} placeholder="Account Number" />

              <Button style={styles.button}>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const fields = [
  { key: 'bank', text: 'Bank Account', value: 'bankaccount' },
  { key: 'visa', text: 'Visa', value: 'visa' },
  { key: 'mc', text: 'MasterCard', value: 'mastercard' },
];

const styles = {
  button: {
    backgroundColor: 'rgb(0, 94, 155)',
    color: 'whitesmoke',
  },
  balanceHeader: {
    marginTop: '2rem',
    marginBottom: '0',
  },
  balanceDue: {
    maxWidth: '226px',
    marginTop: '1.78rem',
  },
  paymentHeader: {
    paddingBottom: '0',
  },
  paymentRow: {
    paddingTop: '0',
  },
};

export default Payments;
