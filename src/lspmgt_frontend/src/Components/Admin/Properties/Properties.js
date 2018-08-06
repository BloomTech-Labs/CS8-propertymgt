import React, { Component } from 'react';
import { Card, Icon, Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditProperty from './EditProperty';
import DeleteProperty from './DeleteProperty';
import './Properties.css';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.desc = this.desc.bind(this);
    this.addr = this.addr.bind(this);
    this.checkForContract = this.checkForContract.bind(this);
  }

  // Gets data from server and adds it to state
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/property/all')
      .then((response) => {
        this.setState({
          list: response.data.data.Items,
        });
      })
      .catch((error) => {
        console.log('In Properties component: ', error);
      });
  }

  // Directs to AddProperty page
  addr = () => {
    return (
      <div>
        <h4> Add a new Property </h4>
        <Link to="/addproperty">
          <Icon name="plus circle" size="massive" link />
        </Link>
      </div>
    );
  };

  checkForContract = (y) => {
    return y ? (
      <span style={{ color: 'green' }}>ContractSigned</span>
    ) : (
      <span style={{ color: 'red' }}>Contract Not Signed</span>
    );
  };

  // Makes sure an array of tenant names is passed back not as undefined
  displayTenants = (x) => {
    let arr = [{ NameT: 'tenant' }, { NameT: 'tenant' }];
    if (x !== undefined) {
      arr = x;
    }
    return `${arr[0].NameT}, ${arr[1].NameT}`;
  };

  // Populates each listOfProperties element with proper data field from database properties list,
  // just refactor hardcoded template with real data
  desc = (property) => {
    const array = Object.keys(property);

    // Get propertyId
    let x = array.indexOf('propertyId');
    const id = property[Object.keys(property)[x]];
    // console.log('My id in properties component is..', id);

    // Get PropertyAddr
    x = array.indexOf('PropertyAddr');
    // console.log('My property address is located at..', x);
    const address = property[Object.keys(property)[x]];

    // Get Tenants array
    x = array.indexOf('Tenants');
    console.log('My tenants are located at..', x);
    const tenants = property[Object.keys(property)[x]];
    // console.log('My tenants are..', tenants);

    // Get Start/ End dates
    x = array.indexOf('StartD');
    const startD = property[Object.keys(property)[x]];
    x = array.indexOf('EndD');
    const endD = property[Object.keys(property)[x]];

    // Get Contract
    x = array.indexOf('Contract');
    const contract = property[Object.keys(property)[x]];

    return (
      <Card>
        <Card.Content textAlign="right">
          <EditProperty property={property} />
          <DeleteProperty id={id} />
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="home" />
              </Feed.Label>
              <Feed.Content>{address}</Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="user" />
              </Feed.Label>
              <Feed.Content>{this.displayTenants(tenants)}</Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="calendar alternate outline" />
              </Feed.Label>
              <Feed.Content>
                {startD} - {endD}
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="check" />
              </Feed.Label>
              <Feed.Content>{this.checkForContract(contract)}</Feed.Content>
            </Feed.Event>
          </Feed>`
        </Card.Content>
      </Card>
    );
  };

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div className="admin-router">
        <Card.Group itemsPerRow="3">
          {list.map((property) => {
            return this.desc(property);
          })}
          <div className="addr-function">{this.addr()}</div>
        </Card.Group>
      </div>
    );
  }
}

export default Properties;
