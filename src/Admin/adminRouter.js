const express = require('express');
const router = express.Router();
const dd = require('../Config/AwsConfig');
const dbModel = require('../Config/DbModel');
const hashingId = require('../Common/HashingId');
const { Admins } = require('../Config/DynamoDbTables');

// used for development only
const faker = require('faker');

const GlobalParams = {
  TableName: 'ls_property_mgt',
};

let PROPERTY_ID = 1;

const IncrementId = () => {
  return PROPERTY_ID++;
};

// return all the properties for property cards screen
router.get('/properties', (req, res) => {
  dd.scan(GlobalParams, (err, data) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    } else res.status(200).json({ status: 'success', data: data });
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
      res.status(200).json({ status: 'success', data: data });
    }
  });
});

// **post, add a new property to database
router.post('/addproperty', (req, res) => {
  console.log(req);

  const params = {
    TableName: 'ls_property_mgt',
    Item: {
      NameOwner: req.body.NameOwner,
      EmailOwner: req.body.EmailOwner,
      MobileOwner: req.body.MobileOwner,
      HomeOwnerAddr: req.body.HomeOwnerAddr,
      PropertyAddr: req.body.PropertyAddr,
      MaxOccupants: req.body.MaxOccupants,
      SqFootage: req.body.SqFootage,
      Bedrooms: req.body.Bedrooms,
      Bathrooms: req.body.Bathrooms,
      YearBuilt: req.body.YearBuilt,
      propertyId: hashingId,
    },
  };

  console.log('params in server ', params);

  dd.put(params, (err, data) => {
    if (err) console.log('Error trying to POST', err);
  });
  res.status(200).json({ status: 'added property' });
});

// deletes a single property with the given property id
router.delete('/property', (req, res) => {
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

// return all the work orders for cards screen
router.get('/workorder', (req, res) => {
  dd.scan(GlobalParams, (err, data) => {
    if (err) res.status(200).json({ status: 'error', error: err });
    else res.status(200).json({ status: 'success', data: data });
  });
});

// **post, it adds a new tenant to the system
router.get('/addtenant', (req, res) => {
  res.status(200).json({ status: 'add a new tenant to the system' });
});

// display the billing information
router.get('/billing', (req, res) => {
  res.status(200).json({ status: 'returns billing information' });
});

// display admin settings
router.get('/settings', (req, res) => {
  res.status(200).json({ status: 'display admin settings info' });
});

// **put, update setting in admin settings
router.get('/settingsupdate', (req, res) => {
  res.status(200).json({ status: 'returns all properties for cards' });
});

module.exports = router;
