import React, { Component } from 'react';
import './App.css';
import { NavBar, Home, Footer } from './Components/Common/Components';
import { Container } from 'semantic-ui-react';
import { Route, withRouter } from 'react-router-dom';
import { IntroText } from './Components/Common/Components';

class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <NavBar />
          <br />
          <Home />
          <Route exact path="/about" />
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
