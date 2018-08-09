import React, { Component } from 'react';
import { Segment, Container, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FooterAdmin = () => {
  return (
    <Segment fluid inverted vertical style={styles.footer}>
      {/* <Container fluid inverted textAlign="center" style={styles.footer}> */}
      <Grid textAlign="center">
        <h4>Created By</h4>
        <Grid.Row>
          <Segment size="small">
            Anderson L.
            <a href="https://github.com/codercodingthecode">
              <Icon size="small" name="github" />
            </a>
          </Segment>
          <Segment size="small">
            Bonn W.
            <a href="https://github.com/BonnW">
              <Icon size="small" name="github" />
            </a>
          </Segment>
          <Segment size="small">
            Erik A.
            <a href="https://github.com/erikAlon">
              <Icon size="small" name="github" />
            </a>
          </Segment>
          <Segment size="small">
            Shaun K.
            <a href="https://github.com/RedSkelly">
              <Icon size="small" name="github" />
            </a>
          </Segment>
        </Grid.Row>
      </Grid>
      {/* </Container> */}
    </Segment>
  );
};

export default FooterAdmin;

const styles = {
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    // maxHeight: '20px',
    // height: '40px',
    // marginTop: '20em',
    backgroundColor: '#327E96',
    margin: '10em 0em 0em',
    // padding: '2em 0em',
  },
};
