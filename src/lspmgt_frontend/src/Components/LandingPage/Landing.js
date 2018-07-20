import React, { Component } from 'react';
import LandingCarousel from './LandingCarousel';
import { Button } from 'semantic-ui-react';

import './Landing.css';

/* 
 *  Option B is to add the ability to talk to the server here
 *  and installing the proper depenpendencies so we can create
 *  a new user from the landing page
*/

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };
  }

  render() {
    return (
      <div>
        <LandingCarousel />
        <div className="ui center aligned middle aligned grid">
          <Button primary>Buy Now</Button>
          <Button secondary>Sign in</Button>
        </div>
        <div className="ui center aligned middle aligned grid">
          <p className="desc--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}
