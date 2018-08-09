import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import axios from 'axios';

class DeleteProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props;
    axios
      .delete(`/api/property/delete/${id}`)
      .then((res) => {
        console.log('Deleted property..', res);
        this.setState({});
      })
      .catch((error) => {
        console.log('Error in DeleteProperty..', error);
      });
  };

  render() {
    return (
      <Modal
        trigger={
          <a>
            <Icon style={{ color: '#327E96' }} name="trash alternate outline" />
          </a>
        }
        basic
        size="small"
      >
        <Header content="Delete Property" />
        <Modal.Content>
          <h4>Are you sure?</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue" type="submit" inverted onClick={this.handleSubmit}>
            <Icon name="checkmark" />Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

// const handleClick = (id) => {
//   console.log('delete fired.. id before params..', id);
//   axios
//     .delete(`http://localhost:5000/api/admin/deleteproperty/${id}`)
//     .then((res) => {
//       console.log('Deleted property..', res);
//     })
//     .catch((error) => {
//       console.log('Error in DeleteProperty..', error);
//     });
// };

// const DeleteProperty = (props) => {
//   console.log('dp props..', props);
//   return (
//     <Modal
//       trigger={
//         <a>
//           <Icon name="trash alternate outline" />
//         </a>
//       }
//       basic
//       size="small"
//     >
//       <Header content="Delete Property" />
//       <Modal.Content>
//         <span color="red">
//           <h4>Are you sure?</h4>
//         </span>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color="blue" type="submit" inverted onClick={handleClick(props)}>
//           <Icon name="checkmark" />Delete
//         </Button>
//       </Modal.Actions>
//     </Modal>
//   );
// };

export default DeleteProperty;

DeleteProperty.propTypes = {
  id: PropTypes.string,
};
