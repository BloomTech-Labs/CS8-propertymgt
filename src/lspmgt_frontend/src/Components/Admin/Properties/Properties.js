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
      test: {},
      tenantList: [],
    };
    this.desc = this.desc.bind(this);
    this.addr = this.addr.bind(this);
    this.checkForContract = this.checkForContract.bind(this);
    this.getTenant = this.getTenant.bind(this);
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

    axios
      .get('http://localhost:5000/api/property/alltenants')
      .then((response) => {
        this.setState({
          tenantList: response.data.data.Items,
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
          <Icon style={{ color: '#327E96' }} name="plus circle" size="massive" link />
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

    // Get tenant object off of tenant table
    // this.getTenant(id);
    const { tenantList } = this.state;
    console.log('tenant list is here -->', tenantList);
    // const tenant1 = tenantList.find((FUCKINGTENANT) => FUCKINGTENANT.propertyId === id).NameT;
    const tenant1 = 'abc';
    console.log('tenant1 is -->', tenant1);

    // const array2 = Object.keys(test);
    // console.log('My array of attributes -->', array2);

    // // Get Tenants array
    // x = array2.indexOf('NameT');
    // // let y = array2.indexOf('T2');
    // console.log('My tenants are located at..', x);
    // const tenants = test[Object.keys(test)[x]];
    // // console.log('My tenants are..', tenants);

    // // Get Start/ End dates
    // x = array2.indexOf('StartD');
    // const startD = test[Object.keys(test)[x]];
    // x = array2.indexOf('EndD');
    // const endD = test[Object.keys(test)[x]];

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
              <Feed.Content>{tenant1}, abc</Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="calendar alternate outline" />
              </Feed.Label>
              <Feed.Content>abc - abc</Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="check" />
              </Feed.Label>
              <Feed.Content>{this.checkForContract(contract)}</Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    );
  };

  getTenant = (propertyId) => {
    axios
      .get(`http://localhost:5000/api/property/tenant/${propertyId}/${123}`)
      .then((res) => {
        console.log('res is here -->', res.data.data.Items[0]);
        this.setState({
          test: res.data.data.Items[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
