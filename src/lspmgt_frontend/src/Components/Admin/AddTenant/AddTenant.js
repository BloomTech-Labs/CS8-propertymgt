import React, { Component } from 'react';
import { Grid, Message, Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';

class AddTenant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // T represents Tenant
      T1Name: '',
      T1Phone: '',
      T1Email: '',
      T2Name: '',
      T2Phone: '',
      T2Email: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/admin/addproperty', this.state)
      .then((res) => {
        console.log(`Added ${this.state} to server`, res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      T1Name: '',
      T1Phone: '',
      T1Email: '',
      T2Name: '',
      T2Phone: '',
      T2Email: '',
    });
  };

  render() {
    const { T1Name, T1Phone, T1Email, T2Name, T2Phone, T2Email } = this.state;

    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Message>
              <Message.Header>Tenant #1</Message.Header>
              <Form>
                <Form.Input
                  name="T1Name"
                  value={T1Name}
                  onChange={this.handleInput}
                  placeholder="Name"
                />
                <Form.Input
                  name="T1Phone"
                  value={T1Phone}
                  onChange={this.handleInput}
                  placeholder="Phone"
                />
                <Form.Input
                  name="T1Email"
                  value={T1Email}
                  onChange={this.handleInput}
                  placeholder="Email"
                />
                <Button type="submit" onClick={this.hS} primary>
                  Submit
                </Button>
              </Form>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message>
              <Message.Header>Tenant #2</Message.Header>
              <Form>
                <Form.Input
                  name="T1Name"
                  value={T2Name}
                  onChange={this.handleInput}
                  placeholder="Name"
                />
                <Form.Input
                  name="T1Phone"
                  value={T2Phone}
                  onChange={this.handleInput}
                  placeholder="Phone"
                />
                <Form.Input
                  name="T1Email"
                  value={T2Email}
                  onChange={this.handleInput}
                  placeholder="Email"
                />
                <Button type="submit" onClick={this.hS} primary>
                  Submit
                </Button>
              </Form>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AddTenant;
