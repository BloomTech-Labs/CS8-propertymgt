import React, { Component } from 'react';
import { Grid, Message, Form, Input, Checkbox, Button, Container } from 'semantic-ui-react';
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
      SelectedProperty: '', // selected property from dropdown menu
      LoP: [], // list of properties
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Gets available properties without a contract
  componentDidMount() {
    axios
      .get('api/property/properties')
      .then((res) => {
        this.setState({
          LoP: res.data.data.Items,
        });
      })
      .catch((error) => {
        console.log('Error in AddTenant GET..', error);
      });
  }

  // Sets input from form to state
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Sends state to backend using express
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
    } = this.state;

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
    };

    axios
      .post('api/property/addtenant', toTenants)
      .then()
      .catch((error) => {
        console.log('Error in AddTenant POST..', error);
      });

    const toLSDB = {
      propertyId: SelectedProperty.propertyId,
    };

    axios
      .post('api/property/lsdb', toLSDB)
      .then()
      .catch((error) => {
        console.log('Error in AddTenant POST for LSDB..', error);
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
      PropertyAddr: '',
      Contract: false,
    });
  };

  handleCheck = (e) => {
    console.log(e.target);

    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    console.log('before handleClick setState..', name, value);
    this.setState({
      [name]: value,
    });
    console.log('after handleClick..', name, value);
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
      PropertyAddr,
      Contract,
    } = this.state;

    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Message>
              <Message.Header>Tenant #1</Message.Header>
              <Form className="form1">
                <Container>
                  <Container>
                    <Form.Input
                      name="T1Name"
                      value={T1Name}
                      onChange={this.handleInput}
                      placeholder="Name"
                    />
                  </Container>
                  <Form.Input
                    name="T1Phone"
                    value={T1Phone}
                    onChange={this.handleInput}
                    placeholder="Phone"
                  />
                  <Form.Input
                    name="T1Email"
                    value={T1Email}
                    onChange={this.handleInput}
                    placeholder="Email"
                  />
                </Container>
                <Container>
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
                </Container>
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
                <Container>
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
                </Container>
              </Form>
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Button type="submit" onClick={this.handleSubmit} primary>
          Save
        </Button>
      </Grid>
    );
  }
}

export default AddTenant;
