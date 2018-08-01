const express = require('express');
const router = express.Router();

// import route modules
const { addTenant, propertyId, workorder } = require('./adminRouter');

router.get('/property/:id', propertyId);
router.get('/workorder', workorder);
router.post('/tenant/add', addTenant);


module.exports = router;