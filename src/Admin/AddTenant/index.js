const express = require('express');

const router = express.Router();

// import route modules
const { addTenant, getTenant, lsdb, getStripeCustomer } = require('./addTenantRouter');

router.post('/add', addTenant);
router.post('/lsdb', lsdb);
router.get('/get', getTenant);
router.get('/getcustomer/:id', getStripeCustomer);
module.exports = router;
