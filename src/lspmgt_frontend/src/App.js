import React, { Component } from 'react';
import './semantic/dist/semantic.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LoginForm from './Components/LandingPage/LoginForm';
import Landing from './Components/LandingPage/Landing';
import AdminNavigation from './Components/Admin/AdminNavigation';

const LandingPage = () => {
  return (
    <Container>
      <Landing />
      {/* <LoginForm /> */}
    </Container>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/admin/(.+)" component={AdminNavigation} />
      </div>
    );
  }
}

export default App;
