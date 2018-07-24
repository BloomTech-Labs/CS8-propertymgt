import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import Checkout from '../Payment/Checkout';

class BuyNowModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal trigger={<Button primary>Buy Now!</Button>}>
        <Modal.Header>Enter Payment Info</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Credit Card</Header>
            <Checkout />
          </Modal.Description>
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
