import React, { Component } from 'react';
import { Form, Button, Modal, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AdminLogin extends Component {
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
    const { Email, Password } = this.state;
    return Email.length > 0 && Password.length > 0;
  };

  render() {
    return (
      <Modal trigger={<Button primary>Admin Login</Button>}>
        <Modal.Header>Admin Login</Modal.Header>
        <Modal.Content>
          <Form size="large" style={{ maxWidth: '100%' }}>
            <Segment raised style={{ maxWidth: '100%' }}>
              <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
              <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" />
              <Link to="/admin/properties">
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

export default AdminLogin;
