import React from 'react';
import './TenantNavigation.css';
import { Link, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Dashboard from '../Dashboard';
import Payments from '../Payments/Payments';
import Settings from '../Settings/Settings';
import WorkOrders from '../WorkOrders/WorkOrders';

const TopBar = () => {
  return (
    <div className="topbar">
      <div>
        <Link to="/"> Home </Link>
        <Icon name="triangle right" />
      </div>
      <div>Sign-out</div>
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

export default AdminNavigation;
