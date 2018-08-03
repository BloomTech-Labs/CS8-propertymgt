const express = require('express');

const router = express.Router();

// import the route modules
const { getCustomer } = require('./BillingRouter');

router.get('/get/:id', getCustomer); // Get CC and Rent history

module.exports = router;
