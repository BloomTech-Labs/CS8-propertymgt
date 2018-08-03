import React, { Component } from 'react';
import { Grid, Segment, Header, Button, Message, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const buttonStyles = {
  margin: '1rem 0',
  marginRight: '1rem',
};

const alertStyles = {
  marginTop: '1.3rem',
  marginBottom: '0',
};

const segmentStyles = {
  margin: '0',
};

const alertTitleStyles = {
  paddingBottom: '.8rem',
};

const officeLabelStyles = {
  border: '1px solid black',
  width: '100%'
};
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid columns={2} relaxed >
        <Grid.Column mobile={16} computer={8} >
          <Header as="h1">Outstanding Balance</Header>
          <Message style={alertStyles}>
            <Message.Header style={alertTitleStyles}>Alerts</Message.Header>
            <p>Alert 1</p>
            <p>Alert 2</p>
          </Message>
          <Link to="/tenant/payments">
            <Button style={buttonStyles} secondary fluid>
              Make Payment
            </Button>
          </Link>
          <Link to="/tenant/workorders">
            <Button secondary fluid>Submit Work Order</Button>
          </Link>
        </Grid.Column>
        <Grid.Column mobile={16} computer={8} textAlign='center' >
          <Segment className="address" basic style={segmentStyles}>
            <Icon name="building" size="large" circular inverted />
            <Label basic style={officeLabelStyles} pointing="left">
              1234 PropertyOffice Ln <br /> San Francisco, CA
            </Label>
          </Segment>


          <Segment className="officeNumber" basic style={segmentStyles}>
            <Icon name="phone" size="large" circular inverted />
            <Label basic style={officeLabelStyles} pointing="left">
              Office Number <br /> 1-800-234-5678
            </Label>
          </Segment>

          <Segment className="email" basic style={segmentStyles}>
            <Icon name="envelope" size="large" circular inverted />
            <Label basic style={officeLabelStyles} pointing="left">
              landlords@email.com
            </Label>
          </Segment>
          <Segment className="maintenanceNumber" basic style={segmentStyles}>
            <Icon name="wrench" size="large" circular inverted />
            <Label basic style={officeLabelStyles} pointing="left">
              Contact 24/7 Maintenance <br /> 1-800-123-9876
            </Label>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dashboard;
