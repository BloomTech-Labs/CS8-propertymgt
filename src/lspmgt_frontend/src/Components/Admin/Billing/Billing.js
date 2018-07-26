import React from 'react';
import { Grid } from 'semantic-ui-react';
import BillingForm from './BillingForm';
import Selector from './PropertySelector';

class Billing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProperty: 1,
    };

    this.changeProperty = this.changeProperty.bind(this);
  }

  changeProperty(newProperty) {
    this.setState({
      currentProperty: newProperty,
    });
  }

  render() {
    const { currentProperty } = this.state;

    return (
      <div>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Selector onChange={this.changeProperty} />
            </Grid.Column>
          </Grid.Row>
          <BillingForm property={currentProperty} />
        </Grid>
      </div>
    );
  }
}
export default Billing;
