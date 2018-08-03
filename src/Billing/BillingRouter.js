const stripe = require('stripe')(process.env.STRIPE_SECRET);

const getCustomer = (req, res) => {
  const { id } = req.params;

  stripe.customers.retrieve(id, (customerError, customer) => {});
};

module.exports = { getCustomer };
