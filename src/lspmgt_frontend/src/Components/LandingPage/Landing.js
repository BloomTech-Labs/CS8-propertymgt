import React, { Component } from "react";
import LandingCarousel from "./LandingCarousel";

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
      </div>
    );
  }
}
