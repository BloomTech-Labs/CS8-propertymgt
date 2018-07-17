import React, { Component } from "react";
import "./semantic/dist/semantic.min.css";
import "./App.css";
import { Container } from "semantic-ui-react";
import LoginForm from "./components/LandingPage/LoginForm";

class App extends Component {
  render() {
    return (
      <Container>
        <LoginForm />;
      </Container>
    );
  }
}

export default App;
