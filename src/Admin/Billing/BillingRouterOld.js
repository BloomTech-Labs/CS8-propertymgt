// const express = require('express');

// const router = express.Router();
// // const dd = require('../Config/AwsConfig');
// // const dbModel = require('../Config/Dbmodel');
// // const stripeKey = require('./StripeSK.js');

// const stripe = require('stripe')('sk_test_XXyw7Z0m5dkO9UBZ1EJ8Tc6h');

// // second attribute passed is the secret key
// // const stripe = require('stripe')(stripeKey.SK);

// router.get('/', (req, res) => {
//   stripe.balance.listTransactions({ limit: 10 }, (err, transactions) => {
//     if (err) res.status(500).json({ status: 'error', error: err });
//     res.status(200).json({ status: 'display transaction history', data: transactions });
//   });
// });

router.get('/customerCC', (req, res) => {
  const { custId } = req.body;
  console.log(req.body);
  stripe.customers.retrieve('cus_DL9gteAYfiS3mS', (custErr, customer) => {
    if (custErr) res.status(500).json({ status: 'customer retrieval error', custErr });
    else {
      res.status(200).json({ status: 'successful retrievial', data: customer.sources.data });
    }
  });
});

// // ROUTE FOR ADMIN => BILLING => DISPLAY SAVED CARD INFO
// router.get('/info', (req, res) => {});

// // ROUTE FOR ADMIN => BILLING => DISPLAY RENT HISTORY
// router.get('/history', (req, res) => {});

// // // Stripe Charge Route WORKING
// router.post('/testcharge', (req, res) => {
//   const cost = 2500;
//   const { amount, currency, source, description } = req.body;
//   // Basic Charge -- WORKING
//   stripe.charges.create(
//     {
//       amount,
//       currency,
//       source,
//       description,
//     },
//     (err, charge) => {
//       if (err) res.status(200).json({ status: 'error', error: err });
//       res.status(200).json({ status: 'charge complete', data: charge });
//     }
//   );
// });

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

//   stripe.customers.retrieve(id, (customerError, customer) => {});
// };
