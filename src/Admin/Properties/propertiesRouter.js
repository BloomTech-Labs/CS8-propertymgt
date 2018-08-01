const express = require('express');

const router = express.Router();
const dd = require('../../Config/AwsConfig');
const dbModel = require('../../Config/DbModel');
const { Admin } = require('../../Config/DynamoDbTables');
const hashingId = require('../../Common/HashingId');

// Gets info from LS_DB for property cards
router.get('/propertieslsdb', (req, res) => {
  const params = {
    TableName: 'LS_DB',
  };

  dd.scan(params, (error, data) => {
    if (error) res.status(404).json({ error });
    else res.status(200).json({ status: 'success', data });
  });
});

// Returns all properties
router.get('/properties', (req, res) => {
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
      Tenant: [],
    },
  };

  dd.put(params, (error) => {
    if (error) res.status(404).json({ error });
    else res.status(200).json({ message: 'success' });
  });
});

// Deletes property
router.delete('/deleteproperty/:id', (req, res) => {
  const { id } = req.params;
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
// IMPORTANT: Only nine conditional expressions can be made (06.27.18)
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
    else res.status(200).json({ message: 'Success' });
  });
});

// Update admin settings
router.patch('/settingsupdate/:id', (req, res) => {
  const { Email, Phone, DisplayName, OldPassword, NewPassword } = req.body;
  const { id } = req.params;
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

const writingToLSDB = (x) => {
  const { Tenants, StartD, EndD, propertyId, PropertyAddr, Contract } = x;
  const params = {
    TableName: 'LS_DB',
    Item: {
      lsdbId: hashingId,
      Tenants,
      StartD,
      EndD,
      propertyId,
      PropertyAddr,
      Contract,
    },
  };
  dd.put(params, (err, d) => {
    if (err) console.log('error in testFunction..', err);
    else console.log('writingToLSDB fired..', d);
  });
};

// Add a new tenant and creates a LS_DB item with property, contract, and tenant info
router.post('/addtenant/', (req, res) => {
  // console.log('addtenant POST method in admin triggered.. ');

  // my propertyId
  const { id } = req.params;

  // my tenant object values
  const {
    T1Name,
    T1Phone,
    T1Email,
    T1NotiP,
    T1NotiE,
    T2Name,
    T2Phone,
    T2Email,
    T2NotiP,
    T2NotiE,
    StartD,
    EndD,
    propertyId,
    PropertyAddr,
    Contract,
  } = req.body;

  const T1 = {
    tenantId: hashingId,
    NameT: T1Name,
    MobileT: T1Phone,
    EmailT: T1Email,
    NotiP: T1NotiP,
    NotiE: T1NotiE,
    WOrder: [],
  };

  const T2 = {
    tenantId: hashingId,
    NameT: T2Name,
    MobileT: T2Phone,
    EmailT: T2Email,
    NotiP: T2NotiP,
    NotiE: T2NotiE,
    WOrder: [],
  };

  const T = [];
  T.push(T1);
  T.push(T2);

  const toLSDB = {
    Tenants: T,
    StartD,
    EndD,
    propertyId,
    PropertyAddr,
    Contract,
  };

  const params = {
    TableName: 'Tenants',
    Item: {
      tenantId: T1.tenantId,
      NameT: T1Name,
      MobileT: T1Phone,
      EmailT: T1Email,
      NotiP: T1NotiP,
      NotiE: T1NotiE,
      WOrder: [],
      T2,
    },
  };

  console.log('My propertyId should be..', id);

  dd.put(params, (error, data) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ status: 'Success..', data });
  });

  writingToLSDB(toLSDB);
});

module.exports = router;
