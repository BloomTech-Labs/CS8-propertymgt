const express = require('express');

const router = express.Router();
const db = require('../Config/AwsConfig');
const hashingId = require('../Common/HashingId');
// const dbModel = require('../Config/Dbmodel');
const { Secret } = require('../Config/StripeKey');

const stripe = require('stripe')(Secret); // Deployed Stripe Key link = process.env.STRIPE_SECRET

// second attribute passed is the secret key
// const stripe = require('stripe')(stripeKey.SK);

// for testing
// TO DELETE TEST DATA, MUST DELETE FROM STRIPE DASHBOARD

// GET request to retrieve all TRANSACTIONS in Stripe account
router.get('/transactionlist', (req, res) => {
  stripe.balance.listTransactions({ limit: 10 }, (err, transactions) => {
    if (err) res.status(500).json({ status: 'error', err });
    res.status(200).json({ status: 'display transaction history', transactions });
  });
});

// GET request to retrieve all CUSTOMERS in Stripe account
router.get('/customerlist', (req, res) => {
  stripe.customers.list({ limit: 5 }, (err, customers) => {
    if (err) res.status(500).json({ status: 'error', err });
    res.status(200).json({ status: 'display customer list', customers });
  });
});

// // Stripe Charge Route WORKING
router.post('/testcharge', (req, res) => {
  console.log(req.body);
  const { amount, currency, source, description } = req.body;
  // Basic Charge -- WORKING
  stripe.charges.create(
    {
      amount,
      currency,
      source,
      description,
    },
    (err, charge) => {
      if (err) res.status(200).json({ status: 'error', error: err });
      res.status(200).json({ status: 'charge complete', data: charge });
    }
  );
});

// example stripe customer creation alongside new admin creation
router.post('/charge/newadmin', (req, res) => {
  // Admin "BuyNow" Links to this route
  const amount = 2500; // Price set for App Purchase
  const { AdminName, AdminEmail, AdminPhone } = req.body;
  // Create AdminId here so we can pass it to admin object
  // as well as the stripe customer object as "default_source": adminId
  const AdminId = hashingId;
  const params = {
    TableName: 'Admins',
    Item: {
      AdminName,
      AdminEmail,
      AdminPhone,
      AdminId,
    },
  };

  stripe.customers.create(
    {
      // This customers.create function will return a promise
      description: 'New Admin App Purchase',
      email: AdminEmail,

      // "default_source" null by default, need to add manually
      // default_source: AdminId,
    },
    (err, customer) => {
      if (err) res.status(500).json({ status: 'error', err });
      res.status(200).json({ status: 'success', customer });
    }
  );
  // testing adding charge on customer creation
  // .then((customer) => {
  //   stripe.charges.create(
  //     {
  //       amount,
  //       description: 'Property Maxx App Purchase',
  //       currency: 'usd',
  //       customer: customer.id,
  //     },
  //     (err, charge) => {
  //       if (err) res.status(500).json({ status: 'error', err });
  //       res.status(200).json({ status: 'Purchase Complete', charge });
  //     }
  //   );
  // });
});

module.exports = router;
