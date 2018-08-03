import React, { Component } from 'react';
import { Grid, Segment, Header, Button, Message, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid columns={2} relaxed>
        <Grid.Column mobile={16} computer={8}>
          <Header as="h1">Outstanding Balance</Header>
          <Message style={styles.alertStyles}>
            <Message.Header style={styles.alertTitleStyles}>Alerts</Message.Header>
            <p>Alert 1</p>
            <p>Alert 2</p>
          </Message>
          <Link to="/tenant/payments">
            <Button style={styles.buttonStyles} fluid>
              Make Payment
            </Button>
          </Link>
          <Link to="/tenant/workorders">
            <Button style={styles.buttonStyles} fluid>
              Submit Work Order
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column mobile={16} computer={8} textAlign="center">
          <Segment className="address" basic style={styles.segmentStyles}>
            <Icon name="building" size="large" circular style={styles.iconStyles} />
            <Label basic style={styles.labelStyles} pointing="left">
              1234 PropertyOffice Ln <br /> San Francisco, CA
            </Label>
          </Segment>

          <Segment className="officeNumber" basic style={styles.segmentStyles}>
            <Icon name="phone" size="large" circular style={styles.iconStyles} />
            <Label basic style={styles.labelStyles} pointing="left">
              Office Number <br /> 1-800-234-5678
            </Label>
          </Segment>

          <Segment className="email" basic style={styles.segmentStyles}>
            <Icon name="envelope" size="large" circular style={styles.iconStyles} />
            <Label basic style={styles.labelStyles} pointing="left">
              landlords@email.com
            </Label>
          </Segment>
          <Segment className="maintenanceNumber" basic style={styles.segmentStyles}>
            <Icon name="wrench" size="large" circular style={styles.iconStyles} />
            <Label basic style={styles.labelStyles} pointing="left">
              Contact 24/7 Maintenance <br /> 1-800-123-9876
            </Label>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dashboard;

const styles = {
  buttonStyles: {
    marginTop: '1rem',
    backgroundColor: 'rgb(1,113,199)',
    color: 'whitesmoke',
  },
  alertStyles: {
    marginTop: '1.3rem',
    marginBottom: '0',
    // backgroundColor: 'rgb(8, 158, 255)',
  },
  segmentStyles: {
    margin: '0',
  },
  alertTitleStyles: {
    paddingBottom: '.8rem',
  },
  labelStyles: {
    width: '100%',
    backgroundColor: 'rgb(248,248,249)',
    // color: 'rgb(56,56,56)',
  },
  iconStyles: {
    color: 'whitesmoke',
    backgroundColor: 'rgb(0, 94, 155)',
  },
};
