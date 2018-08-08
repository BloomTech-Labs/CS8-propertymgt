const express = require('express');
const router = express.Router();

// import route modules
const { getWorkOrders } = require('./workOrderRouter');
router.get('/all', getWorkOrders);
module.exports = router;
