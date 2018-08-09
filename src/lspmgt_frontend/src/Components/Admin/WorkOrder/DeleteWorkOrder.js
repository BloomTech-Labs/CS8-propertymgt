import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import axios from 'axios';

class DeleteWorkOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props;
    axios
      .delete(`/api/workorder/delete/${id}`)
      .then((res) => {
        console.log('Deleted property..', res);
        this.setState({});
      })
      .catch((error) => {
        console.log('Error in DeleteProperty..', error);
      });
  };

  render() {
    return (
      <Modal
        trigger={
          <a>
            <Icon style={{ color: '#327E96' }} name="trash alternate outline" />
          </a>
        }
        basic
        size="small"
      >
        <Header content="WorkOrder Complete" />
        <Modal.Content>
          <h4>Confirm Completed WorkOrder</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue" type="submit" inverted onClick={this.handleSubmit}>
            <Icon name="checkmark" />
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteWorkOrder;
