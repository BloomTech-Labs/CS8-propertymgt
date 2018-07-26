import React, { Component } from 'react';
import { Grid, Segment, Header, Button, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid columns={2} relaxed style={{ maxWidth: '100%' }}>
        <Grid.Column>
          <Header as="h1">Outstanding Balance</Header>
          <Link to="/tenant/payments">
            <Button primary>Make Payment</Button>
          </Link>
          <Link to="/tenant/workorders">
            <Button primary>Submit Work Order</Button>
          </Link>
          <Message>
            <Message.Header>Alerts</Message.Header>
            <p>Alert 1</p>
            <p>Alert 2</p>
          </Message>
        </Grid.Column>
        <Grid.Column>
          <Segment basic>
            <Icon name="building" size="big" />
            1234 PropertyOffice Ln <br /> San Francisco, CA
          </Segment>
          <Segment basic>
            <Icon name="phone" size="big" />
            Office Number <br />
            1-800-234-5678
          </Segment>
          <Segment basic>
            <Icon name="envelope" size="big" />
            landlords@email.com
          </Segment>
          <Segment basic>
            <Icon name="phone" size="big" />
            Contact 24/7 Maintenance <br />
            1-800-123-9876
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dashboard;
