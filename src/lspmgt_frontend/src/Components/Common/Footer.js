import React, { Component } from 'react';
import { Segment, Container, Grid, Icon, List, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FooterAdmin = () => {
  return (
    <Segment fluid inverted vertical style={styles.footer}>
      {/* <Container fluid inverted textAlign="center" style={styles.footer}> */}
      <Grid textAlign="center">
        <Grid.Row style={styles.footerHeader}>Created By</Grid.Row>
        <Grid.Row style={styles.githubRow}>
          <List divided horizontal>
            <List.Item href="https://github.com/codercodingthecode" style={styles.githubLink}>
              <List.Icon name="github" size="large" style={styles.githubIcon} />
              <List.Content>Andy L.</List.Content>
            </List.Item>
            <List.Item href="https://github.com/BonnW" style={styles.githubLink}>
              <List.Icon name="github" size="large" style={styles.githubIcon} />
              <List.Content>Bonn W.</List.Content>
            </List.Item>
            <List.Item href="https://github.com/erikAlon" style={styles.githubLink}>
              <List.Icon name="github" size="large" style={styles.githubIcon} />
              <List.Content>Erik A.</List.Content>
            </List.Item>
            <List.Item href="https://github.com/RedSkelly" style={styles.githubLink}>
              <List.Icon name="github" size="large" style={styles.githubIcon} />
              <List.Content>Shaun K.</List.Content>
            </List.Item>
          </List>
        </Grid.Row>
      </Grid>
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
  footerHeader: {
    margin: '0',
    padding: '.6rem 0 0',
    color: '#093F6B',
  },
  githubRow: {
    padding: '.5rem 0',
  },
  githubLink: {
    color: '#093F6B',
  },
  githubIcon: {
    color: '#093F6B',
  },
};
