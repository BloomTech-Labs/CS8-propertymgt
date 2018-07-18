import React, { Component } from "react";
import Carousel from "nuka-carousel";

export default class LandingCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel>
        <img src={require("./assets/house1.jpeg")} alt="house1" />
        <img src={require("./assets/house2.jpeg")} alt="house2" />
        <img src={require("./assets/house3.jpeg")} alt="house3" />
        <img src={require("./assets/house4.jpeg")} alt="house4" />
        <img src={require("./assets/house5.jpeg")} alt="house5" />
      </Carousel>
    );
  }
}
