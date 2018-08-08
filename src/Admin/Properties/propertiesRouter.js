// const express = require('express');
// const router = express.Router();
const dd = require('../../Config/AwsConfig');
// const dbModel = require('../Config/DbModel');
// const { Admin } = require('../Config/DynamoDbTables');
const hashingId = require('../../Common/HashingId');

// TODO: Do not push stripe key to github
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// const writingToLSDB = (x) => {
//   const { Tenants, StartD, EndD, propertyId, PropertyAddr, Contract } = x;
//   const params = {
//     TableName: 'LS_DB',
//     Item: {
//       lsdbId: hashingId2,
//       Tenants,
//       StartD,
//       EndD,
//       propertyId,
//       PropertyAddr,
//       Contract,
//     },
//   };
//   dd.put(params, (err, d) => {
//     if (err) console.log('error in testFunction..', err);
//     else console.log('writingToLSDB fired..', d);
//   });
// };

// // Returns items in table with specified filter

const scanF = (req, res) => {
  const { pid, test } = req.params;
  console.log('my id ==>', typeof id);
  const params = {
    TableName: 'Tenants',
    FilterExpression: 'propertyId = :this_p AND propertyId > :this_test',
    ExpressionAttributeValues: { ':this_p': pid, ':this_test': test },
  };

  // const params2 = {
  //   TableName: 'Tenants',
  //   FilterExpression: 'propertyId = :this_p',
  //   ExpressionAttributeValues: { ':this_p': id },
  // };

  dd.scan(params, (err, data) => {
    if (err) {
      console.log('Err after scan', err);
      res.status(404).json({ msg: 'Error', data });
    } else console.log('my data ==>', data);
    res.status(200).json({ msg: 'success', data });
  });
};

// // Get list of tenants with specified admin Id to filter with
// const scanForTenants = (req, res) => {
//   const { myTableName, myAdminId, p } = req.body;
//   const params = {
//     TableName: myTableName,
//     FilterExpression: 'Admin = :this_admin',
//     ExpressionAttributeValues: { ':this_admin': myAdminId },
//   };

//   dd.scan(params, (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
//   });
// };

// // Post all id's to LSDB
// const lsdb = (req, res) => {
//   const { propertyId, arrayOfTenantIds } = req.body;

//   // Get all tenantId's and add them to an array of tenantId's
//   // Populate a var called id1 and id2

//   const T = [];
//   // T.push(id1);
//   // T.push(id2);

//   const params = {
//     TableName: 'LS_DB',
//     Item: {
//       Admin: '123',
//       Property: propertyId,
//       Tenants: T,
//     },
//   };
// };

// // Gets info from LS_DB for property cards
// const propertieslsdb = (req, res) => {
//   const params = {
//     TableName: 'LS_DB',
//   };

//   dd.scan(params, (error, data) => {
//     if (error) res.status(404).json({ error });
//     else res.status(200).json({ status: 'success', data });
//   });
// };

// get Tenant for Property

// Returns all the properties for property cards screen
// router.get('/properties', (req, res) => {
const properties = (req, res) => {
  const params = {
    TableName: 'Properties',
  };

  dd.scan(params, (error, data) => {
    if (error) {
      res.status(404).json({ error });
    } else res.status(200).json({ status: 'success', data });
  });
};

const getAllTenants = (req, res) => {
  const params = {
    TableName: 'Tenants',
  };

  dd.scan(params, (error, data) => {
    if (error) {
      res.status(404).json({ msg: error in getAllTenants, error });
    } else res.status(200).json({ msg: 'success', data });
  });
};

// Add a new property
const addProperty = (req, res) => {
  // const propertyAmount = 120000; // hard coded
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
    PropertyRent,
  } = req.body;

  // const toLSDB = {
  //   propertyId: hashingId,
  //   PropertyAddr,
  //   Contract,
  // };

  console.log('this is hashingId() -->', hashingId());
  console.log('this is hashingId() -->', hashingId());

  const params = {
    TableName: 'Properties',
    Item: {
      propertyId: hashingId(),
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
      PropertyRent,
      Admin: '123',
    },
  };

  dd.put(params, (error) => {
    if (error) res.status(404).json({ error });
    // else res.status(200).json({ message: 'success' });
    // STRIPE INTEGRATION
    else {
      stripe.plans.create(
        {
          id: params.Item.propertyId, // plan ID === Property Address
          amount: PropertyRent,
          interval: 'month',
          product: 'prod_DLRBi4QUbCDEVn',
          nickname: PropertyAddr,
          currency: 'usd',
        },
        (stripeErr, plan) => {
          if (stripeErr) {
            console.log('this is stripeErr -->', stripeErr);
            res.status(500).json({ status: 'stripe error', stripeErr });
          } else {
            console.log('this is plan -->', plan);
            res.status(200).json({ status: 'property created!', plan });
          }
        }
      );
    }
  });

  // writingToLSDB(toLSDB);
};

// Deletes property
const deleteProperty = (req, res) => {
  const { id } = req.params;
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
    else res.status(200).json({ message: 'Success' });
  });
};

module.exports = {
  // lsdb,
  // propertieslsdb,
  scanF,
  properties,
  addProperty,
  deleteProperty,
  updateProperty,
  getAllTenants,
};
