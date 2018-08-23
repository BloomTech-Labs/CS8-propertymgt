import React from 'react';
import { Segment, Container, Icon } from 'semantic-ui-react';
import './IntroText.css';

const IntroText = () => {
  return (
    <Container>
      <Segment className="text" textAlign="center" size="massive" raised>
        <Icon size="big" name="quote left" />
        <i>The new real estate sharing business</i>
        <Icon size="big" name="quote right" />
      </Segment>
    </Container>
  );
};

export default IntroText;
