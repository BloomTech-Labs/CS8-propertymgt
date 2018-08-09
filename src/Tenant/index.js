const express = require('express');
const router = express.Router();

// import route modules
const { getTenantSettings } = require('./tenantRouter');

router.get('/getusersettings/:email', getTenantSettings);
// router.patch('/updatesettings/:id', updateSettings);

module.exports = router;
