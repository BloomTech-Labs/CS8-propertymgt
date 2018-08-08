import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
// import axios from 'axios';
import Checkout from './Checkout';
import Amplify, { Auth } from 'aws-amplify';
import AuthSettings from '../../../Config/Auth';
// import { Redirect } from 'react-router-dom';

Amplify.configure(AuthSettings);

class BuyNowModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AdminName: '',
      AdminEmail: '',
      AdminPW: '',
    };
  }

  componentDidMount() {}

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // this.props.stripe.createToken().then(())

    Auth.signUp({
      username: this.state.AdminEmail,
      password: this.state.AdminPW,
      attributes: {
        'custom:access_level': 'admin',
      },
    })
      .then((data) => {
        alert('you have been sign up');
        console.log('user has signed up');
        this.props.history.push('/admin/dashboard');
        // <Redirect to='/'/>
      })
      .catch((err) => {
        alert('There was an error signing up');
        console.log('There was an error signing up ---> ', err);
      });

    // axios
    //   .post('http://localhost:5000/users/admin/signup', this.state)
    //   .then((res) => {
    //     console.log(`Added ${this.state} to server`, res);
    //   })
    //   .catch((err) => {
    //     console(err);
    //   });
    this.setState({
      AdminName: '',
      AdminEmail: '',
      AdminPW: '',
    });
  };

  render() {
    return (
      <Modal trigger={<Button primary>Buy Now!</Button>}>
        <Modal.Header>Enter New Account Info</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                placeholder="Prepare for Trouble"
                name="AdminName"
                onChange={this.handleInput}
              />
              <Form.Input
                fluid
                label="Email"
                placeholder="And Make it Double"
                name="AdminEmail"
                onChange={this.handleInput}
              />
              <Form.Input
                fluid
                label="Password"
                placeholder="Meeeowth Thats Right!"
                type="password"
                name="AdminPW"
                onChange={this.handleInput}
              />
            </Form.Group>
          </Form>
          <Checkout />
          <Button type="submit" onClick={this.handleSubmit} primary>
            Create Account
          </Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default BuyNowModal;

// import React from 'react'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'

// const ModalModalExample = () => (
//   <Modal trigger={<Button primary>Show Modal</Button>}>
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>We've found the following gravatar image associated with your e-mail address.</p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )

// export default ModalModalExample
