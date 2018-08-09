const express = require('express');
const router = express.Router();

// import route modules
const {
  addWorkOrder,
  getTenantSettings,
  getTenantCustomer,
  makePayment,
} = require('./tenantRouter');

router.get('/getusersettings/:email', getTenantSettings);
router.get('/getcustomer/:id', getTenantCustomer);
router.post('/makepayment', makePayment);
// router.patch('/updatesettings/:id', updateSettings);
router.post('/addWO', addWorkOrder);

module.exports = router;
