import React from 'react';
import { Grid } from 'semantic-ui-react';

class BillingForm extends React.Component {
  render() {
    const property = this.props.property;

    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <p>Saved Card Info of property {property}</p>
        </Grid.Column>
        <Grid.Column width={13}>
          <p>Rent History of property {property}</p>
        </Grid.Column>
      </Grid.Row>
    )
  }
}


export default BillingForm;