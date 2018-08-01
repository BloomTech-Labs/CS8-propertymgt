import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';

ReactDOM.render(
  <Router>
    <StripeProvider apiKey="pk_test_zouhM74e22FwAz2fdQpwdqfu">
      <App />
    </StripeProvider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
