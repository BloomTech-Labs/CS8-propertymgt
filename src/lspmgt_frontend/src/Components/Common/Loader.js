import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderExampleLoader = (props) => (
  <Dimmer active={props.stat}>
    <Loader inline="centered" />
  </Dimmer>
);

export default LoaderExampleLoader;
