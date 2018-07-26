import React from 'react';
import './AdminNavigation.css';
import { Link, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Properties from './Properties/Properties';
import AddProperty from './AddProperty/AddProperty';
import EditProperty from './EditProperty';
import WorkOrderA from './WorkOrderA';
import AddTenant from './AddTenant/AddTenant';
import Billing from './Billing/Billing';
import SettingsA from './SettingsA';

const TopBar = () => {
  return (
    <div className="topbar">
      <div>
        <Link to="/"> Home </Link>
        <Icon name="triangle right" />
      </div>

      <Link to="/login">Sign-out</Link>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar__row">
      <div className="sidebar">
        <Link to="/admin/properties">Properties</Link>
        <Link to="/admin/workorders">Work Orders</Link>
        <Link to="/admin/addtenant">Add Tenant</Link>
        <Link to="/admin/billing">Billing</Link>
        <Link to="/admin/settings">Settings</Link>
      </div>
      <Route path="/admin/properties" component={Properties} />
      <Route path="/admin/addproperty" component={AddProperty} />
      <Route path="/admin/editproperty" component={EditProperty} />
      <Route path="/admin/workorders" component={WorkOrderA} />
      <Route path="/admin/addtenant" component={AddTenant} />
      <Route path="/admin/billing" component={Billing} />
      <Route path="/admin/settings" component={SettingsA} />
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

// working scale down feature example below
/*
import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <Menu.Item as="a">Home</Menu.Item>
    <Menu.Item as="a">Games</Menu.Item>
    <Menu.Item as="a">Channels</Menu.Item>
  </Sidebar>
);

export default class SidebarExampleTransitions extends Component {
  state = {
    animation: "Scale Down",
    direction: "left",
    visible: false
  };

  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible });

  handleDirectionChange = direction => () =>
    this.setState({ direction, visible: false });

  render() {
    const { animation, direction, visible } = this.state;

    return (
      <div>
        <Button onClick={this.handleAnimationChange("scale down")}>
          Scale Down
        </Button>

        <Sidebar.Pushable as={Segment}>
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
} */
