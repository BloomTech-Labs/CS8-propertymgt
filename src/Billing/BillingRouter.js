const db = require('../Config/AwsConfig');
// NEW THINGS
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// Get tenant with property Id
const getCustomerCC = (req, res) => {
  const { id } = req.params;
};
// Search DynamoDB for Tenant w/ matching property ID
// if Match {
//   Get Stripe ID from that Tenant
//   Use Stripe ID to get customer card info
//   Return Card Info

// Returns credit card info
const getTenant = (req, res) => {
  // const Id = req.params;
  console.log(req.params);
  const params = {
    TableName: 'Tenants',
    Key: {
      tenantId: req.params.id,
    },
  };

  db.get(params, (dbErr, data) => {
    if (dbErr || !data.Item.stripeId) {
      console.log('Data is here --> ', dbErr);
      res.status(400).json({ status: 'db Error', dbErr });
    } else {
      console.log('db get success, tenant stripe ID ==>', data.Item.stripeId);
      // res.status(200).json({ data });
      stripe.customers.retrieve(data.Item.stripeId, (getCustErr, customer) => {
        if (getCustErr) {
          console.log(getCustErr);
          res.status(500).json({ status: 'stripe get customer error' });
        } else {
          // const cardData = customer.sources.data;
          console.log('get customer success', customer.sources.data);
          // res.status(200).json({ customer });
          stripe.charges.list(
            {
              customer: customer.id,
            },
            (getChargeErr, charges) => {
              if (getChargeErr) {
                console.log('get charge error ==>', getChargeErr);
                res.status(500).json({ status: 'charge error' });
              } else {
                console.log('get charges success', charges);
                res.status(200).json({ customer, charges });
              }
            }
          );
        }
      });
    }
    // stripe.customers.retrieve(data.Item.stripeId, (stripeErr, customer) => {
    //   if (stripeErr) res.status(500).json({ status: 'stripe Error', stripeErr });
    //   else res.status(200).json({ customer });
    // });
  });
};

module.exports = { getCustomerCC, getTenant };
