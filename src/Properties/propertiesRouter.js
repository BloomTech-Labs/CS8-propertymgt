// const express = require('express');
// const router = express.Router();
const dd = require('../Config/AwsConfig');
const dbModel = require('../Config/DbModel');
const { Admin } = require('../Config/DynamoDbTables');
const hashingId = require('../Common/HashingId');

const router = express.Router();

// Returns all the properties for property cards screen
// router.get('/properties', (req, res) => {
const properties = (req, res) => {
  console.log(req.body);
  const params = {
    TableName: 'Properties',
  };

  dd.scan(params, (error, data) => {
    if (error) {
      res.status(404).json({ error });
    } else res.status(200).json({ status: 'success', data });
  });
};

// Add a new property to dynamoDB
const addProperty = (req, res) => {
  const {
    NameOwner,
    EmailOwner,
    MobileOwner,
    HomeOwnerAddr,
    PropertyAddr,
    MaxOccupants,
    SqFootage,
    Bedrooms,
    Bathrooms,
    YearBuilt,
    Contract,
    Tenant,
  } = req.body;

  const params = {
    TableName: 'Properties',
    Item: {
      NameOwner,
      EmailOwner,
      MobileOwner,
      HomeOwnerAddr,
      propertyId: hashingId,
      PropertyAddr,
      MaxOccupants,
      SqFootage,
      Bedrooms,
      Bathrooms,
      YearBuilt,
      Contract,
      Tenant,
    },
  };

  dd.put(params, (error) => {
    if (error) res.status(404).json({ error });
  });
};

// Deletes property
const deleteProperty = (req, res) => {
  const id = req.params.id;
  const params = {
    TableName: 'Properties',
    Key: {
      propertyId: id,
    },
  };

  dd.delete(params, (error, data) => {
    if (error) res.status(404).json({ error });
    else res.status(200).json({ status: 'deleted property', data });
  });
};

// Update property
// IMPORTANT: Only nine conditional expressions can be made (06.27.18)
const updateProperty = (req, res) => {
  const {
    NameOwner,
    EmailOwner,
    MobileOwner,
    HomeOwnerAddr,
    PropertyAddr,
    MaxOccupants,
    SqFootage,
    Bedrooms,
    Bathrooms,
    YearBuilt,
  } = req.body;
  const { id } = req.params;

  const params = {
    TableName: 'Properties',
    Key: {
      propertyId: id,
    },
    UpdateExpression:
      'set #a = :NameOwner, #b = :EmailOwner, #c = :MobileOwner, #d = :HomeOwnerAddr',
    ConditionExpression:
      '#a <> :NameOwner OR #b <> :EmailOwner OR #c <> :MobileOwner OR #d <> :HomeOwnerAddr',
    ExpressionAttributeNames: {
      '#a': 'NameOwner',
      '#b': 'EmailOwner',
      '#c': 'MobileOwner',
      '#d': 'HomeOwnerAddr',
    },
    ExpressionAttributeValues: {
      ':NameOwner': NameOwner,
      ':EmailOwner': EmailOwner,
      ':MobileOwner': MobileOwner,
      ':HomeOwnerAddr': HomeOwnerAddr,
    },
  };

  const params2 = {
    TableName: 'Properties',
    Key: {
      propertyId: id,
    },
    UpdateExpression:
      'set #e = :PropertyAddr, #f = :MaxOccupants, #g = :SqFootage, #h = :Bedrooms, #j = :Bathrooms, #z = :YearBuilt',
    ConditionExpression:
      '#e <> :PropertyAddr OR #f <> :MaxOccupants OR #g <> :SqFootage OR #h <> :Bedrooms OR #j <> :Bathrooms OR #z <> :YearBuilt',
    ExpressionAttributeNames: {
      '#e': 'PropertyAddr',
      '#f': 'MaxOccupants',
      '#g': 'SqFootage',
      '#h': 'Bedrooms',
      '#j': 'Bathrooms',
      '#z': 'YearBuilt',
    },
    ExpressionAttributeValues: {
      ':PropertyAddr': PropertyAddr,
      ':MaxOccupants': MaxOccupants,
      ':SqFootage': SqFootage,
      ':Bedrooms': Bedrooms,
      ':Bathrooms': Bathrooms,
      ':YearBuilt': YearBuilt,
    },
  };

  dd.update((params, params2), (error, data) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ message: 'Success', data });
  });
};

// Update admin settings
const settingsUpdate = (req, res) => {
  const { Email, Phone, DisplayName, OldPassword, NewPassword } = req.body;
  const id = req.params.id;
  const params = {
    TableName: 'Admins',
    Key: {
      adminId: id,
    },
    UpdateExpression: 'set #b = :DisplayName, #a = :Email, #c = :Phone',
    ConditionExpression: '#b <> :DisplayName OR #a <> :Email OR #c <> :Phone',
    ExpressionAttributeNames: { '#b': 'Name', '#a': 'Email', '#c': 'Phone' },
    ExpressionAttributeValues: {
      ':DisplayName': DisplayName,
      ':Email': Email,
      ':Phone': Phone,
    },
  };

  dd.update(params, (error, data) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ message: 'Success', data });
  });
};

module.exports = {
  properties,
  addProperty,
  deleteProperty,
  updateProperty,
  settingsUpdate,
};
