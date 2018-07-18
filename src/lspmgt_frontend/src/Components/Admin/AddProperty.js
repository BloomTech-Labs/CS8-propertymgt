import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './AddProperty.css';

// Takes Owner and Tenant info while displaying contract
class AddProperty extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <div className="forms">
          <div className="form">
            <Form className="form">
              <Form.Group widths="2">
                <Form.Input fluid placeholder="name" />
                <Form.Input fluid placeholder="Mobile #" />
              </Form.Group>
              <Form.Group widths="2">
                <Form.Input fluid placeholder="Email" />
                <Form.Input fluid placeholder="Home Address" />
              </Form.Group>
            </Form>
          </div>
          <div className="form">
            <Form>
              <Form.Group widths="2">
                <Form.Input fluid placeholder="Address" />
                <Form.Input fluid placeholder="# Bedroom" />
              </Form.Group>
              <Form.Group widths="2">
                <Form.Input fluid placeholder="Max Occupants" />
                <Form.Input fluid placeholder="# Bathrooms" />
              </Form.Group>
              <Form.Group widths="2">
                <Form.Input fluid placeholder="Sqr Footage" />
                <Form.Input fluid placeholder="Year Built" />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div>Contract goes in this bottom div</div>
      </div>
    );
  }
}

export default AddProperty;
