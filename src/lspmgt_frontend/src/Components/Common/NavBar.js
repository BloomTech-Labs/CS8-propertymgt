import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';
import { Loader } from '../Common/Components';
import { connect } from 'react-redux';
import { signOUtUser } from '../Redux/Actions';

Amplify.configure(AmplifyConfig);

class NavBar extends Component {
  state = {
    loader: false,
  };

  handleSignout = () => {
    this.setState({ loader: !this.state.loader });
  };

  render() {
    let notLogged = (
      <Menu.Menu position="right">
        <Link to="/signup">
          <Menu.Item>Sign Up</Menu.Item>
        </Link>

        <Link to="/login">
          <Menu.Item style={textStyles}>Sign In</Menu.Item>
        </Link>
      </Menu.Menu>
    );

    let logged = (
      <Menu.Menu position="right">
        <Link to="/">
          <Menu.Item
            onClick={() => {
              this.handleSignout();
              Auth.signOut().then(() => {
                setTimeout(() => {
                  this.handleSignout();
                  this.props.signOUtUser();
                }, 2000);
              });
            }}
          >
            Sign Out
          </Menu.Item>
        </Link>
      </Menu.Menu>
    );
    console.log('state of the props isadmin -> ', this.props);
    return (
      <Container>
        <Loader stat={this.state.loader} />
        <Menu stackable fluid inverted>
          <Menu.Item>LS PROPERTY MANAGEMENT</Menu.Item>

          <Menu.Menu position="right">{this.props.isAdmin ? logged : notLogged}</Menu.Menu>
        </Menu>
      </Container>
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

const textStyles = {
  color: 'whitesmoke',
};
