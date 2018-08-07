import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import Checkout from './Checkout';
import { Elements } from 'react-stripe-elements';
import AddTenantForm from './AddTenantForm';

class AddTenant extends Component {
=======
import {
  Dropdown,
  Icon,
  Grid,
  Message,
  Form,
  Input,
  Checkbox,
  Button,
  Container,
  Divider,
  Header,
  Select,
} from 'semantic-ui-react';
import axios from 'axios';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../../Config/Auth';
Amplify.configure(AmplifyConfig);

class AddTenant extends Component {
  constructor() {
    super();

    // T represents Tenant
    this.state = {
      T1Name: '',
      T1Phone: '',
      T1Email: '',
      T1NotiP: false,
      T1NotiE: false,
      T2Name: '',
      T2Phone: '',
      T2Email: '',
      T2NotiP: false,
      T2NotiE: false,
      StartD: '',
      EndD: '',
      SelectedProperty: '', // selected property from dropdown menu **using to get admin and selected property id's
      propertyId: '',
      LoP: [], // list of properties
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendContract = this.sendContract.bind(this);
    this.getLoP = this.getLoP.bind(this);
    this.setProperty = this.setProperty.bind(this);
  }

  // Populates LoP
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/property/all')
      .then((res) => {
        this.setState({
          LoP: res.data.data.Items,
        });
      })
      .catch((error) => {
        console.log('Error in AddTenant GET..', error);
      });
  }

