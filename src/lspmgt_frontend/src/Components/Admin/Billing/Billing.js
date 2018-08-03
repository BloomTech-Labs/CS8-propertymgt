import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import BillingForm from './BillingForm';
import Selector from './PropertySelector';
import axios from 'axios';

class Billing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SelectedProperty: '', // Property Address
      SelectedPropertyId: '', // Property ID
      PropertyList: [],
      // SavedCard: {},
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

  getPropertyId = (address) => {
    const { PropertyList, SelectedProperty } = this.state;
    for (let i = 0; i < PropertyList.length; i++) {
      if (address === PropertyList[i].PropertyAddr) {
        // console.log(PropertyList[i].propertyId);
        return PropertyList[i].propertyId;
      }
    }
  };

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
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
      SelectedPropertyId: this.getPropertyId(value),
    });
    // this.getPropertyId();
    console.log(this.getPropertyId());

    axios.get(`http://localhost:5000/api/`);
  };

  render() {
    console.log(this.state);

    // const x = this.getPropertyId();
    // console.log(x);

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
