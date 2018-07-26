import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import './LandingPrototype.css';
import video from './Nueva-york.mp4';
import BuyNowModal from '../Payment/BuyNowModal';

export default class LandingProto extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment textAlign="center" vertical>
            <Menu fixed={fixed ? 'top' : null} secondary={!fixed} size="large">
              <Container>
                <Header as="h1" color="blue">
                  PropertyMaxx
                </Header>
                <Menu.Item position="right">
                  <Link to="/login">
                    <Button as="a">Log in</Button>
                  </Link>
                  <BuyNowModal as="a" primary={!fixed} style={{ marginLeft: '0.5em' }} />
                </Menu.Item>
              </Container>
            </Menu>
            {/* <Landing /> */}
            {/* <HomepageHeading /> */}
          </Segment>
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

LandingProto.propTypes = {
  children: PropTypes.node.isRequired,
};
