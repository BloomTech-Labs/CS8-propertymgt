import React, { Component } from "react";
import "./semantic/dist/semantic.min.css";
import "./App.css";
import Properties from "./components/Admin/Properties";
import { Container } from "semantic-ui-react";
import LoginForm from "./components/LandingPage/LoginForm";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Route exact path="/" component={LoginForm} />
        </Container>
        <Route path="/properties" component={Properties} />
      </div>
    );
  }
}

export default App;
