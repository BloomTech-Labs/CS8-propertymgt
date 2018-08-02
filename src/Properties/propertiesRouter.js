// const express = require('express');
// const router = express.Router();
const dd = require('../Config/AwsConfig');
const dbModel = require('../Config/DbModel');
const { Admin } = require('../Config/DynamoDbTables');
const hashingId = require('../Common/HashingId');
const hashingId2 = require('../Common/HashingId2');

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
// const scanF = (myTableName, myAdminId, p) => {
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

// Get list of tenants with specified admin Id to filter with
const scanForTenants = (req, res) => {
  const { myTableName, myAdminId, p } = req.body;
  const params = {
    TableName: myTableName,
    FilterExpression: 'Admin = :this_admin',
    ExpressionAttributeValues: { ':this_admin': myAdminId },
  };

  dd.scan(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
};

// Post all id's to LSDB
const lsdb = (req, res) => {
  const { propertyId, arrayOfTenantIds } = req.body;

  // Get all tenantId's and add them to an array of tenantId's
  // Populate a var called id1 and id2

  const T = [];
  // T.push(id1);
  // T.push(id2);

  const params = {
    TableName: 'LS_DB',
    Item: {
      Admin: '123',
      Property: propertyId,
      Tenants: T,
    },
  };
};

// Gets info from LS_DB for property cards
const propertieslsdb = (req, res) => {
  const params = {
    TableName: 'LS_DB',
  };

  dd.scan(params, (error, data) => {
    if (error) res.status(404).json({ error });
    else res.status(200).json({ status: 'success', data });
  });
};

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
  } = req.body;

  // const toLSDB = {
  //   propertyId: hashingId,
  //   PropertyAddr,
  //   Contract,
  // };

  const params = {
    TableName: 'Properties',
    Item: {
      Admin: '123',
      propertyId: hashingId,
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
      Tenant: [],
    },
  };

  dd.put(params, (error) => {
    if (error) res.status(404).json({ error });
    else res.status(200).json({ message: 'success' });
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

// Add a new tenant and creates a LS_DB item with property, contract, and tenant info
const addTenant = (req, res) => {
  // console.log('addtenant POST method in admin triggered.. ');

  // my propertyId
  // const { id } = req.params;

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
  } = req.body;

  // const T1 = {
  //   tenantId: hashingId,
  //   NameT: T1Name,
  //   MobileT: T1Phone,
  //   EmailT: T1Email,
  //   NotiP: T1NotiP,
  //   NotiE: T1NotiE,
  //   WOrder: [],
  // };

  const T2 = {
    tenantId: hashingId2,
    NameT: T2Name,
    MobileT: T2Phone,
    EmailT: T2Email,
    NotiP: T2NotiP,
    NotiE: T2NotiE,
    WOrder: [],
  };

  // const T = [];
  // T.push(T1);
  // T.push(T2);

  // const toLSDB = {
  //   Tenants: T,
  //   StartD,
  //   EndD,
  //   propertyId,
  //   PropertyAddr,
  //   Contract,
  // };

  const params = {
    TableName: 'Tenants',
    Item: {
      Admin: '123',
      tenantId: hashingId,
      propertyId,
      NameT: T1Name,
      MobileT: T1Phone,
      EmailT: T1Email,
      NotiP: T1NotiP,
      NotiE: T1NotiE,
      StartD,
      EndD,
      WOrder: [],
      T2,
    },
  };

  dd.put(params, (error, data) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ status: 'Success..', data });
  });

  // writingToLSDB(toLSDB);
};

module.exports = {
  lsdb,
  propertieslsdb,
  properties,
  addProperty,
  addTenant,
  deleteProperty,
  updateProperty,
};
