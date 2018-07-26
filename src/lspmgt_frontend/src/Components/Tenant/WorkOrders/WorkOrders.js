import React, { Component } from 'react';
import { Grid, Form, Header, Message, Icon, Button } from 'semantic-ui-react';

class WorkOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Header as="h1">Submit a Work Order </Header>
        </Grid.Row>
        <Message>
          <Icon name="phone" />
          <p>24/7 Maintenance</p>
          <p>1-800-123-9876</p>
        </Message>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form>
              <Form.Input fluid label="Address" placeholder="Address" />
              <Form.TextArea
                label="WorkOrder Desc"
                placeholder="Enter Description of your Work Order"
              />
              <Form.Input fluid label="Phone Number" placeholder="Phone Number" />
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Icon name="file image outline" size="massive" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Form>
            <Form.Checkbox label="Permission to Enter?" />
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Row>
      </Grid>
    );
  }
}

export default WorkOrders;
