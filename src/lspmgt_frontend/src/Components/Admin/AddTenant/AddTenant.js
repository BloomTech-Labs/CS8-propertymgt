import React, { Component } from 'react';
import axios from 'axios';
// import Checkout from './Checkout';
import { Elements } from 'react-stripe-elements';
import injectedAddTenantForm from './AddTenantForm';

class AddTenant extends Component {
  render() {
    return (
      <Elements>
        <injectedAddTenantForm />
      </Elements>
    );
  }
}

export default AddTenant;
