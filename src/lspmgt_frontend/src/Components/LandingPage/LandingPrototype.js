// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Link, Redirect, withRouter, Switch, Route } from 'react-router-dom';
import {
  // Button,
  // Container,
  // Divider,
  // Grid,
  // Header,
  // Icon,
  // Image,
  // List,
  // Menu,
  Responsive,
  // Segment,
  // Sidebar,
  Visibility,
} from 'semantic-ui-react';

// import Landing from './Landing';
import './LandingPrototype.css';
import video from './Nueva-york.mp4';
// import { LoginForm } from '../Common/Components';
// import BuyNowModal from '../../Payment/BuyNowModal';
// import BuyNowModal from '../UserAuth/Payment'
export default class LandingProto extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    // const { fixed } = this.state;

    return (
      <Responsive>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div className="video-container fuild">
            <video autoPlay="true" loop="true">
              <source src={video} type="video/mp4" /> Your browser does not support the video.
            </video>
          </div>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

// LandingProto.propTypes = {
//   children: PropTypes.node.isRequired,
// };
