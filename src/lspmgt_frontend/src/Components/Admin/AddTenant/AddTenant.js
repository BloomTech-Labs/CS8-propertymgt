import React, { Component } from 'react';
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
} from 'semantic-ui-react';
import axios from 'axios';

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

  // Gets available properties without a contract
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/property/all')
      .then((res) => {
        this.setState({
          LoP: res.data.data.Items,
        });
        console.log(this.state.LoP);
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

  // Sets input from form to state
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Sends data to server
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

    // const { propertyId } = SelectedProperty; // SelectedProperty only has an address in "value"
    console.log('Hi..', LoP);
    console.log('Hello..', SelectedProperty);

    for (let i = 0; i < LoP.length; i++) {
      if (LoP[i].PropertyAddr === SelectedProperty) {
        LoP[i].propertyId = propertyId;
        console.log('list of property id -->', LoP[i].propertyId, 'propertyId -->', propertyId);
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

    // axios
    //   .post('http://localhost:5000/api/property/lsdb', toLSDB)
    //   .then()
    //   .catch((error) => {
    //     console.log('Error in AddTenant POST for LSDB..', error);
    //   });

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
      PropertyAddr: '',
      Contract: false,
    });
  };

  handleCheck = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
    // console.log('after handleClick..', name, value);
  };

  setProperty = (e, { name, value }) => {
    // console.log('setProperty triggered..');
    // console.log('name', name, 'value', value);
    this.setState({
      [name]: value,
    });
  };

  render() {
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
    } = this.state;

    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Message>
              <Message.Header>Tenant #1</Message.Header>
              <Form className="form1">
                <Form.Input
                  name="Name"
                  value={T1Name}
                  onChange={this.handleInput}
                  placeholder="Name"
                />
                <Form.Input
                  name="T1Phone"
                  value={T1Phone}
                  onChange={this.handleInput}
                  placeholder="Phone"
                />
                <Form.Input
                  name="Email"
                  value={T1Email}
                  onChange={this.handleInput}
                  placeholder="Email"
                />
                <Form.Field>
                  <label>
                    Email?
                    <input
                      name="T1NotiE"
                      type="checkbox"
                      checked={T1NotiE}
                      onChange={this.handleCheck}
                    />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Text?
                    <input
                      name="T1NotiP"
                      type="checkbox"
                      checked={T1NotiP}
                      onChange={this.handleCheck}
                    />
                  </label>
                </Form.Field>
              </Form>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message>
              <Message.Header>Tenant #2</Message.Header>
              <Form>
                <Form.Input
                  name="T2Name"
                  value={T2Name}
                  onChange={this.handleInput}
                  placeholder="Name"
                />
                <Form.Input
                  name="T2Phone"
                  value={T2Phone}
                  onChange={this.handleInput}
                  placeholder="Phone"
                />
                <Form.Input
                  name="T2Email"
                  value={T2Email}
                  onChange={this.handleInput}
                  placeholder="Email"
                />
                <Form.Field>
                  <label>
                    Email?
                    <input
                      name="T2NotiE"
                      type="checkbox"
                      checked={T2NotiE}
                      onChange={this.handleCheck}
                    />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Text?
                    <input
                      name="T2NotiP"
                      type="checkbox"
                      checked={T2NotiP}
                      onChange={this.handleCheck}
                    />
                  </label>
                </Form.Field>
              </Form>
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Message>
            <Message.Header>Housing Information</Message.Header>
            <Icon name="calendar alternate outline" />
            <Input
              placeholder="StartDate"
              name="StartD"
              value={StartD}
              onChange={this.handleInput}
            />
            -
            <Input placeholder="EndDate" name="EndD" value={EndD} onChange={this.handleInput} />
            <Dropdown
              placeholder="Select a property"
              selection
              name="SelectedProperty"
              options={this.getLoP}
              onChange={this.setProperty}
            />
            <Button type="submit" onClick={this.sendContract} primary>
              <Icon name="paper plane outline" />Send Contract
            </Button>
          </Message>
        </Grid.Row>
        <Grid.Row>
          <Button type="submit" onClick={this.handleSubmit} primary>
            Save
          </Button>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AddTenant;
