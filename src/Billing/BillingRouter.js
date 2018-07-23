const express = require('express');
const router = express.Router();
// const dd = require('../Config/AwsConfig');
// const dbModel = require('../Config/Dbmodel');

const stripeKey = require('./StripeSK');

// second attribute passed is the secret key 
const stripe = require('stripe')(stripeKey.SK);


router.get('/', (req, res) => {
    res.status(200).json({ status: 'billing route connected' });
});

// Stripe Charge Route
router.post('/testcharge', (req, res) => {
    const cost = 2500;
    // Basic Charge -- WORKING
    stripe.charges.create({
        amount: cost,
        currency: 'cad',
        source: 'tok_amex',
        description: 'Hello Stripe World'
    }, function (err, charge) {
        if (err) res.status(200).json({ status: 'error', error: err });
        res.status(200).json({ status: 'charge complete', data: charge });
    })

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
});


// Charge made with Async/Await
// router.post('/testcharge', async (req, res) => {
//     try {
//         let status = await stripe.charges.create({
//             amount: 2000,
//             currency: "usd",
//             description: "an aexample charge",
//             source: req.body
//         });

//         res.json({status});
//     } catch (err) {
//         res.status(500).end();
//     }
// });

module.exports = router;