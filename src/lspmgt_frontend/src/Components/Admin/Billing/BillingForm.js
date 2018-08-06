import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class BillingForm extends React.Component {
  render() {
    const { property } = this.props;

    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <p>Saved Card Info of {property}</p>
        </Grid.Column>
        <Grid.Column width={13}>
          <p>Rent History of {property}</p>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

BillingForm.propTypes = {
  property: PropTypes.string.isRequired,
};

export default BillingForm;
