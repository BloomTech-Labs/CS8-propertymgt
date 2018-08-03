const express = require('express');

const router = express.Router();

// import the route modules
const { getCustomerCC } = require('./BillingRouter');

router.get('/get/:id', getCustomerCC); // Get CC and Rent history

module.exports = router;
