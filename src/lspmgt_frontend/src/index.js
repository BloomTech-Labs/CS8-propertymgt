import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import { Container } from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';

import { TenantDashboard, Home, Dashboard } from './Components/Common/Components';

ReactDOM.render(
  <Router>
    <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
      <App />
    </StripeProvider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
