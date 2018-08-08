import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';

class WorkOrderA extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    // this.desc = this.desc.bind(this);
    // this.returnWO = this.returnWO.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/admin/workorder')
      .then((res) => {
        // const allTenants = res.data.data.Items;
        this.setState({
          list: res.data.data.Items,
        });
      })
      .catch((err) => {
        console.log('Error displaying workorders: ', err);
      });
  }

  // Return array of all work orders from array of tenants under the Tenants table in CDM
  // returnWO = (allTenants) => {
  //   const tempArray = allTenants.map((tenant) => {
  //     return tenant.WOrder;
  //   });
  //   console.log('TempArray is..', tempArray);
  //   return tempArray;
  // };

  // desc = (workorder, workorderId) => {
  //   return (
  //     <Card style={styles.card}>
  //       <Card.Content extra>
  //         <Card.Header>Work Order #{workorderId}</Card.Header>
  //         <Image>{workorder.PhotoIssue}</Image>
  //         <Card.Description>
  //           <Icon name="home"> {workorder.PropertyAddr} </Icon> <br />
  //           <Icon name="wrench"> {workorder.Issue} </Icon> <br />
  //           <Icon name="check circle outline">
  //             <br />
  //             {workorder.Permission ? 'AccessGranted' : 'PropertyInaccessible'}
  //           </Icon>
  //           <br />
  //           <Icon name="phone"> {workorder.TenantPhone} </Icon>
  //         </Card.Description>
  //       </Card.Content>
  //     </Card>
  //   );
  // };

  render() {
    const WorkOrderCards = this.state.list.map((value, index) => {
      return <DisplayWorkOrders workorder={value} key={index} />;
    });
    const { list } = this.state;
    console.log(list);

    return <Card.Group style={styles.cardGroup}>{WorkOrderCards}</Card.Group>;
  }
}

const DisplayWorkOrders = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Content extra>
        <Card.Header>Work Order #{props.workorder.workorderId}</Card.Header>
        <Image>{props.workorder.PhotoIssue}</Image>
        <Card.Description>
          <Icon name="home"> {props.workorder.Address} </Icon> <br />
          <Icon name="wrench"> {props.workorder.WODesc} </Icon> <br />
          <Icon name="check circle outline">
            <br />
            {props.workorder.Permission ? 'AccessGranted' : 'PropertyInaccessible'}
          </Icon>
          <br />
          <Icon name="phone"> {props.workorder.Phone} </Icon>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

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