  // Returns usable List of Properties (LoP) list with text key value pair
  getLoP = () => {
    const myArr = this.state.LoP.map((property, index) => {
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

  // TODO: Sends email to tenant with contract attached
  sendContract = () => {
    const { T1Email, T2Email } = this.state;
    console.log('sendContract triggered..');
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Handle final submit
  handleSubmit = (e) => {
    e.preventDefault();

    // Send Tenant object, send PropertyAddr and Contract
    const {
      T1Name,
      T1Phone,
      T1Email,
      T1NotiP,
      T1NotiE,
      T2Name,
      T2Phone,
      T2Email,
      T2NotiP,
      T2NotiE,
      StartD,
      EndD,
      SelectedProperty,
      propertyId,
      LoP,
    } = this.state;

    // Gets property id from property address or selectedproperty
    for (let i = 0; i < LoP.length; i++) {
      if (SelectedProperty === LoP[i].PropertyAddr) {
        this.setState({
          propertyId: LoP[i].propertyId,
        });
        console.log('list of property id -->', LoP[i].propertyId, '\npropertyId -->', propertyId);
      }
    }

    const toTenants = {
      T1Name,
      T1Phone,
      T1Email,
      T1NotiP,
      T1NotiE,
      T2Name,
      T2Phone,
      T2Email,
      T2NotiP,
      T2NotiE,
      StartD,
      EndD,
      propertyId,
    };

    Auth.signUp({
      username: this.state.T1Email,
      password: '!Test123', // temp pwd hard coded, it will need to be replaced by a random hash gen pwd
      attributes: {
        'custom:access_level': 'tenant',
      },
    }).then((data) => {
      console.log('user signed up -> ', data);

      axios
        .post('http://localhost:5000/api/addtenant/add', toTenants)
        .then(
          // axios.get(`http://localhost:5000/api/property/get/${id}`).then((res) => {
          //   console.log(res);
          // })
          console.log('step2')
        )
        .catch((error) => {
          console.log('Error in AddTenant POST..', error);
        });

      // const T = [];
      // T.push('testTId');
      // T.push('testTId');

      // const toLSDB = {
      //   propertyId: 'testId',
      //   tenants: T,
      // };

      // axios
      //   .post('http://localhost:5000/api/property/lsdb', toLSDB)
      //   .then()
      //   .catch((error) => {
      //     console.log('Error in AddTenant POST for LSDB..', error);
      //   });
    });

    this.setState({
      T1Name: '',
      T1Phone: '',
      T1Email: '',
      T1NotiP: false,
      T1NotiE: false,
      T2Name: '',
      T2Phone: '',
      T2Email: '',
      T2NotiP: false,
      T2NotiE: false,
      StartD: '',
      EndD: '',
      SelectedProperty: '',
      propertyId: '',
    });
  };

  // Handles checkboxes
  handleCheck = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
    console.log('after handleClick..', name, value);
  };

  getPropertyId = (address) => {
    const { LoP } = this.state;
    for (let i = 0; i < LoP.length; i++) {
      if (address === LoP[i].PropertyAddr) {
        // console.log(PropertyList[i].propertyId);
        return LoP[i].propertyId;
      }
    }
  };

  setProperty = (e, { name, value }) => {
    console.log('setProperty triggered..');
    console.log('name', name, 'value', value);
    this.setState({
      [name]: value,
      propertyId: this.getPropertyId(value),
    });
  };

>>>>>>> 811799f4be266f65634dda2facabb294c61df808
  render() {
    console.log('Add Tenant Rendered');
    return (
<<<<<<< HEAD
      <div>
        <Elements>
          <AddTenantForm />
        </Elements>
      </div>
=======
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} computer={8}>
            <Form>
              <Header>Tenant #1</Header>
              <Form.Field
                name="T1Name"
                value={T1Name}
                control={Input}
                onChange={this.handleInput}
                placeholder="Name"
              />
              <Form.Field
                name="T1Phone"
                value={T1Phone}
                control={Input}
                onChange={this.handleInput}
                placeholder="Phone"
              />
              <Form.Field
                name="T1Email"
                value={T1Email}
                control={Input}
                onChange={this.handleInput}
                placeholder="Email"
              />
              <Form.Group style={styles.t1checkboxes}>
                <Form.Checkbox
                  label="Receive Emails?"
                  name="T1NotiE"
                  type="checkbox"
                  checked={T1NotiE}
                  onChange={this.handleCheck}
                />
                <Form.Checkbox
                  label="Receive Texts?"
                  name="T1NotiP"
                  type="checkbox"
                  checked={T1NotiP}
                  onChange={this.handleCheck}
                />
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
            <Form>
              <Header>Tenant #2</Header>
              <Form.Field
                name="T2Name"
                value={T2Name}
                control={Input}
                onChange={this.handleInput}
                placeholder="Name"
              />
              <Form.Field
                name="T2Phone"
                value={T2Phone}
                control={Input}
                onChange={this.handleInput}
                placeholder="Phone"
              />
              <Form.Field
                name="T2Email"
                value={T2Email}
                control={Input}
                onChange={this.handleInput}
                placeholder="Email"
              />
              <Form.Group>
                <Form.Checkbox
                  label="Receive Emails?"
                  name="T2NotiE"
                  type="checkbox"
                  checked={T2NotiE}
                  onChange={this.handleCheck}
                />
                <Form.Checkbox
                  label="Receive Texts?"
                  name="T2NotiP"
                  type="checkbox"
                  checked={T2NotiP}
                  onChange={this.handleCheck}
                />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={16} computer={13}>
            <Form widths="equal">
              <Header>Housing Information</Header>
              <Form.Group>
                <Form.Field
                  icon="calendar alternate"
                  iconPosition="left"
                  placeholder="Start Date"
                  control={Input}
                  type="date"
                  name="StartD"
                  value={StartD}
                  onChange={this.handleInput}
                  width={5}
                />

                <Form.Field
                  icon="calendar alternate"
                  iconPosition="left"
                  placeholder="End Date"
                  control={Input}
                  type="date"
                  name="EndD"
                  value={EndD}
                  onChange={this.handleInput}
                  width={5}
                />
                <Form.Field
                  placeholder="Select a property"
                  control={Select}
                  name="Selected Property"
                  options={theLoP}
                  onChange={this.setProperty}
                  width={6}
                />
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={3}>
            <Header as="h3"> Contract </Header>
            <Button fluid type="submit" onClick={this.sendContract} primary>
              <Icon name="paper plane outline" />Send
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={3}>
            <Button fluid type="submit" onClick={this.handleSubmit} primary>
              Save
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
>>>>>>> 811799f4be266f65634dda2facabb294c61df808
    );
  }
}

<<<<<<< HEAD
export default withRouter(AddTenant);
=======
const styles = {
  t1checkboxes: {
    paddingBottom: '1.4rem',
    marginBottom: '0',
  },
};

export default AddTenant;
>>>>>>> 811799f4be266f65634dda2facabb294c61df808
