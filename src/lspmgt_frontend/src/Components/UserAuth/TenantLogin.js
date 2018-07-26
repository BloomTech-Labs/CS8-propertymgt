import React, { Component } from 'react';
import { Form, Button, Modal, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TenantLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: '',
      Password: '',
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // eslint suggests destructuring the next line
    const { username, password } = this.state;
    if (username && password) {
      axios
        // need /login route via userRouter.js, nonexistent
        .post('/login', this.state)
        .then()
        .catch();
    }
  };

  canBeDisplayed = () => {
    const { Name, Email, Phone } = this.state;
    return Name.length > 0 && Email.length > 0 && Phone.length > 0;
  };

  render() {
    return (
      <Modal trigger={<Button primary>Tenant Login</Button>}>
        <Modal.Header>Tenant Login</Modal.Header>
        <Modal.Content>
          <Form size="large" style={{ maxWidth: '100%' }}>
            <Segment raised style={{ maxWidth: '100%' }}>
              <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
              <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" />
              <Link to="/tenant/dashboard">
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Link>
            </Segment>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default TenantLogin;
