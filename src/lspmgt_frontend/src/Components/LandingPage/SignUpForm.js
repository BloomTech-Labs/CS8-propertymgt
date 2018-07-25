// import React from 'react';
// import { Button, Grid, Form, Header, Segment, Message } from 'semantic-ui-react';

// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Name: '',
//       Email: '',
//       Phone: '',
//     };

//     this.handleInput = this.handleInput.bind(this);
//   }

//   // handle user form input
//   handleInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   render() {
//     const { Name, Email, Phone } = this.state;

//     return (
//       // <Form>
//       //   <Form.Field>
//       //     <label id="name">Name</label>
//       //     <input placeholder="Full Name" />
//       //   </Form.Field>
//       //   <Form.Field>
//       //     <label id="name">Email</label>
//       //     <input placeholder="Email" />
//       //   </Form.Field>
//       //   <Form.Field>
//       //     <label id="name">Phone</label>
//       //     <input placeholder="Phone Number" />
//       //   </Form.Field>
//       // </Form>
//       <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
//         <Grid.Column style={{ maxWidth: 450 }}>
//           <Header as="h1" color="blue" textAlign="center">
//             PropertyMaxx
//           </Header>
//           <Form size="large" style={{ maxWidth: '100%' }}>
//             <Segment raised style={{ maxWidth: '100%' }}>
//               <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
//               <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" />
//               <Button color="blue" fluid size="large">
//                 Create Account
//               </Button>
//             </Segment>
//           </Form>
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }

// export default SignUpForm;

import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SignUp extends Component {
  state = {
    Name: '',
    Email: '',
    Phone: '',
  };

  // handle all input field changes
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { Name, Email, Phone } = this.state;

    // eslint suggests destructuring the next line
    if (Name && Email) {
      axios
        // /signup route via userRouter.js
        .post('/user/signup', this.state)
        .then()
        .catch();
    }
  };

  render() {
    return (
      <div className="signup-form">
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.signup-form {
              height: 100%;
            }
          `}
        </style>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              PropertyMaxx
            </Header>
            <Form size="large" style={{ maxWidth: '100%' }}>
              <Segment raised style={{ maxWidth: '100%' }}>
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Name" />
                <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Re-type Password" />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Name" />
                <Button color="blue" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
