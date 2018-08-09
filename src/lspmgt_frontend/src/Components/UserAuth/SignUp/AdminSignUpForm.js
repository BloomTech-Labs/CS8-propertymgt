import React, { Component } from 'react';
import { Form, Input, Button, Container, Grid, Header, Message } from 'semantic-ui-react';
// import axios from 'axios';
import { CardElement, injectStripe } from 'react-stripe-elements';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../../Config/Auth';

Amplify.configure(AmplifyConfig);
class AdminSignUp extends Component {
  state = {
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    RetypePassword: '',
    stripeToken: {},
  };

  // handle all input field changes
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // sends new user information to db
  handleSubmit = (event) => {
    event.preventDefault();

    // const temp = { User: this.state };

    // Creates the token for stripe
    this.props.stripe.createToken().then((token) => {
      this.setState({
        stripeToken: token,
      });

      Auth.signUp({
        username: this.state.Email,
        password: this.state.Password,
        attributes: {
          'custom:access_level': 'admin',
        },
      }).then((data) => {
        console.log('user signed up -> ', data);
      });
      // .catch((err) => console.log('there was an error -> '), err);

      // axios
      //   .post('http://localhost:5000/users/admin/signup', temp)
      //   .then((res) => {
      //     console.log('Posted user..', res);
      //   })
      //   .catch((err) => {
      //     console.log('Error in SignUpForm', err);
      //   });
    });
  };

  // determines if submit button displays using boolean
  canBeDisplayed = () => {
    const { Name, Email, Phone } = this.state;
    return Name.length > 0 && Email.length > 0 && Phone.length > 0;
  };

  render() {
    const { Name, Email, Phone, Password, RetypePassword } = this.state;

    return (
      <Container style={{ marginTop: '7rem' }}>
        <Grid textAlign="center">
          <Grid.Column style={{ maxWidth: '550px' }}>
            <Header style={styles.title}>PropertyMaxx</Header>
            <Form size="large" style={{ maxWidth: '100%' }} onSubmit={this.handleSubmit}>
              <Form.Input
                // label="Name"
                icon="user"
                iconPosition="left"
                placeholder="Name"
                control={Input}
                type="email"
                name="Name"
                value={Name}
                onChange={this.handleInput}
              />
              <Form.Input
                // label="Email"
                icon="at"
                iconPosition="left"
                placeholder="Email"
                control={Input}
                type="text"
                name="Email"
                value={Email}
                onChange={this.handleInput}
              />
              <Form.Input
                // label="Phone"
                icon="phone"
                iconPosition="left"
                placeholder="Phone"
                control={Input}
                type="text"
                name="Phone"
                value={Phone}
                onChange={this.handleInput}
              />
              <Form.Input
                // label="Password"
                icon="lock"
                iconPosition="left"
                placeholder="Enter Password"
                control={Input}
                type="text"
                name="Password"
                value={Password}
                onChange={this.handleInput}
              />
              <Form.Input
                // label="RetypePassword"
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                control={Input}
                type="text"
                name="RetypePassword"
                value={RetypePassword}
                onChange={this.handleInput}
              />
              <Message>
                <CardElement />
              </Message>
              <Button
                fluid
                size="large"
                // disabled={!this.canBeDisplayed()}
                type="Submit"
                onClick={this.handleSubmit}
                style={styles.button}
              >
                Sign Up
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#093F6B',
    color: '#F2F2F0',
    margin: '1rem 0',
  },
  title: {
    color: '#093F6B',
    textAlign: 'center',
    fontSize: '3rem',
  },
};

export default injectStripe(AdminSignUp);
