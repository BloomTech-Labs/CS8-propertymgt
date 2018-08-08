import React, { Component } from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react';

const FooterAdmin = () => {
  return (
    <Segment fluid inverted vertical style={styles.footer}>
      {/* <Container fluid inverted textAlign="center" style={styles.footer}> */}
      <Grid textAlign="center">
        <Grid.Row>Property Maxx</Grid.Row>
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
    backgroundColor: '#093F6B',
    margin: '10em 0em 0em',
    // padding: '2em 0em',
  },
};
