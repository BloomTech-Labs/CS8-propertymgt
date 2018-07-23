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
router.post('/charge', (req, res) => {
    const cost = 2500;
    stripe.charges.create({
        amount: cost,
        currency: 'cad',
        source: 'tok_amex',
        description: 'Hello Stripe World'
    }, function (err, charge) {
        if (err) res.status(200).json({ status: 'error', error: err });
        res.status(200).json({ status: 'charge complete', data: charge });
    })
})

module.exports = router;