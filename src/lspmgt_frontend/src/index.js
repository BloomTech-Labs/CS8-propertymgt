import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import './index.css';
import 'react-tippy/dist/tippy.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'; // Route component deleted from here
import { StripeProvider } from 'react-stripe-elements';
// import { Container } from 'semantic-ui-react';

// import { TenantDashboard, Home, Dashboard } from './Components/Common/Components';

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
