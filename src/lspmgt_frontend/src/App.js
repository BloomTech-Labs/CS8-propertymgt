import React, { Component } from 'react';
import './semantic/dist/semantic.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LoginForm from './Components/UserAuth/LoginForm';
import Landing from './Components/LandingPage/Landing';
import AdminNavigation from './Components/Admin/AdminNavigation';
import SignUpForm from './Components/UserAuth/SignUpForm';

// this is a test for aws cognito auth.
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from './Config/Auth';

Amplify.configure(AmplifyConfig);
const LandingPage = () => {
  return (
    <Container>
      <Landing />
      {/* <LoginForm /> */}
    </Container>
  );
};
// sample sign up flow for cognito using amplify library.
const LoginTest = () => {
  Auth.signUp({
    username: 'lambdapropertymgt@gmail.com',
    password: '*.abcABC12345',
  })
    .then((data) => {
      console.log('success, --> ', data);
    })
    .catch((err) => {
      console.log('there was an error -> ', err);
    });
};

class App extends Component {
  render() {
    // If you want to see it working, uncomment the line 42...
    //  below and replace the email above on line 26 on username field.
    // Bring up console on your browser and then save this file...
    //  Upon auto reload you should see your information on the browser console.

    LoginTest();
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/admin/(.+)" component={AdminNavigation} />
        {/* <Route path="/payment" component={Payment} /> */}
      </div>
    );
  }
}

export default App;
