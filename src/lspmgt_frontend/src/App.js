import React, { Component } from 'react';
import './App.css';
import { NavBar, Home, Footer } from './Components/Common/Components';
import { Container } from 'semantic-ui-react';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <NavBar />
          <br />
          <Home />
          <Route exact path="/" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </Container>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
