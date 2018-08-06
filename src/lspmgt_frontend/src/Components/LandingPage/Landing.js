import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LandingCarousel from './LandingCarousel';
// import BuyNowModal from '../Payment/BuyNowModal';
import BuyNowModal from '../UserAuth/Payment/BuyNowModal';

import './Landing.css';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isOpen: true,
    };
  }

  // toggleModal = () => {
  //   const { isOpen } = this.state;
  //   this.setState({
  //     isOpen: !isOpen,
  //   });
  // };

  render() {
    return (
      <div>
        <LandingCarousel />
        <div className="ui center aligned middle aligned grid">
          {/* <Button onClick={this.toggleModal} primary>Buy Now</Button> */}
          <BuyNowModal />
          {/* Link "Log In" button to login page */}
          <Link to="/login">
            <Button secondary>Log In</Button>
          </Link>
        </div>
        <div className="ui center aligned middle aligned grid">
          <p className="desc--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Testing semantic ui
          </p>
        </div>
      </div>
    );
  }
}

// export default Landing
