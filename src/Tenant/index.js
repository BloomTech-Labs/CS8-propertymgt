const express = require('express');

const router = express.Router();

const { addWorkOrder } = require('./tenantRouter');

router.post('/addWO', addWorkOrder);

module.exports = router;
