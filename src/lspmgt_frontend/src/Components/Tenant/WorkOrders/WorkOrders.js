import React, { Component } from 'react';
import { Grid, Form, Header, Message, Icon, Button } from 'semantic-ui-react';
import axios from 'axios';

class WorkOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PropertyAddr: '',
      Issue: '',
      PhotoIssue: '',
      Permission: true,
      TenantPhone: '',
      Status: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/tenant/workorder', this.state)
      .then((res) => {
        console.log('Post under tenants workorder successfull', res);
      })
      .catch((err) => {
        console('Error under tenants workorder', err);
      });
  };

  render() {
    const { PropertyAddr, Issue, TenantPhone } = this.state;
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
              <Form.Input
                fluid
                label="Address"
                placeholder="Address"
                name="PropertyAddr"
                value={PropertyAddr}
                onChange={this.handleChange}
              />
              <Form.TextArea
                label="WorkOrder Desc"
                placeholder="Enter Description of your Work Order"
                name="Issue"
                value={Issue}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Phone Number"
                placeholder="Phone Number"
                name="TenantPhone"
                value={TenantPhone}
                onChange={this.handleChange}
              />
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Icon name="file image outline" size="massive" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Form>
            <Form.Checkbox label="Permission to Enter?" />
            <Button type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        </Grid.Row>
      </Grid>
    );
  }
}

export default WorkOrders;
