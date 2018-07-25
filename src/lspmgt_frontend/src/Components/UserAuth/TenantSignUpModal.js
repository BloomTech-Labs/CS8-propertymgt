import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import SignUpForm from './TenantSignUpForm';

class TenantSignUpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal trigger={<Button secondary>New Tenant</Button>}>
        <Modal.Header>Create New User</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Username</Header>
            <SignUpForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default TenantSignUpModal;
