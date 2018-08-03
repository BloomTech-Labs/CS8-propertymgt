// NEW THINGS
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// Get tenant with property Id
const getCustomerCC = (req, res) => {
  const { id } = req.params;
};

module.exports = { getCustomerCC };
