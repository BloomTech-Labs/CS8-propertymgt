import React, { Component } from 'react';
import { Grid, Form, Header, Message, Icon, Button } from 'semantic-ui-react';
import axios from 'axios';

class WorkOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Address: '',
      WODesc: '',
      PhotoIssue: '',
      Permission: true,
      Phone: '',
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
    console.log(this.state);

    axios
      .post('/api/tenant/workorder', this.state)
      .then((res) => {
        console.log('Post under tenants workorder successfull', res);
      })
      .catch((err) => {
        console.log('Error under tenants workorder', err);
      });

    this.setState({
      Address: '',
      WODesc: '',
      Phone: '',
    });
  };

  render() {
    const { Address, WODesc, Phone } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16}>
            <Header as="h1">Submit a Work Order </Header>
            <Message style={styles.maintenanceInfo}>
              <Icon name="phone" />
              <p>24/7 Maintenance</p>
              <p>1-800-123-9876</p>
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} computer={8} tablet={8}>
            <Form>
              <Form.Input
                icon="home"
                iconPosition="left"
                label="Address"
                placeholder="1234 Cherry St"
                name="Address"
                value={Address}
                onChange={this.handleChange}
              />
              <Form.TextArea
                label="Work Order Description"
                name="WODesc"
                value={WODesc}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="phone"
                iconPosition="left"
                label="Phone Number"
                name="Phone"
                value={Phone}
                onChange={this.handleChange}
              />
            </Form>
          </Grid.Column>
          <Grid.Column mobile={16} computer={8} tablet={8} style={styles.imageColumn}>
            <Icon name="file image outline" size="massive" style={styles.imageIcon} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Form.Checkbox label="Permission to enter residence without tenant present" />
              <Button style={styles.button} type="submit" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#093F6B',
    color: '#F2F2F0',
    width: '120px',
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: '2rem',
  },
  imageIcon: {
    color: '#093F6B',
    // color: '#F2F2F0',
    // width: '120px',
  },
  maintenanceInfo: {
    maxWidth: '270px',
    marginTop: '1.59rem',
  },
};

export default WorkOrders;
