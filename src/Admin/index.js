const express = require('express');
const router = express.Router();

// import route modules
const { propertyId, workorder, getAdminSettings } = require('./adminRouter');

router.get('/property/:id', propertyId);
router.get('/workorder', workorder);
router.get('/getusersettings/:email', getAdminSettings);
// router.post('/tenant/add', addTenant);

module.exports = router;
