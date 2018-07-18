import React, { Component } from 'react';
import './Properties.css';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      listOfProperties: [
        {
          description: this.desc(),
        },
        {
          description: this.addr(),
        },
      ],
    };
    this.desc = this.desc.bind(this);
  }

  render() {
    return (
      <div>
        <Card.Group items={this.state.listOfProperties} itemsPerRow="3" />
      </div>
    );
  }

  // Populates each listOfProperties element with proper data field from database properties list, just refactor hardcoded template with real data
  desc = property => {
    return (
      <div>
        <div>
          <Link to="/editproperty">
            <Icon name="pencil" link />
          </Link>
          <Icon name="trash alternate outline" link />
        </div>
        <h4>
          <Icon name="home" /> 123 fake street <br />
          <Icon name="user" /> tenant1, tenant2
          <br />
          <Icon name="calendar alternate" /> (a date range) <br />
          <Icon name="check circle outline" /> Signed Contract
        </h4>
      </div>
    );
  };

  // Directs to AddProperty page
  addr = () => {
    return (
      <div>
        <h4> Add a new Property </h4>
        <Link to="/addproperty">
          <Icon name="plus circle" size="massive" link />{' '}
        </Link>
      </div>
    );
  };

  // Gets data from server and adds it to state
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/admin/properties')
      .then(function(response) {
        response.data.map(property => {
          let tempArray = this.state.listOfProperties;
          tempArray.unshift(this.desc(property));
          this.setState({
            listOfProperties: tempArray,
          });
        });
      })
      .catch(error => {
        console.log('In Properties component: ', error);
      });
  }
}

export default Properties;

Properties.propTypes = {};

// Get array of properties and set to state then display properties as cards

// axios call to "/api/admin/properties"

// Each property received from the axios.get call should be unshifted to component array to display properly

// Use proptypes

// use redux - no need
