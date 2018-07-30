import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Input, Form } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';

class EditProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PropertyAddr: '',
      Contract: false,
      Tenants: [], // take tenants name and start-end date from tenant object
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:5000/api/admin/updateproperty/${this.props.property.propertyId}`,
        this.state
      )
      .then((res) => {
        console.log('Updated property card..', res);
      })
      .catch((error) => {
        console.log('EditProperty error..', error);
      });
  };

  render() {
    return (
      <Modal
        trigger={
          <a>
            <Icon name="pencil" />
          </a>
        }
        basic
        size="small"
      >
        <Header content="Edit Property Card" />
        <Modal.Content>Form goes here to edit card</Modal.Content>
        <Modal.Actions>
          <Button color="blue" inverted onClick={this.handleSubmit}>
            <Icon name="checkmark" />Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditProperty;

EditProperty.propTypes = {
  PropertyAddr: PropTypes.string,
  Tenants: PropTypes.array,
  Contract: PropTypes.bool,
};
