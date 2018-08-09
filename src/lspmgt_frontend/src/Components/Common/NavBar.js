import React, { Component } from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../Config/Auth';
import { Loader } from './Components';
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
          <Menu.Item style={styles.text}>
            <Icon name="add user" />
            Sign Up
          </Menu.Item>
        </Link>

        <Link to="/login">
          <Menu.Item style={styles.text}>
            <Icon name="sign out" />
            Sign In
          </Menu.Item>
        </Link>
      </Menu.Menu>
    );

    let logged = (
      <Menu.Menu position="right">
        <Link to="/">
          <Menu.Item
            style={styles.text}
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
            <Icon name="sign out" />
            Sign Out
          </Menu.Item>
        </Link>
      </Menu.Menu>
    );
    // console.log('state of the props isadmin -> ', this.props);
    return (
      <Container fluid>
        <Loader stat={this.state.loader} />
        <Menu style={styles.topbar} fluid>
          <Menu.Item as="h4" header style={styles.text}>
            PROPERTY MAXX
          </Menu.Item>

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

const styles = {
  text: {
    color: '#F2F2F0',
  },
  topbar: {
    margin: '0 0 1.5rem',
    backgroundColor: '#327E96',
    // backgroundColor: '#093F6B',
    borderRadius: '0',
  },
};
