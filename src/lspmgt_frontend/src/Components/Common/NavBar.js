import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <Menu stackable fluid inverted>
        <Menu.Item>LS PROPERTY MANAGEMENT</Menu.Item>

        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item>Signup</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item>Signin</Menu.Item>
          </Link>

<<<<<<< HEAD
          {/* <Menu.Item
=======

                <Menu.Menu position='right'>

                <Link to='/login'>
                <Menu.Item>
                    Signup 
                </Menu.Item>
                </Link>
                <Link to='/login'>
                <Menu.Item>
                    Signin 
                </Menu.Item>
                </Link>
                <Link to='/login'>
                <Menu.Item>
                    Sign out 
                </Menu.Item>
                </Link>
                {/* <Menu.Item
>>>>>>> 9b4b282abcbb330c7411b348fe963a2a82a88075
                    name='sign-in'
                    active={activeItem === 'sign-in'}
                    onClick={this.handleItemClick}
                >
                    Sign-in
                </Menu.Item> */}
        </Menu.Menu>
      </Menu>
    );
  }
}
