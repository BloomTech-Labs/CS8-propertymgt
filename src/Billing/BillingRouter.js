const express = require('express');

const router = express.Router();
// const dd = require('../Config/AwsConfig');
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

router.post('/charge/newadmin', (req, res) => {
  // Admin "BuyNow" Links to this route
  const amount = 2500; // Price set for App Purchase
  const { AdminName, AdminEmail, AdminPW } = this.state;

  stripe.customers
    .create({
      // This customers.create function will return a promise
      AdminName,
      AdminEmail,
      AdminPW,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount,
          description: 'Property Maxx App Purchase',
          currency: 'usd',
          customer: customer.id,
        },
        (err, charge) => {
          if (err) res.status(500).json({ status: 'error', err });
          res.status(200).json({ status: 'Purchase Complete', charge });
        }
      );
    });
});

// charge made with New Customer -- NOT WORKING
// stripe.customers.create({
//     email: req.body.stripeEmail,
//     source: req.body.stripeToken
// }).then(customer => stripe.charges.create({
//     amount,
//     description: 'test',
//     currency: 'usd',
//     customer: customer.id
// }))
// .then(charge => res.status(200).json({ status: 'success', }))
// });

// Charge made with Async/Await
// router.post('/testcharge', async (req, res) => {
//   try {
//     const status = await stripe.charges.create({
//       amount: 2000,
//       currency: 'usd',
//       description: 'an aexample charge',
//       source: req.body,
//     });
//     res.json({ status });
//   } catch (err) {
//     res.status(500).end();
//   }
// });

module.exports = router;
