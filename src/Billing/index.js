const express = require('express');

const router = express.Router();

// import the route modules
const { getCustomer, getTenant } = require('./BillingRouter');

router.get('/get/:id', getTenant); // Get CC and Rent history

module.exports = router;
