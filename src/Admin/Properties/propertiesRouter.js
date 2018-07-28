const express = require('express');
const router = express.Router();
const dd = require('../../Config/AwsConfig');
const dbModel = require('../../Config/DbModel');
const { Admin } = require('../../Config/DynamoDbTables');
const hashingId = require('../../Common/HashingId');

// Returns all the properties for property cards screen
router.get('/properties', (req, res) => {
  console.log(req.body);
  const params = {
    TableName: 'Properties',
  };

  dd.scan(params, (error, data) => {
    if (error) {
      res.status(404).json({ error });
    } else res.status(200).json({ status: 'success', data });
  });
});

// Add a new property to dynamoDB
router.post('/addproperty', (req, res) => {
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
});

// Deletes property
router.delete('/deleteproperty/:id', (req, res) => {
  const id = req.params.id;
  const params = {
    TableName: 'Properties',
    Key: {
      propertyId: id,
    },
  };

  dd.delete(params, (error, data) => {
    if (error) res.status(404).json({ error });
    else res.status(200).json({ status: 'deleted property' });
  });
});

// Update property
router.patch('/updateproperty/:id', (req, res) => {
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
  const id = req.params.id;
  console.log(`id ${id}, id ${typeof id}, req.body.<attributevalue> ${req.body.YearBuilt}`);
  const params = {
    TableName: 'Properties',
    Key: {
      propertyId: id,
    },
    UpdateExpression:
      'set #a = :NameOwner, #b = :EmailOwner, #c = :MobileOwner, #j = :HomeOwnerAddr, #d = :PropertyAddr, #e = :MaxOccupants, #k = :SqFootage, #f = :Bedrooms, #g = :Bathrooms, #h = YearBuilt',
    ConditionExpression:
      '#a <> :NameOwner OR #b <> :EmailOwner OR #c <> :MobileOwner OR #j <> :HomeOwnerAddr OR #d <> :PropertyAddr OR #e <> :MaxOccupants OR #k <> :SqFootage OR #f <> :Bedrooms OR #g <> :Bathrooms OR #h <> YearBuilt',
    ExpressionAttributeNames: {
      '#a': 'NameOwner',
      '#b': 'EmailOwner',
      '#c': 'MobileOwner',
      '#j': 'HomeOwnerAddr',
      '#d': 'PropertyAddr',
      '#e': 'MaxOccupants',
      '#k': 'SqFootage',
      '#f': 'Bedrooms',
      '#g': 'Bathrooms',
      '#h': 'YearBuilt',
    },
    ExpressionAttributeValues: {
      ':NameOwner': NameOwner,
      ':EmailOwner': EmailOwner,
      ':MobileOwner': MobileOwner,
      ':HomeOwnerAddr': HomeOwnerAddr,
      ':PropertyAddr': PropertyAddr,
      ':MaxOccupants': MaxOccupants,
      ':SqFootage': SqFootage,
      ':Bedrooms': Bedrooms,
      ':Bathrooms': Bathrooms,
      ':YearBuilt': YearBuilt,
    },
  };

  dd.update(params, (error, data) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ message: 'Success' });
  });
});

// patch, update setting in admin settings
router.patch('/settingsupdate/:id', (req, res) => {
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
    else res.status(200);
  });
});

module.exports = router;
