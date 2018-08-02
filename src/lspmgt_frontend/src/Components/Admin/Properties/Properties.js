import React, { Component } from 'react';
import { Card, Icon, Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Properties.css';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.desc = this.desc.bind(this);
    this.addr = this.addr.bind(this);
  }

  // Gets data from server and adds it to state
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/admin/properties')
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
        <Link to="/admin/addproperty">
          <Icon name="plus circle" size="massive" link />{' '}
        </Link>
      </div>
    );
  };

  // Populates each listOfProperties element with proper data field from database properties list,
  // just refactor hardcoded template with real data
  desc = (property) => {
    const n = property[Object.keys(property)[6]];
    return (
      <Card>
        <Card.Content textAlign="right">
          <Link to="admin/editproperty">
            <Icon name="pencil" fitted />
          </Link>
          <Icon name="trash alternate outline" link />
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="home" />
              </Feed.Label>
              <Feed.Content>{n}</Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="user" />
              </Feed.Label>
              <Feed.Content>Tenants</Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="calendar alternate outline" />
              </Feed.Label>
              <Feed.Content>Least Start/End</Feed.Content>
            </Feed.Event>
          </Feed>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="check" />
              </Feed.Label>
              <Feed.Content>Contract Signed</Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    );
  };

  render() {
    const { list } = this.state;

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
