import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const LoaderExampleLoader = (props) => (
  // <Segment>
  <Dimmer active={props.stat}>
    <Loader inline="centered" />
  </Dimmer>
  // </Segment>
);

export default LoaderExampleLoader;
