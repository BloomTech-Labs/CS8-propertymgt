import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import { Container } from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';

import { TenantDashboard, Home, Dashboard } from './Components/Common/Components';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import rootReducer from './Components/Redux/Reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <StripeProvider apiKey="pk_test_zouhM74e22FwAz2fdQpwdqfu">
      <Provider store={store}>
        <App />
      </Provider>
    </StripeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
