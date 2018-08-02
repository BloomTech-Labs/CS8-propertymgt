import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import BillingForm from './BillingForm';
import Selector from './PropertySelector';
import axios from 'axios';

class Billing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SelectedProperty: '',
      PropertyList: [],
    };

    this.setProperty = this.setProperty.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/property/all')
      .then((res) => {
        this.setState({
          PropertyList: res.data.data.Items,
        });
      })
      .catch((error) => {
        console.log('Error in Billing GET');
      });
  }

  getPropList = () => {
    const myArr = this.state.PropertyList.map((property, index) => {
      const constructingTheObject = {
        key: index,
        value: property.PropertyAddr,
        flag: '',
      };
      const array = Object.keys(property);
      const x = array.indexOf('PropertyAddr');
      const addrToText = property[Object.keys(property)[x]];
      const propertyWithText = Object.assign({ text: addrToText }, constructingTheObject);
      return propertyWithText;
    });
    return myArr;
  };

  setProperty = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { SelectedProperty } = this.state;

    const testArr = this.getPropList();

    return (
      <div>
        <Grid celled>
          <Grid.Row textAlign="left">
            <Dropdown
              placeholder="Select Property"
              selection
              name="SelectedProperty"
              options={testArr}
              onChange={this.setProperty}
            />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <p>Saved Card Info of {SelectedProperty}</p>
            </Grid.Column>
            <Grid.Column width={13}>
              <p>Rent History of {SelectedProperty}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Billing;
