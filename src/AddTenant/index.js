const express = require('express');

const router = express.Router();

// import route modules
const { addTenant, lsdb, getTenant } = require('./addTenantRouter');

router.post('/add', addTenant);
router.post('/lsdb', lsdb);
router.get('/get', getTenant);

module.exports = router;
