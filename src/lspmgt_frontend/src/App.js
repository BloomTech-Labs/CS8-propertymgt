import React, { Component } from 'react';
import './semantic/dist/semantic.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LoginForm from './Components/LandingPage/LoginForm';
import Landing from './Components/LandingPage/Landing';
import AdminNavigation from './Components/Admin/AdminNavigation';

// this is a test for aws cognito auth.
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from './Config/Auth';
Amplify.configure(AmplifyConfig);

const LandingPage = () => {
  return (
    <Container>
      <Landing />;
      <LoginForm />;
    </Container>
  );
};

const LoginTest = () => {
  Auth.signUp({
    username: 'lambdapropertymgt@gmail.com',
    password: '*.abcABC12345',
  })
    .then(data => {
      console.log('success, --> ', data);
    })
    .catch(err => {
      console.log('there was an error -> ', err);
    });
};

class App extends Component {
  render() {
    console.log('This is amplify config -> ', AmplifyConfig);
    // LoginTest();
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/admin/(.+)" component={AdminNavigation} />
      </div>
    );
  }
}

export default App;
