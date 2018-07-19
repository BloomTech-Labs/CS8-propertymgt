import React, { Component } from "react";
import LandingCarousel from "./LandingCarousel";
import { Button } from "semantic-ui-react";

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
        <div className="landingButtons">
          <Button primary>Buy Now</Button>
          <Button secondary>Sign in</Button>
        </div>
      </div>
    );
  }
}
