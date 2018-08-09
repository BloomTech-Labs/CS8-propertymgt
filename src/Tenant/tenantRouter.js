// // Option A is that we can make User it's own model and route

const express = require('express');
const dd = require('../Config/AwsConfig');
// const { Admins } = require('../Config/DynamoDbTables');
const hashingId = require('../Common/HashingId');
// const hashingId2 = require('../Common/HashingId2');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const router = express.Router();

const getTenantSettings = (req, res) => {
  console.log('GET TENANT SETTINGS API ---> ', req.params);
  const { email } = req.params;
  const params = {
    TableName: 'Tenants_2',
    IndexName: 'email-index',
    KeyConditionExpression: 'email = :e',
    ExpressionAttributeValues: {
      ':e': email,
    },
  };

  dd.query(params, (error, data) => {
    log('GET TENANT API -> ', data);
    if (error) {
      console.log('getTenantSettings returns this error -->', error);
      res.status(400).json({ status: 'error', data: error });
    } else if (data.Count === 0) {
      res.status(400).json({ status: 'error', data: 'No data Found in the database' });
    } else {
      const userData = {
        adminId: data.Items[0].tenantId,
        email: data.Items[0].email,
        stripeId: data.Items[0].stripeId,
      };

      console.log('success with getTenantSettings -->', userData);
      res.status(200).json({ status: 'success', data: userData });
    }
  });
};

// GET method for tenant invoice and rent balance
const getTenantCustomer = (req, res) => {
  const { id } = req.params;
  stripe.customers.retrieve(id, (custErr, customer) => {
    if (custErr) {
      console.log(custErr);
      res.status(500).json({ status: 'error retrieving customer' });
    } else {
      console.log(customer);
      stripe.invoices.retrieveUpcoming(id, (invoiceErr, invoice) => {
        if (invoiceErr) {
          console.log(invoiceErr);
          res.status(500).json({ status: 'failed to get tenant invoice' });
        } else {
          console.log(invoice);
          res.status(200).json({ status: 'customer retrieved', customer, invoice });
        }
      });
    }
  });
};

const makePayment = (req, res) => {
  const { PaymentAmount, id } = req.body;
  stripe.invoiceItems.create(
    {
      customer: id,
      amount: `-${PaymentAmount}`,
      currency: 'usd',
    },
    (err, invoiceItem) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: 'payment error' });
      } else {
        console.log(invoiceItem);
        res.status(200).json({ status: 'payment success', invoiceItem });
      }
    }
  );
};

// // Gets all tenants
// router.get('/', (req, res) => {
//   dd.scan(Admins, (err, d) => {
//     if (err) {
//       res.status(200).json({ status: 'error', error: err });
//     } else {
//       res.status(200).json({ status: 'success', data: d });
//     }
//   });
// });

// router.post('/signup', (req, res) => {
//   const user = req.body;
//   const params = {
//     TableName: 'Admins',
//     Item: {
//       Name: user.Name,
//       Email: user.Email,
//       Phone: user.Phone,
//       Password: user.Password,
//       adminId: hashingId,
//     },
//   };

//   dd.put(params, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(200).json({ status: 'error', error: err });
//     } else {

//       console.log(data);
//       res.status(200).json({ status: 'success', data });
//     }
//   });
// });

const addWorkOrder = (req, res) => {
  const { Address, WODesc, Phone } = req.body;
  const params = {
    TableName: 'Work_Orders',
    Item: {
      workorderId: hashingId(),
      Address,
      WODesc,
      Phone,
    },
  };

  dd.put(params, (err, data) => {
    if (err) {
      res.status(500).json({ status: 'add WorkOrder Error' });
      console.log(err);
    } else {
      console.log('work order created');
      res.status(200).json({ status: 'work order created', data });
    }
  });
};

module.exports = {
  getTenantSettings,
  addWorkOrder,
  getTenantCustomer,
  makePayment,
  // updateSettings,
};
