/*eslint-disable import/first*/
import React, { Component } from 'react';
import { Card, Icon, Image, Message, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import DeleteWorkOrder from './DeleteWorkOrder';

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
      .get('/api/workorder/all')
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

    return (
      <Container>
        <Header as="h1">Work Orders</Header>
        <Card.Group style={styles.cardGroup}>{WorkOrderCards}</Card.Group>
      </Container>
    );
  }
}
// ID #{props.workorder.workorderId}

const DisplayWorkOrders = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Content extra>
        <Card.Header>
          <Icon name="home" />
          {props.workorder.Address}
        </Card.Header>
        {/* <Image>{props.workorder.PhotoIssue}</Image> */}
        <Message>
          <Message.Header>
            <Icon name="wrench" />
            Description
          </Message.Header>
          <Message.Content>{props.workorder.WODesc}</Message.Content>
        </Message>
        <Card.Description>
          <Icon name="check circle outline" />
          {props.workorder.Permission ? 'Access Granted' : 'Knock First'}
          <br />
          <Icon name="phone" /> {props.workorder.Phone}
        </Card.Description>
        <DeleteWorkOrder id={props.workorder.workorderId} />
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
