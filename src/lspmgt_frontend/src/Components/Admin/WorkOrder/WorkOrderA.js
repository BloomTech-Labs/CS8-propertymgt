/*eslint-disable import/first*/
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';

class WorkOrderA extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.desc = this.desc.bind(this);
    this.returnWO = this.returnWO.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/admin/workorder')
      .then((res) => {
        const allTenants = res.data.data.Items;
        this.setState({
          list: this.returnWO(allTenants),
        });
      })
      .catch((err) => {
        console.log('Error displaying workorders: ', err);
      });
  }

  // Return array of all work orders from array of tenants under the Tenants table in CDM
  returnWO = (allTenants) => {
    const tempArray = allTenants.map((tenant) => {
      return tenant.WOrder;
    });
    console.log('TempArray is..', tempArray);
    return tempArray;
  };

  desc = (workorder, workorderId) => {
    return (
      <Card style={styles.card}>
        <Card.Content extra>
          <Card.Header>Work Order #{workorderId}</Card.Header>
          <Image>{workorder.PhotoIssue}</Image>
          <Card.Description>
            <Icon name="home"> {workorder.PropertyAddr} </Icon> <br />
            <Icon name="wrench"> {workorder.Issue} </Icon> <br />
            <Icon name="check circle outline">
              <br />
              {workorder.Permission ? 'AccessGranted' : 'PropertyInaccessible'}
            </Icon>
            <br />
            <Icon name="phone"> {workorder.TenantPhone} </Icon>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  };

  render() {
    const { list } = this.state;

    return (
      <Card.Group style={styles.cardGroup}>
        {list.map((workorder, index) => {
          if (workorder !== undefined) {
            return this.desc(workorder, index);
          }
        })}
      </Card.Group>
    );
  }
}

const styles = {
  card: {
    maxWidth: '250px',
    margin: '1rem',
  },
  cardGroup: {
    justifyContent: 'center',
  },
};

export default WorkOrderA;
