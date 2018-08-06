const db = require('../Config/AwsConfig');
// NEW THINGS
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// Get tenant with property Id
const getCustomer = (req, res) => {
  const { id } = req.params;
};

// Search DynamoDB for Tenant w/ matching property ID
// if Match {
//   Get Stripe ID from that Tenant
//   Use Stripe ID to get customer card info
//   Return Card Info

const getTenant = (req, res) => {
  const { Id } = req.params;
  console.log(Id);
  const params = {
    TableName: 'Tenants',
    Key: {
      propertyId: Id,
    },
  };

  db.get(params, (dbErr, data) => {
    console.log(data);
    if (dbErr) res.status(400).json({ status: 'db Error', dbErr });
    // else res.status(200).json({ data });
    stripe.customers.retrieve(data.stripeId, (stripeErr, customer) => {
      if (stripeErr) res.status(500).json({ status: 'stripe Error', stripeErr });
      else res.status(200).json({ customer });
    });
  });
};

module.exports = { getCustomer, getTenant };
