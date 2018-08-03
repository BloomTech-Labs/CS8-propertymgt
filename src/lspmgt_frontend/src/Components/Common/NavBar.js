import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';

import { connect } from 'react-redux';
import { signOUtUser } from '../Redux/Actions';

Amplify.configure(AmplifyConfig);

class NavBar extends Component {
  render() {
    return (
      <Menu stackable fluid inverted>
        <Menu.Item>LS PROPERTY MANAGEMENT</Menu.Item>

        <Menu.Menu position="right">
          <Link to="/signup">
            <Menu.Item>Signup</Menu.Item>
          </Link>

          <Link to="/login">
            <Menu.Item>Signin</Menu.Item>
          </Link>

          <Link to="/">
            <Menu.Item
              onClick={() => {
                Auth.signOut();
                this.props.signOUtUser();
              }}
            >
              Sign out
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
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
  )(NavBar)
);
