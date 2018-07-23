import React, { Component } from "react";
import "./Properties.css";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
    this.desc = this.desc.bind(this);
    this.addr = this.addr.bind(this);
  }

  render() {
    return (
      <Card.Group itemsPerRow="3">
        {this.state.list.map(property => {
          return this.desc(property);
        })}
        {this.addr()}
      </Card.Group>
    );
  }

  // Populates each listOfProperties element with proper data field from database properties list, just refactor hardcoded template with real data
  desc = property => {
    let obj = property;
    const n = obj[Object.keys(obj)[6]];
    return (
      <Card>
        <Card.Content extra>
          <Link to="/admin/editproperty">
            <Icon name="pencil" link />
          </Link>
          <Icon name="trash alternate outline" link />
          <h4>
            <Icon name="home" /> {n}
            <br />
            <Icon name="user" /> (tenant1, tenant2)
            <br />
            <Icon name="calendar alternate" /> (a date range) <br />
            <Icon name="check circle outline" /> (Signed Contract)
          </h4>
        </Card.Content>
      </Card>
    );
  };

  // Directs to AddProperty page
  addr = () => {
    return (
      <div>
        <h4> Add a new Property </h4>
        <Link to="/admin/addproperty">
          <Icon name="plus circle" size="massive" link />{" "}
        </Link>
      </div>
    );
  };

  // Gets data from server and adds it to state
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/admin/properties")
      .then(response => {
        this.setState({
          list: response.data.data.Items
        });
      })
      .catch(error => {
        console.log("In Properties component: ", error);
      });
  }
}

export default Properties;
