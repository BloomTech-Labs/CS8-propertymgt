import React, { Component } from "react";
import "./semantic/dist/semantic.min.css";
import "./App.css";
import { Container } from "semantic-ui-react";
import LoginForm from "./Components/LandingPage/LoginForm";
import Landing from "./Components/LandingPage/Landing";

class App extends Component {
  render() {
    return (
      <Container>
        <Landing />;
        <LoginForm />;
      </Container>
    );
  }
}

export default App;
