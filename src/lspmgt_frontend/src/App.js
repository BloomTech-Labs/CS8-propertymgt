import React, { Component } from 'react';
// import './semantic/dist/semantic.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Login from './Components/UserAuth/Login';
// import Landing from './Components/LandingPage/Landing';
import LandingProto from './Components/LandingPage/LandingPrototype';

import AdminNavigation from './Components/Admin/AdminNavigation';
import TenantNavigation from './Components/Tenant/Navigation/TenantNavigation';
// import SignUpForm from './Components/UserAuth/SignUpForm';

// this is a test for aws cognito auth.
// import Amplify, { Auth } from 'aws-amplify';
// import AmplifyConfig from './Config/Auth';

// Amplify.configure(AmplifyConfig);
const LandingPage = () => {
  return (
    <Container>
      <LandingProto />
      {/* <LoginForm /> */}
    </Container>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component={SignUpForm} /> */}
        <Route path="/admin/(.+)" component={AdminNavigation} />
        <Route path="/tenant/(.+)" component={TenantNavigation} />
        {/* <Route path="/payment" component={Payment} /> */}
      </div>
    );
  }
}

export default App;
