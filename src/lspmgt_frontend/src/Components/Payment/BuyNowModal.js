import React, { Component } from 'react';
import { Button, Header, Modal, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

class BuyNowModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Email: '',
      Phone: '',
      stripeToken: '',
      CardNumber: '',
      CardExpiration: '',
      CardCVC: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/billing/new_admin', this.state)
      .then((res) => {
        console.log(`Added ${this.state} to server`, res);
      })
      .catch((err) => {
        console(err);
      });
    this.setState({
      Name: '',
      Email: '',
      Phone: '',
    });
    // axios
    //   .post('http://localhost:5000/billing/admin_billing', this.state)
    //   .then((res) => {
    //     console.log(`Added ${this.state} to server`, res);
    //   })
    //   .catch((err) => {
    //     console(err);
    //   });
    // this.setState({
    //   AdminName: '',
    //   AdminEmail: '',
    //   AdminPW: '',
    // });
  };

  render() {
    return (
      <Modal trigger={<Button primary>Buy Now!</Button>}>
        <Modal.Header>Enter New Account Info</Modal.Header>
        <Modal.Content>
          <Checkout />
        </Modal.Content>
        <Link to="/payment">
          <Button secondary>payments</Button>
        </Link>
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
