// const express = require('express');
// const router = express.Router();
const dd = require('../Config/AwsConfig');
const dbModel = require('../Config/DbModel');
const hashingId = require('../Common/HashingId');
const { Admins } = require('../Config/DynamoDbTables');

const stripe = require('stripe')(process.env.STRIPE_SECRET);

// // Returns all the properties for property cards screen
// router.get('/properties', (req, res) => {
//   console.log(req.body);
//   const params = {
//     TableName: 'Properties',
//   };

//   dd.scan(params, (error, data) => {
//     if (error) {
//       res.status(404).json({ error });
//     } else res.status(200).json({ status: 'success', data });
//   });
// });

// return a single property using the id parameter
const propertyId = (req, res) => {
  const params = {
    TableName: 'Properties',
    Key: {
      propertyId: req.params.id,
    },
  };

  dd.get(params, (err, data) => {
    console.log(data);
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    } else {
      console.log(typeof params.Key.propertyId);
      res.status(200).json({ status: 'success', data });
    }
  });
};

// // Add a new property to dynamoDB
// router.post('/addproperty', (req, res) => {
//   console.log(req);
//   const {
//     NameOwner,
//     EmailOwner,
//     MobileOwner,
//     HomeOwnerAddr,
//     PropertyAddr,
//     MaxOccupants,
//     SqFootage,
//     Bedrooms,
//     Bathrooms,
//     YearBuilt,
//     Contract,
//   } = req.body;

//   const params = {
//     TableName: 'Properties',
//     Item: {
//       NameOwner,
//       EmailOwner,
//       MobileOwner,
//       HomeOwnerAddr,
//       propertyId: hashingId,
//       PropertyAddr,
//       MaxOccupants,
//       SqFootage,
//       Bedrooms,
//       Bathrooms,
//       YearBuilt,
//       // Contract,
//     },
//   };

//   console.log('params in server ', params);

//   dd.put(params, (err) => {
//     if (err) console.log('Error trying to POST', err);
//   });
//   res.status(200).json({ status: 'added property' });
// });

// Select a property with an id from the url
// router.delete('/property/:id', (req, res) => {
//   const params = {
//     TableName: 'ls_property_mgt',
//     Key: {
//       propertyId: Number(req.params.id),
//     },
//   };

//   dd.delete(params, (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
//     res.status(200).json({ status: 'deleted property' });
//   });
// });

// Returns tenants to grab work orders from for cards screen
const workorder = (req, res) => {
  console.log('Workorder GET method triggered');
  const params = {
    TableName: 'Tenants',
  };

  dd.scan(params, (err, data) => {
    if (err) res.status(200).json({ status: 'error', error: err });
    else res.status(200).json({ status: 'success', data });
  });
};

// Add a new tenant to the system
// const addTenant = (req, res) => {
//   console.log('addtenant POST method in admin triggered.. ');
//   const { Name, Phone, Email, PropAddress, T2Name, T2Phone, T2Email } = req.body;
//   const params = {
//     TableName: 'Tenants',
//     Item: {
//       tenantId: hashingId,
//       NameT: Name,
//       MobileT: Phone,
//       EmailT: Email,
//       WOrder: [],
//       PropAddress,
//       // T2Name,
//       // T2Phone,
//       // T2Email
//     },
//   };

//   dd.put(params, (error, data) => {
//     if (error) res.status(400).json({ error });
//     else {
//       stripe.customers.create(
//         {
//           description: params.Item.tenantId,
//           email: params.Item.EmailT,
//         },
//         (stripeErr, customer) => {
//           if (stripeErr) res.status(500).json({ status: 'stripe Error', stripeErr });
//           else res.status(200).json({ status: 'Tenant Creation success', customer });
//         }
//       );
//     }
//   });
// };

// display the billing information
// router.get('/billing', (req, res) => {
//   res.status(200).json({ status: 'returns billing information' });
// });

// patch, update setting in admin settings
// router.patch('/settingsupdate/:id', (req, res) => {
//   const { Email, Phone, DisplayName, OldPassword, NewPassword } = req.body;
//   const id = req.params.id;
//   const params = {
//     TableName: 'Admins',
//     Key: {
//       adminId: id,
//     },
//     UpdateExpression: 'set #b = :DisplayName, #a = :Email, #c = :Phone',
//     ConditionExpression: '#b <> :DisplayName OR #a <> :Email OR #c <> :Phone',
//     ExpressionAttributeNames: { '#b': 'Name', '#a': 'Email', '#c': 'Phone' },
//     ExpressionAttributeValues: {
//       ':DisplayName': DisplayName,
//       ':Email': Email,
//       ':Phone': Phone,
//     },
//   };

//   dd.update(params, (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
//   });
// });

// ***IMPORTANT THIS CODE BELOW HAS BEEN MOVED TO USER/USERAUTH FOLDER
// ANY API CALLING THIS END POINT SHOULD BE CALLING THE NEW END POINT

// Adds new admin to Admins dynamoDB table
// router.post('/signup', (req, res) => {
//   console.log(req.body);
//   const { AdminName, AdminEmail, AdminPW } = req.body;
//   const params = {
//     TableName: 'Admins',
//     Item: {
//       Name: AdminName,
//       Email: AdminEmail,
//       Phone: 'AdminPhone',
//       adminId: hashingId,
//     },
//   };

//   dd.put(params, (error, data) => {
//     if (error) {
//       res.status(400).json({ error });
//     } else {
//       res.status(200).json({ data });
//     }
//   });
// });

module.exports = {
  propertyId,
  workorder,
  // addTenant,
};
