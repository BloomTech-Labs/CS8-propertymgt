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
import { signOUtUser, getUserSettings } from '../Redux/Actions';

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

  componentDidMount() {
    Auth.currentSession()
      .then((data) => {
        // const { email } = data.idToken.payload;
        const user = data.idToken.payload['custom:access_level'];

        const sendEvent = {
          user,
          action: 'getusersettings',
          payload: data.idToken.payload,
        };

        this.props.getUserSettings(sendEvent);
      })
      .catch((err) => console.log('there was an error -> ', err));
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { isAdmin } = this.props;
    const { activeItem } = this.state;
    const display = isAdmin === 'admin';
    // console.log('dashboard check -->  ', this.props);
    return (
      <Container>
        {display ? (
          <SideBarAdmin handleItemClick={this.handleItemClick} activeItem={activeItem} />
        ) : (
          <SideBarTenant handleItemClick={this.handleItemClick} activeItem={activeItem} />
        )}
        {/* <FooterAdmin /> */}
      </Container>
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
      <Grid.Column mobile={16} computer={4} tablet={4}>
        <Menu fluid vertical style={styles.sidebar} className="sidebarItems">
          <Link to="/dashboard">
            <Menu.Item
              name="Dashboard"
              active={props.activeItem === 'Dashboard'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Dashboard
            </Menu.Item>
          </Link>

          <Link to="/payments">
            <Menu.Item
              name="Billing"
              active={props.activeItem === 'Billing'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Payments
            </Menu.Item>
          </Link>

          <Link to="/workorders">
            <Menu.Item
              name="WorkOrder"
              active={props.activeItem === 'WorkOrder'}
              onClick={props.handleItemClick}
              style={styles.text}
            >
              Work Orders
            </Menu.Item>
          </Link>

          <Link to="/settings">
            <Menu.Item
              name="Settings"
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

// broken, needs some ❤️
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
    { getUserSettings }
  )(Dashboard)
);

// export default Dashboard;

const styles = {
  // footer: {
  //   backgroundColor: '#093F6B',
  //   position: 'absolute',
  //   bottom: '0',
  //   width: 'auto',
  //   display: 'flex',
  //   alignSelf: 'flex-end',
  //   position: 'fixed',
  //   textAlign: 'center',
  //   fontSize: '1.8em',
  //   minWidth: '100%',
  // },
  sidebar: {
    backgroundColor: '#093F6B',
    // height: '55vh',
  },
  text: {
    color: '#F2F2F0',
    fontSize: '1.2em',
  },
};

// Dashboard.propTypes = {
//   isAdmin: PropTypes.bool.isRequired,
// };
