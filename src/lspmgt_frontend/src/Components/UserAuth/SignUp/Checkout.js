import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import { withRouter } from 'react-router-dom';
import { AdminSignupForm } from '../../Common/Components';
class Checkout extends Component {
  render() {
    return (
      <div>
        <Elements>
          <AdminSignupForm />
        </Elements>
      </div>
    );
  }
}

export default withRouter(Checkout);
