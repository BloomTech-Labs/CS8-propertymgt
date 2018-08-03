import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <Menu stackable fluid style={{ backgroundColor: 'rgb(0, 94, 155)' }}>
        <Menu.Item style={{ color: 'whitesmoke' }}>LS PROPERTY MANAGEMENT</Menu.Item>

        <Menu.Menu position="right">
          <Link to="/signup">
            <Menu.Item style={{ color: 'whitesmoke' }}>Signup</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item style={{ color: 'whitesmoke' }}>Signin</Menu.Item>
          </Link>

          {/* <Menu.Item
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
