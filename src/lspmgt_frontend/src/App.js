import React, { Component } from 'react';
import './semantic/dist/semantic.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LoginForm from './Components/UserAuth/LoginForm';
import Landing from './Components/LandingPage/Landing';
import AdminNavigation from './Components/Admin/AdminNavigation';
// import SignUpForm from './Components/UserAuth/SignUpForm';

// this is a test for aws cognito auth.
// import Amplify, { Auth } from 'aws-amplify';
// import AmplifyConfig from './Config/Auth';

// Amplify.configure(AmplifyConfig);
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
        {/* <Route path="/signup" component={SignUpForm} /> */}
        <Route path="/admin/(.+)" component={AdminNavigation} />
        {/* <Route path="/payment" component={Payment} /> */}
      </div>
    );
  }
}

export default App;
