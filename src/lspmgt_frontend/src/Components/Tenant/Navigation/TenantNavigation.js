import React from 'react';
import './TenantNavigation.css';
import { Link, Route, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import Dashboard from '../Dashboard/Dashboard';
import Payments from '../Payments/Payments';
import Settings from '../Settings/Settings';
import WorkOrders from '../WorkOrders/WorkOrders';

import Amplify, { Auth } from 'aws-amplify'
import AmplifyConfig from '../../../Config/Auth';

Amplify.configure(AmplifyConfig);

const TopBar = () => {
  return (
    <div className="topbar">
      <div>
        <Link to="/"> Home </Link>
        <Icon name="triangle right" />
      </div>
      {/* <Link to="/login">Sign-out</Link> */}
      <Button
      content='Sign Out'
      basic
      onClick={
        () => {

          Auth.signOut()
          .then(data => {
            console.log('user signed out', data);
            // this.props.remove('/')
            this.props.history.push('/');
          })
          .catch(err => console.log('could not sign out'))
        }

      }
      />
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar__row">
      <div className="sidebar">
        <Link to="/tenant/dashboard">Dashboard</Link>
        <Link to="/tenant/payments">Payments</Link>
        <Link to="/tenant/workorders">Work Orders</Link>
        <Link to="/tenant/settings">Settings</Link>
      </div>
      <Route path="/tenant/dashboard" component={Dashboard} />
      <Route path="/tenant/payments" component={Payments} />
      <Route path="/tenant/workorders" component={WorkOrders} />
      <Route path="/tenant/settings" component={Settings} />
    </div>
  );
};

const AdminNavigation = () => {
  return (
    <div className="nav">
      <TopBar />
      <SideBar />
    </div>
  );
};

export default withRouter(AdminNavigation);
