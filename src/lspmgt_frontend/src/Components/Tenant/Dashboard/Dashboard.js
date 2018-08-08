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
          <Message style={styles.alert}>
            <Message.Header iconPosition="left" style={styles.alertTitle}>
              <Icon name="bell" style={styles.alertIcon} />
              Alerts
            </Message.Header>
            <p>Alert 1</p>
            <p>Alert 2</p>
          </Message>
          <Link to="/tenant/payments">
            <Button style={styles.button} secondary fluid>
              Make Payment
            </Button>
          </Link>
          <Link to="/tenant/workorders">
            <Button style={styles.button} secondary fluid>
              Submit Work Order
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column mobile={16} computer={8} textAlign="center">
          <Segment className="address" basic style={styles.segment}>
            <Icon name="building" size="large" circular style={styles.icon} />
            <Label basic style={styles.label} pointing="left">
              1234 PropertyOffice Ln <br /> San Francisco, CA
            </Label>
          </Segment>

          <Segment className="officeNumber" basic style={styles.segment}>
            <Icon name="phone" size="large" circular style={styles.icon} />
            <Label basic style={styles.label} pointing="left">
              Office Number <br /> 1-800-234-5678
            </Label>
          </Segment>

          <Segment className="email" basic style={styles.segment}>
            <Icon name="envelope" size="large" circular style={styles.icon} />
            <Label basic style={styles.label} pointing="left">
              landlords@email.com
            </Label>
          </Segment>
          <Segment className="maintenanceNumber" basic style={styles.segment}>
            <Icon name="wrench" size="large" circular style={styles.icon} />
            <Label basic style={styles.label} pointing="left">
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
  button: {
    marginTop: '1rem',
    // backgroundColor: 'rgb(0, 94, 155)',
    backgroundColor: '#327E96',
    color: '#F2F2F0',
  },
  alert: {
    marginTop: '1.29rem',
    marginBottom: '0',
  },
  alertIcon: {
    // color: '#327E96',
    paddingRight: '1rem',
  },
  alertTitle: {
    paddingBottom: '.8rem',
  },
  segment: {
    margin: '0',
    paddingRight: '0',
  },
  label: {
    width: '100%',
    backgroundColor: 'rgb(248,248,249)',
  },
  icon: {
    backgroundColor: '#093F6B',
    color: '#F2F2F0',
  },
};
