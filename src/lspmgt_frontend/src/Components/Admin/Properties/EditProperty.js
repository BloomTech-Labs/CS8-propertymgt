import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'; // Input deleted from here
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
    const { propertyId } = this.props;
    axios
      .patch(`/api/admin/updateproperty/${propertyId}`, this.state)
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
            <Icon style={{ color: '#327E96' }} name="pencil" />
          </a>
        }
        basic
        size="small"
      >
        <Header content="Edit Property" />
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
  propertyId: PropTypes.string,
};
