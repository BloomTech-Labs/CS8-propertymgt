import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Icon } from "semantic-ui-react";
import Properties_Edit from "./Properties_Edit";

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      list_of_properties: [
        {
          description: this.desc(),
        },
        {
          description: this.desc(),
        },
        {
          description: this.desc(),
        },
        {
          description: this.desc(),
        },
      ],
      propertyAddr: "my address",
      tenant: [
        {
          nameT: "tenant1",
        },
        {
          nameT: "tenant2",
        },
      ],
      startEndDateT: "01/01/1000-06/01/1001",
      contract: false,
    };
    this.desc = this.desc.bind(this);
  }

  desc = () => {
    return (
      <div>
        <a>
          <Icon name="pencil" />
        </a>
        <a>
          <Icon name="trash alternate outline" />
        </a>
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

  render() {
    return (
      <div>
        <Card.Group items={this.state.list_of_properties} itemsPerRow="3" />
      </div>
    );
  }
}

export default Properties;

Properties.propTypes = {};

// Get array of properties and set to state then display properties as cards

// Use proptypes

// use redux
