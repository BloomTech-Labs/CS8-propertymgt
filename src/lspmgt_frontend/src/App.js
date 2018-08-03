import React, { Component } from 'react';
import './App.css';
import { NavBar, Home } from './Components/Common/Components';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';

class App extends Component {
  render() {
    return (

          <Container>
            <NavBar />
            <Home />
           
             <Route exact path='/'/>

                
          </Container>

    );
  }
}

export default withRouter(App);
