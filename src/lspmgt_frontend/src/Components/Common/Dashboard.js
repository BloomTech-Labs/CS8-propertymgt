import React, { Component } from 'react';
import { Container, Grid, Menu } from 'semantic-ui-react';
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
      <Container fluid>
        {display ? (
          <SideBarAdmin handleItemClick={this.handleItemClick} activeItem={activeItem} />
        ) : (
          <SideBarTenant handleItemClick={this.handleItemClick} activeItem={activeItem} />
        )}
      </Container>
    );
  }
}

const SideBarAdmin = (props) => {
  return (
    <Grid columns={2} relaxed>
      <Grid.Column mobile={16} computer={4} tablet={4}>
        <Menu pointing fluid vertical inverted>
          <Link to="/properties">
            <Menu.Item
              name="Properties"
              active={props.activeItem === 'Properties'}
              onClick={props.handleItemClick}
            >
              Properties
            </Menu.Item>
          </Link>

          <Link to="/workorders">
            <Menu.Item
              name="friends"
              active={props.activeItem === 'Word Orders'}
              onClick={props.handleItemClick}
            >
              Work Orders
            </Menu.Item>
          </Link>

          <Link to="/addtenant">
            <Menu.Item
              name="friends"
              active={props.activeItem === 'Add Tenant'}
              onClick={props.handleItemClick}
            >
              Add Tenant
            </Menu.Item>
          </Link>

          <Link to="/billing">
            <Menu.Item
              name="friends"
              active={props.activeItem === 'Billing'}
              onClick={props.handleItemClick}
            >
              Billing
            </Menu.Item>
          </Link>

          <Link to="/settings">
            <Menu.Item
              name="friends"
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
            <Route path="/addproperty" component={AdminAddProperty} />
            <Route path="/workorders" component={AdminWorkOrders} />
            <Route path="/addtenant" component={AdminAddTenant} />
            <Route path="/billing" component={AdminBilling} />
            <Route path="/settings" component={AdminSettings} />
            <Route component={AdminProperties} />
          </Switch>
        </Container>
      </Grid.Column>
    </Grid>
  );
};

const SideBarTenant = (props) => {
  return (
    <Grid columns={2} relaxed>
      <Grid.Column mobile={16} computer={4} tablet={4}>
        <Menu pointing fluid vertical inverted>
          <Link to="/dashboard">
            <Menu.Item
              name="Dashboard"
              active={props.activeItem === 'Dashboard'}
              onClick={props.handleItemClick}
              // style={textStyles}
            >
              Dashboard
            </Menu.Item>
          </Link>

          <Link to="/payments">
            <Menu.Item
              name="Billing"
              active={props.activeItem === 'Billing'}
              onClick={props.handleItemClick}
              // style={textStyles}
            >
              Billing
            </Menu.Item>
          </Link>

          <Link to="/workorders">
            <Menu.Item
              name="WorkOrder"
              active={props.activeItem === 'WorkOrder'}
              onClick={props.handleItemClick}
              // style={textStyles}
            >
              Work Orders
            </Menu.Item>
          </Link>

          <Link to="/settings">
            <Menu.Item
              name="Settings"
              active={props.activeItem === 'Settings'}
              onClick={props.handleItemClick}
              // style={textStyles}
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

// const textStyles = {
//   color: 'whitesmoke',
// };

Dashboard.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};
