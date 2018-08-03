import React, { Component } from 'react';
import { Container, Grid, Menu } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';
import {
  AdminProperties,
  AdminWorkOrders,
  AdminAddTenant,
  AdminBilling,
  AdminSettings,
  TenantDashboard,
  TenantBilling,
  TenantWorkOrders,
  TenantSettings,
} from './Components';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';

Amplify.configure(AmplifyConfig);

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    let display = !this.props.isAdmin;
    return (
      <Container fluid>
        {display ? (
          <SideBarAdmin handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} />
        ) : (
          <SideBarTenant
            handleItemClick={this.handleItemClick}
            activeItem={this.state.activeItem}
          />
        )}
        <Link to="/">
          <Menu.Item
            onClick={() => {
              Auth.signOut();
            }}
          >
            Sign out
          </Menu.Item>
        </Link>
      </Container>
    );
  }
}

const SideBarAdmin = (props) => {
  return (
    <Grid container>
      <Grid.Column>
        <Grid.Column>
          <Menu pointing vertical stackable>
            {/* <Menu.Item name='Home' active={props.activeItem === 'home'} onClick={props.handleItemClick} /> */}

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
        <Grid.Column>
          <Container fluid>
            <Route path="/properties" component={AdminProperties} />
            <Route path="/workorders" component={AdminWorkOrders} />
            <Route path="/addtenant" component={AdminAddTenant} />
            <Route path="/billing" component={AdminBilling} />
            <Route path="/settings" component={AdminSettings} />
          </Container>
        </Grid.Column>
      </Grid.Column>
    </Grid>
  );
};

const SideBarTenant = (props) => {
  return (
    // <Container fluid>
    <Grid columns={2} relaxed>
      {/* <Grid.Row mobile={16} computer={8} columns={2}> */}
      <Grid.Column mobile={16} computer={4} tablet={4}>
        <Menu pointing vertical inverted fluid>
          {/* <Menu.Item name='Home' active={props.activeItem === 'home'} onClick={props.handleItemClick} /> */}

          <Link to="/dashboard">
            <Menu.Item
              name="Dashboard"
              active={props.activeItem === 'Dashboard'}
              onClick={props.handleItemClick}
            >
              Dashboard
            </Menu.Item>
          </Link>

          <Link to="/payments">
            <Menu.Item
              name="Billing"
              active={props.activeItem === 'Billing'}
              onClick={props.handleItemClick}
            >
              Billing
            </Menu.Item>
          </Link>

          <Link to="/workorders">
            <Menu.Item
              name="WorkOrder"
              active={props.activeItem === 'WorkOrder'}
              onClick={props.handleItemClick}
            >
              Work Orders
            </Menu.Item>
          </Link>

          <Link to="/settings">
            <Menu.Item
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
    // </Container>
  );
};
