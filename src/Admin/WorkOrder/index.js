const express = require('express');

const router = express.Router();

// import route modules
const { getWorkOrders, deleteWorkOrder } = require('./workOrderRouter');

router.get('/all', getWorkOrders);
router.delete('/delete/:id', deleteWorkOrder);

module.exports = router;
