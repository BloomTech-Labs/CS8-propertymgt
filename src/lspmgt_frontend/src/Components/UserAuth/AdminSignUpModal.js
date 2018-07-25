import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import AdminSignUpForm from './AdminSignUpForm';

class AdminSignUpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal trigger={<Button secondary>New Admin</Button>}>
        <Modal.Header>Create New User</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Username</Header>
            <AdminSignUpForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AdminSignUpModal;
