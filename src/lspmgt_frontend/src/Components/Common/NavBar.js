import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter, Redirect, Route } from 'react-router-dom';
import { Signout } from './Components';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';

import { connect } from 'react-redux';
import { signOUtUser } from '../Redux/Actions';

Amplify.configure(AmplifyConfig);

class NavBar extends Component {
  // state = {
  //   isLoggedIn: false,
  // }

  // componentDidMount() {

  //     Auth.currentSession()
  //     .then(data => {
  //         console.log('HOME CHECK ------> ', data)
  //         this.setState({isLoggedIn: true})
  //         console.log(data);
  //         this.setState({
  //             isLoggedIn: data.idToken.payload['custom:access_level'] == 'admin' || 'tenant'
  //         })
  //     })
  //     .catch(err => console.log(err))
  // }

  handleSignOut = () => {
    // console.log('sign out ')
  };

  render() {
    // if (!this.state.isLoggedIn) {
    //   return < />
    // }

    return (
      <Menu stackable fluid inverted>
        <Menu.Item>LS PROPERTY MANAGEMENT</Menu.Item>

        <Menu.Menu position="right">
          <Link to="/signup">
            <Menu.Item>Signup</Menu.Item>
          </Link>

          <Link to="/login">
            <Menu.Item style={{ color: 'whitesmoke' }}>Signin</Menu.Item>
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
  console.log('this is maptoprops --> ', state);
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
