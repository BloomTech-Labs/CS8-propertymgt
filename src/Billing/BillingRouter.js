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

const getTenant = (req, res) => {};

module.exports = { getCustomer };
