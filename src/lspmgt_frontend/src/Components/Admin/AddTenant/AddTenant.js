import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import Checkout from './Checkout';
import { Elements } from 'react-stripe-elements';
import AddTenantForm from './AddTenantForm';

class AddTenant extends Component {
  render() {
    console.log('Add Tenant Rendered');
    return (
      <div>
        <Elements>
          <AddTenantForm />
        </Elements>
      </div>
    );
  }
}

export default withRouter(AddTenant);
