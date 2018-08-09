import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Form, Input, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Document, Page } from 'react-pdf';
import myPdf from './House-Rental-Contract.pdf';
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
      PropertyRent: '',
      Contract: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Updates state
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Sends new property info to db
  handleSubmit = (event) => {
    // event.preventDefault();
    this.setState({ Contract: true });
    axios
      .post('/api/property/add', this.state)
      .then((res) => {
        console.log('Added property..', res);
      })
      .catch((error) => {
        console.log('Error in addproperty..', error);
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
      PropertyRent: '',
      Contract: false,
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
      PropertyRent,
    } = this.state;

    return (
      <div className="add-property">
        <Grid textAlign="center">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Message>
                <Message.Header>Owner Info</Message.Header>
                <Form>
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
                </Form>
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Message>
                <Message.Header>Property Info</Message.Header>
                <Form>
                  <Form.Group grouped>
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
                  <Form.Group grouped>
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
                  <Form.Group grouped>
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
                  <Form.Input
                    name="PropertyRent"
                    value={PropertyRent}
                    onChange={this.handleChange}
                    placeholder="Enter Rent Amount"
                  />
                </Form>
              </Message>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="pdf" textAlign="center">
            Contract is displayed here
            {/* <Document file={myPdf}>
              <Page pageNumber={1} />
            </Document> */}
          </Grid.Row>
          <Button type="submit" onClick={this.handleSubmit} primary>
            Submit
          </Button>
          <Link to="/admin/properties">
            <Button secondary>Back</Button>
          </Link>
        </Grid>
      </div>
    );
  }
}

const styles = {
  buttons: {
    background: '#327E96',
    color: '#327E96',
  },
};

export default AddProperty;
