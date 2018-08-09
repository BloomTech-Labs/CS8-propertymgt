const express = require('express');
const router = express.Router();

// import route modules
const { addWorkOrder, getTenantSettings } = require('./tenantRouter');

router.get('/getusersettings/:email', getTenantSettings);
// router.patch('/updatesettings/:id', updateSettings);
router.post('/addWO', addWorkOrder);

module.exports = router;
