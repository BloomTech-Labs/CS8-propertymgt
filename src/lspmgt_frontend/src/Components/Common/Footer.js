import React, { Component } from 'react';
import { Segment, Container, Grid, Icon, List, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FooterAdmin = () => {
  return (
    <Segment fluid inverted vertical style={styles.footer}>
      {/* <Container fluid inverted textAlign="center" style={styles.footer}> */}
      <Grid textAlign="center">
        {/* <Grid.Row style={styles.footerHeader}>Created By</Grid.Row> */}
        <Grid.Row style={styles.githubRow}>
          <List divided horizontal>
            {/* <List.Item>
              <List.Content style={styles.githubColor}>Created By</List.Content>
            </List.Item> */}
            <List.Item href="https://github.com/codercodingthecode">
              <List.Icon name="github" size="large" style={styles.githubColor} />
              <List.Content style={styles.githubColor}>Andy L.</List.Content>
            </List.Item>
            <List.Item href="https://github.com/BonnW">
              <List.Icon name="github" size="large" style={styles.githubColor} />
              <List.Content style={styles.githubColor}>Bonn W.</List.Content>
            </List.Item>
            <List.Item href="https://github.com/erikAlon">
              <List.Icon name="github" size="large" style={styles.githubColor} />
              <List.Content style={styles.githubColor}>Erik A.</List.Content>
            </List.Item>
            <List.Item href="https://github.com/RedSkelly">
              <List.Icon name="github" size="large" style={styles.githubColor} />
              <List.Content style={styles.githubColor}>Shaun K.</List.Content>
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
    color: '#F2F2F0',
  },
  githubRow: {
    padding: '.5rem 0',
  },
  githubColor: {
    color: '#F2F2F0',
  },
};
