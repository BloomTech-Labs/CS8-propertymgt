import React, { Component } from 'react';
import './semantic/dist/semantic.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LoginForm from './Components/LandingPage/LoginForm';
import Landing from './Components/LandingPage/Landing';
import Properties from './Components/Admin/Properties';
import AddProperty from './Components/Admin/AddProperty';
import EditProperty from './Components/Admin/EditProperty';

const LandingPage = () => {
  return (
    <Container>
      <Landing />;
      <LoginForm />;
    </Container>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties" component={Properties} />
        <Route path="/addproperty" component={AddProperty} />
        <Route path="/editproperty" component={EditProperty} />
      </div>
    );
  }
}

export default App;
