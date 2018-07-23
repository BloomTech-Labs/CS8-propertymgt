import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import './AddProperty.css';
import axios from 'axios';

// Takes Owner and Tenant info while displaying contract
class AddProperty extends Component {
  constructor() {
    super();
    this.state = {};
    this.hS = this.hS.bind(this);
    this.hC = this.hC.bind(this);
  }

  hC = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hS = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/admin/addproperty', this.state)
      .then(res => {
        console.log(`Added ${this.state} to server`, res);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({});
  };

  render() {
    return (
      <Form onSubmit={this.hS}>
        <div className="formbox">
          <div className="owner">
            <h5>Owner Info </h5>
            <Form.Field inline>
              <Input
                placeholder="Name"
                type="text"
                name="NameOwner"
                value={this.state.NameOwner}
                onChange={this.hC}
              />
              <Input
                placeholder="Mobile #"
                type="text"
                name="MobileOwner"
                value={this.state.MobileOwner}
                onChange={this.hC}
              />
            </Form.Field>
            <Form.Field inline>
              <Input
                placeholder="Email"
                type="text"
                name="EmailOwner"
                value={this.state.EmailOwner}
                onChange={this.hC}
              />
              <Input
                placeholder="Home Address"
                type="text"
                name="HomeOwnerAddr"
                value={this.state.HomeOwnerAddr}
                onChange={this.hC}
              />
            </Form.Field>
          </div>
          <div className="Property Info">
            <h5 className="property">Property Info </h5>
            <Form.Field inline>
              <Input
                placeholder="Address"
                type="text"
                name="PropertyAddr"
                value={this.state.PropertyAddr}
                onChange={this.hC}
              />
              <Input
                placeholder="# Bedroom"
                type="text"
                name="Bedrooms"
                value={this.state.Bedrooms}
                onChange={this.hC}
              />
            </Form.Field>
            <Form.Field inline>
              <Input
                placeholder="Max Occupants"
                type="text"
                name="MaxOccupants"
                value={this.state.MaxOccupants}
                onChange={this.hC}
              />
              <Input
                placeholder="# Bathrooms"
                type="text"
                name="Bathrooms"
                value={this.state.Bathrooms}
                onChange={this.hC}
              />
            </Form.Field>
            <Form.Field inline>
              <Input
                placeholder="Sqr Footage"
                type="text"
                name="SqFootage"
                value={this.state.SqFootage}
                onChange={this.hC}
              />
              <Input
                placeholder="Year Built"
                type="text"
                name="YearBuilt"
                value={this.state.YearBuilt}
                onChange={this.hC}
              />
            </Form.Field>
          </div>
        </div>
        <div>Contract goes in this bottom div</div>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default AddProperty;
