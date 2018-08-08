import React, { Component } from 'react';
import { Container, Grid, Menu, Segment } from 'semantic-ui-react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import {
  AdminProperties,
  AdminAddProperty,
  AdminWorkOrders,
  AdminAddTenant,
  AdminBilling,
  AdminSettings,
  TenantDashboard,
  TenantBilling,
  TenantWorkOrders,
  TenantSettings,
} from './Components';
import { connect } from 'react-redux';
import { signOUtUser } from '../Redux/Actions';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';
import PropTypes from 'prop-types';

Amplify.configure(AmplifyConfig);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      isAdmin: false,
    };
  }

  componentDidUpdate() {
    // this.props.getUser();
    console.log('did update in dashboard -> ', this.props);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { isAdmin } = this.props;
    const { activeItem } = this.state;
    const display = isAdmin == 'admin';
    console.log('dashboard check -->  ', this.props);
    return (
      <div>
        <Container fluid>
          {display ? (
            <SideBarAdmin handleItemClick={this.handleItemClick} activeItem={activeItem} />
          ) : (
            <SideBarTenant handleItemClick={this.handleItemClick} activeItem={activeItem} />
          )}
        </Container>
        {/* <FooterAdmin /> */}
      </div>
    );
  }
}

const SideBarAdmin = (props) => {
  return (
    <Grid columns={2} relaxed>
      <Grid.Column mobile={16} computer={4} tablet={4}>
        <Menu style={styles.sidebar} fluid vertical>
          <Link to="/properties">
            <Menu.Item
              header
              name="Properties"
              active={props.activeItem === 'Properties'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Properties
            </Menu.Item>
          </Link>

          <Link to="/workorders">
            <Menu.Item
              header
              name="friends"
              active={props.activeItem === 'Word Orders'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Work Orders
            </Menu.Item>
          </Link>

          <Link to="/addtenant">
            <Menu.Item
              header
              name="friends"
              active={props.activeItem === 'Add Tenant'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Add Tenant
            </Menu.Item>
          </Link>

          <Link to="/billing">
            <Menu.Item
              header
              name="friends"
              active={props.activeItem === 'Billing'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Billing
            </Menu.Item>
          </Link>

          <Link to="/settings">
            <Menu.Item
              header
              name="friends"
              active={props.activeItem === 'Settings'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Settings
            </Menu.Item>
          </Link>
        </Menu>
      </Grid.Column>
      <Grid.Column mobile={16} computer={12} tablet={12}>
        <Container>
          <Switch>
            <Route path="/addproperty" component={AdminAddProperty} />
            <Route path="/workorders" component={AdminWorkOrders} />
            <Route path="/addtenant" component={AdminAddTenant} />
            <Route path="/billing" component={AdminBilling} />
            <Route path="/settings" component={AdminSettings} />
            <Route component={AdminProperties} />
          </Switch>
        </Container>
      </Grid.Column>
      {/* <FooterAdmin style={styles.footer} /> */}
    </Grid>
  );
};

const SideBarTenant = (props) => {
  return (
    <Grid columns={2} relaxed>
      <Grid.Column mobile={16} computer={4} tablet={4} style={styles.fullNav}>
        <Menu pointing fluid vertical>
          <Link to="/dashboard">
            <Menu.Item
              header
              name="Dashboard"
              active={props.activeItem === 'Dashboard'}
              onClick={props.handleItemClick}
            >
              Dashboard
            </Menu.Item>
          </Link>

          <Link to="/payments">
            <Menu.Item
              header
              name="Billing"
              active={props.activeItem === 'Billing'}
              onClick={props.handleItemClick}
            >
              Billing
            </Menu.Item>
          </Link>

          <Link to="/workorders">
            <Menu.Item
              header
              name="WorkOrder"
              active={props.activeItem === 'WorkOrder'}
              onClick={props.handleItemClick}
            >
              Work Orders
            </Menu.Item>
          </Link>

          <Link to="/settings">
            <Menu.Item
              header
              name="Settings"
              active={props.activeItem === 'Settings'}
              onClick={props.handleItemClick}
            >
              Settings
            </Menu.Item>
          </Link>
        </Menu>
      </Grid.Column>
      <Grid.Column mobile={16} computer={12} tablet={12}>
        <Container>
          <Switch>
            <Route path="/payments" component={TenantBilling} />
            <Route path="/workorders" component={TenantWorkOrders} />
            <Route path="/settings" component={TenantSettings} />
            <Route component={TenantDashboard} />
          </Switch>
        </Container>
      </Grid.Column>
    </Grid>
  );
};

const FooterAdmin = () => {
  return (
    <Segment fluid inverted vertical style={styles.footer}>
      <Container textAlign="center">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>PropertyMaxx</Grid.Column>
            <Grid.Column>Created by: Anderson L. - Bonn W. - Erik A. - Shaun K.</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

const mapStateToProps = (state) => {
  return {
    getUser: state,
    isAdmin: state.isAdmin,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { signOUtUser }
  )(Dashboard)
);

// export default Dashboard;

const styles = {
  fullNav: {
    backgroundColor: '#093F6B',
  },
  footer: {
    minHeight: '5%',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    backgroundColor: '#093F6B',
    // margin: '10em 0em 0em',
    // padding: '2em 0em',
  },
  sidebar: {
    backgroundColor: '#093F6B',
    height: '55vh',
  },
  text: {
    color: '#F2F2F0',
    textAlign: 'center',
    fontSize: '1.8em',
  },
};

// Dashboard.propTypes = {
//   isAdmin: PropTypes.bool.isRequired,
// };
