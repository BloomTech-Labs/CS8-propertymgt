import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import axios from 'axios';

const handleClick = (props) => {
  axios
    .delete(`http://localhost:5000/api/admin/deleteproperty/${props.id}`)
    .then((res) => {
      console.log('Deleted property..', props.id);
    })
    .catch((error) => {
      console.log('Error in DeleteProperty..', error);
    });
};

const DeleteProperty = (props) => {
  return (
    <a onClick={handleClick(props)}>
      <Icon name="trash alternate outline" />
    </a>
  );
};

export default DeleteProperty;
