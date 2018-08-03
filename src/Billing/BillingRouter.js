// NEW THINGS
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// Get tenant with property Id
const getCustomer = (req, res) => {
  const { id } = req.params;
};

module.exports = { getCustomer };
