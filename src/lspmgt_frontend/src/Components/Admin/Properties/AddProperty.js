import React, { Component } from 'react';
import { Grid, Form, Input, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddProperty.css';

// Takes Owner and Tenant info while displaying contract
class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      NameOwner: '',
      EmailOwner: '',
      MobileOwner: '',
      HomeOwnerAddr: '',
      PropertyAddr: '',
      MaxOccupants: '',
      SqFootage: '',
      Bedrooms: '',
      Bathrooms: '',
      YearBuilt: '',
      // Contract: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // handles input
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // handles submit
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/admin/addproperty', this.state)
      .then((res) => {
        console.log(`Added ${this.state} to server`, res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      NameOwner: '',
      EmailOwner: '',
      MobileOwner: '',
      HomeOwnerAddr: '',
      PropertyAddr: '',
      MaxOccupants: '',
      SqFootage: '',
      Bedrooms: '',
      Bathrooms: '',
      YearBuilt: '',
      // Contract: '',
    });
  };

  render() {
    const {
      NameOwner,
      MobileOwner,
      EmailOwner,
      HomeOwnerAddr,
      PropertyAddr,
      Bedrooms,
      MaxOccupants,
      Bathrooms,
      SqFootage,
      YearBuilt,
      // Contract,
    } = this.state;

    return (
      <Grid textAlign="center">
        <Grid.Row columns={2} stretched>
          <Grid.Column stretched>
            <Message>
              <Message.Header>Owner Info</Message.Header>
              <Form>
                <Form.Group inline>
                  <Form.Input
                    name="NameOwner"
                    value={NameOwner}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                  />
                  <Form.Input
                    name="MobileOwner"
                    value={MobileOwner}
                    onChange={this.handleChange}
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    name="EmailOwner"
                    value={EmailOwner}
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                  />
                  <Form.Input
                    name="HomeOwnerAddr"
                    value={HomeOwnerAddr}
                    onChange={this.handleChange}
                    placeholder="Enter Owner Address"
                  />
                </Form.Group>
              </Form>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message>
              <Message.Header>Property Info</Message.Header>
              <Form>
                <Form.Group inline>
                  <Form.Input
                    name="PropertyAddr"
                    value={PropertyAddr}
                    onChange={this.handleChange}
                    placeholder="Enter Property Address"
                  />
                  <Form.Input
                    name="Bedrooms"
                    value={Bedrooms}
                    onChange={this.handleChange}
                    placeholder="Enter Number of Bedrooms"
                  />
                </Form.Group>
                <Form.Group inline>
                  <Form.Input
                    name="MaxOccupants"
                    value={MaxOccupants}
                    onChange={this.handleChange}
                    placeholder="Enter Max Occupation number"
                  />
                  <Form.Input
                    name="Bathrooms"
                    value={Bathrooms}
                    onChange={this.handleChange}
                    placeholder="Enter Number of Bathrooms"
                  />
                </Form.Group>
                <Form.Group inline>
                  <Form.Input
                    name="SqFootage"
                    value={SqFootage}
                    onChange={this.handleChange}
                    placeholder="Enter Property Square Footage"
                  />
                  <Form.Input
                    name="YearBuilt"
                    value={YearBuilt}
                    onChange={this.handleChange}
                    placeholder="Enter Year Property was Built"
                  />
                </Form.Group>
              </Form>
            </Message>
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row textAlign="center">
          <Form.Field
            label="Property Contract"
            value={Contract}
            onChange={this.handleChange}
            control="textarea"
            rows="3"
          />
        </Grid.Row> */}
        <Button type="submit" onClick={this.handleSubmit} primary>
          Submit
        </Button>
        <Link to="/admin/properties">
          <Button secondary>Back</Button>
        </Link>
      </Grid>
    );
  }
}

export default AddProperty;
