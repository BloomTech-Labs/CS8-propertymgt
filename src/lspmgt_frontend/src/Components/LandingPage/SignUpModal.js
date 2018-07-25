import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';

class SignUpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal trigger={<Button secondary>Sign Up</Button>}>
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

export default SignUpModal;
