import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import axios from "axios";

class WorkOrderA extends Component {
  constructor() {
    super();
    this.state = {
      list: [1, 2, 3, 4]
    };
    this.desc = this.desc.bind(this);
  }

  render() {
    return (
      <Card.Group className="page" itemsPerRow="3">
        {this.state.list.map((workorder, index) => {
          // hard data for testing
          workorder = {
            PropertyAddr: "123 fake str",
            Issue: "Mice neighbors",
            Permission: true,
            TenantPhone: "123 - 123 - 1234"
          };

          return this.desc(workorder, index);
        })}
      </Card.Group>
    );
  }

  desc = (workorder, x) => {
    return (
      <Card>
        <Card.Content extra>
          <div>
            <h4>Work Order #{x}</h4>
            {workorder.PhotoIssue}
          </div>
          <h4>
            <Icon name="home"> {workorder.PropertyAddr} </Icon> <br />
            <Icon name="wrench"> {workorder.Issue} </Icon> <br />
            <Icon name="check circle outline">
              <br />
              {workorder.Permission ? "AccessGranded" : "PropertyInaccessible"}
            </Icon>
            <br />
            <Icon name="phone"> {workorder.TentantPhone} </Icon>
          </h4>
        </Card.Content>
      </Card>
    );
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/admin/workorder")
      .then(res => {
        this.setState({
          list: res.data
        });
      })
      .catch(err => {
        console.log("Error displaying workorders: ", err);
      });
  }
}

export default WorkOrderA;
