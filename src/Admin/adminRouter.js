const express = require('express');

const router = express.Router();
const dd = require('../Config/AwsConfig');
const dbModel = require('../Config/DbModel');
const hashingId = require('../Common/HashingId');
const { Admins } = require('../Config/DynamoDbTables');



// saves property manager 


// return all the properties for property cards screen
router.get('/property', (req, res) => {
  console.log(req.body);
  const params = {
    TableName: 'Properties',
  };

  dd.scan(params, (err, data) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    } else res.status(200).json({ status: 'success', data });
  });
});

// return a single property using the id parameter
router.get('/property/:id', (req, res) => {
  const params = {
    TableName: 'ls_property_mgt',
    Key: {
      propertyId: Number(req.params.id),
    },
  };

  dd.get(params, (err, data) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    } else {
      console.log(typeof params.Key.propertyId);
      res.status(200).json({ status: 'success', data });
    }
  });
});

// post, add a new property to database
router.post('/addproperty', (req, res) => {
  console.log(req);
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
      // Contract,
    },
  };

  console.log('params in server ', params);

  dd.put(params, (err) => {
    if (err) console.log('Error trying to POST', err);
  });
  res.status(200).json({ status: 'added property' });
});

// deletes a single property with the given property id
router.delete('/property/:id', (req, res) => {
  const params = {
    TableName: 'ls_property_mgt',
    Key: {
      propertyId: Number(req.params.id),
    },
  };

  dd.delete(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
    res.status(200).json({ status: 'deleted property' });
  });
});

// return all the tenant info to grab the work orders for cards screen
router.get('/workorder', (req, res) => {
  console.log('Workorder GET method triggered');
  const params = {
    TableName: 'Tenants',
  };

  dd.scan(params, (err, data) => {
    if (err) res.status(200).json({ status: 'error', error: err });
    else res.status(200).json({ status: 'success', data });
  });
});

// post, it adds a new tenant to the system
router.post('/addtenant', (req, res) => {
  console.log('addtenant POST method in admin triggered.. ');
  const { T1Name, T1Phone, T1Email, T2Name, T2Phone, T2Email } = req.body;
  const params = {
    TableName: 'Tenants',
    Item: {
      tenantId: hashingId,
      NameT: T1Name,
      MobileT: T1Phone,
      EmailT: T1Email,
      WOrder: [],
      // T2Name,
      // T2Phone,
      // T2Email
    },
  };

  dd.put(params, (err, data) => {
    if (err) res.status(400).json({ status: 'Error at addtenant', error: err });
    else res.status(200).json({ status: 'Success', data });
  });
});

// display the billing information
router.get('/billing', (req, res) => {
  res.status(200).json({ status: 'returns billing information' });
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

  dd.update(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
});

// display admin settings
router.get('/settings', (req, res) => {
  res.status(200).json({ status: 'display admin settings info' });
});

module.exports = router;
