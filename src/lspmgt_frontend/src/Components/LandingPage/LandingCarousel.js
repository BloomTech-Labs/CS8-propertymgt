import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

const house1 = require('./assets/house1.jpeg');
const house2 = require('./assets/house2.jpeg');
const house3 = require('./assets/house3.jpeg');
const house4 = require('./assets/house4.jpeg');
const house5 = require('./assets/house5.jpeg');

export default class LandingCarousel extends Component {
  render() {
    return (
      <Carousel>
        <img src={house1} alt="house1" />
        <img src={house2} alt="house2" />
        <img src={house3} alt="house3" />
        <img src={house4} alt="house4" />
        <img src={house5} alt="house5" />
      </Carousel>
    );
  }
}
