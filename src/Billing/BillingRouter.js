const express = require('express');

const router = express.Router();
const dd = require('../Config/AwsConfig');
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

// ****************************************************
// STRIPE CUSTOMER CREATE INTEGRATED WITH ADMIN SIGN UP
// ****************************************************
router.post('/new_admin', (req, res) => {
  // console.log(req.body);
  const { Name, Email, Phone } = req.body;
  const token = req.body.stripeToken.token;
  // console.log(token);
  const params = {
    TableName: 'Admins',
    Item: {
      Name,
      Email,
      Phone,
      adminId: hashingId,
    },
  };

  dd.put(params, (err, data) => {
    // console.log(params);
    if (err) res.status(300).json({ status: 'db error', err });
    // res.status(200).json({ status: 'db success', data });
    else {
      // console.log(data);
      stripe.customers.create(
        {
          description: params.Item.adminId,
          email: params.Item.Email,
          source: token.id,
        },
        (stripeErr, customer) => {
          // console.log(customer);
          if (stripeErr) {
            // console.log(stripeErr);
            res.status(400).json({ status: 'error', stripeErr });
          } else {
            stripe.charges.create(
              {
                amount: 25000000,
                description: 'App Purchase',
                currency: 'usd',
                customer: customer.id,
              },
              (chargeErr, charge) => {
                if (chargeErr) res.status(500).json({ status: 'error', chargeErr });
                else {
                  console.log('charge complete', charge);
                  res.status(200).json({ status: 'Charge Complete', charge });
                }
              }
            );
          }
        }
      );
    }
  });
});

// ****************************************************
// STRIPE CUSTOMER CREATE INTEGRATED WITH ADMIN SIGN UP
// ****************************************************
router.post('/buy_now', (req, res) => {
  const { number, expMonth, expYear, cvc } = req.body;
  stripe.tokens.create({
    card: {
      number,
      exp_month: expMonth,
      exp_year: expYear,
      cvc,
    },
  });
});

// router.post('/admin_billing', (req, res) => {

// });

// example stripe customer creation alongside new admin creation
// router.post('/charge/newadmin', (req, res) => {
//   // Admin "BuyNow" Links to this route
//   const amount = 2500; // Price set for App Purchase
//   const { AdminName, AdminEmail, AdminPhone } = req.body;
//   // Create AdminId here so we can pass it to admin object
//   // as well as the stripe customer object as "default_source": adminId
//   const AdminId = hashingId;
//   const params = {
//     TableName: 'Admins',
//     Item: {
//       AdminName,
//       AdminEmail,
//       AdminPhone,
//       AdminId,
//     },
//   };

//   db.put(params, (err, data) => {
//     if (err) res.status(500).json({ status: 'error', err });
//     res.status(200).json({ status: 'success', data });
//   }).then((Admin) => {
//     stripe.customers.create(
//       {
//         // This customers.create function will return a promise
//         description: 'New Admin App Purchase',
//         email: Admin.AdminEmail,
//         // "default_source" null by default, need to add manually
//         default_source: Admin.AdminId,
//       },
//       (err, customer) => {
//         if (err) res.status(500).json({ status: 'error', err });
//         res.status(200).json({ status: 'success', customer });
//       }
//     );
//   });
// });

//   // Stripe First Method
//   stripe.customers.create({
//     // This customers.create function will return a promise
//     description: 'New Admin App Purchase',
//     email: AdminEmail,
//     // "default_source" null by default, need to add manually
//     default_source: AdminId,
//   });
//   db.put(params, (err, data) => {
//     if (err) res.status(500).json({ status: 'error', err });
//     res.status(200).json({ status: 'success', data });
//   });
// });

// DB First Method
// db.put(params, (err, data) => {
//   if (err) res.status(500).json({ status: 'error', err });
//   res.status(200).json({ status: 'success', data });
// }).then((Admin) => {
//   stripe.customers.create(
//     {
//       // This customers.create function will return a promise
//       description: 'New Admin App Purchase',
//       email: Admin.AdminEmail,
//       // "default_source" null by default, need to add manually
//       default_source: Admin.AdminId,
//     },
//     (err, customer) => {
//       if (err) res.status(500).json({ status: 'error', err });
//       res.status(200).json({ status: 'success', customer });
//     }
//   );
// });
// stripe.customers.create(
//   {
//     // This customers.create function will return a promise
//     description: 'New Admin App Purchase',
//     email: AdminEmail,
//     // "default_source" null by default, need to add manually
//     default_source: AdminId,
//   },
//   (err, customer) => {
//     if (err) res.status(500).json({ status: 'error', err });
//     res.status(200).json({ status: 'success', customer });
//   }
// );
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
// });

module.exports = router;
