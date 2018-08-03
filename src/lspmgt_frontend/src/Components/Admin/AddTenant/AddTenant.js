import React, { Component } from 'react';
import axios from 'axios';
// import Checkout from './Checkout';
import { Elements } from 'react-stripe-elements';
import injectedAddTenantForm from './AddTenantForm';

class AddTenant extends Component {
  render() {
    return (
      <div>
        <Elements>
          <injectedAddTenantForm />
        </Elements>
      </div>
    );
  }
}

export default AddTenant;
