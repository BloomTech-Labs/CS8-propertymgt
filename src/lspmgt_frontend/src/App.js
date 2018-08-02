import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Login from './Components/UserAuth/Login';
import LandingProto from './Components/LandingPage/LandingPrototype';
import AdminNavigation from './Components/Admin/Navigation/AdminNavigation';
import TenantNavigation from './Components/Tenant/Navigation/TenantNavigation';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from './Config/Auth';

Amplify.configure(AmplifyConfig);

const LandingPage = () => {
  return (
    <Container>
      <LandingProto />
    </Container>
  );
};

class App extends Component {
  componentDidMount() {
    console.log('App did mount');
    Auth.currentSession()
      .then((data) => {
        console.log('this is current session ', data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/admin/(.+)" component={AdminNavigation} />
        <Route path="/tenant/(.+)" component={TenantNavigation} />
      </div>
    );
  }
}

export default App;
