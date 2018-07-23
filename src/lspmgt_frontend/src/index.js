import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StripeProvider } from 'react-stripe-elements';


ReactDOM.render(
  <Router>
    <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
      <App />
    </StripeProvider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
