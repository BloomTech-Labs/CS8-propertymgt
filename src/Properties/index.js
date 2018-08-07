const express = require('express');

const router = express.Router();

// import route modules
const {
  // propertieslsdb,
  // lsdb,
  scanF,
  properties,
  addProperty,
  // addTenant,
  deleteProperty,
  updateProperty,
  getTenant,
  getAllTenants,
} = require('./propertiesRouter');

// router.get('/lsdb', propertieslsdb);
router.get('/all', properties); // Only returns properties
// router.get('/all', scanF); // General query function that returns any item with the same admin id
router.post('/add', addProperty);
// router.post('/addtenant/', addTenant);
// router.post('/lsdb', lsdb);
router.delete('/delete/:id', deleteProperty);
router.patch('/update/:id', updateProperty);
router.get('/tenant/:pid/:test', scanF);
router.get('/alltenants', getAllTenants);

module.exports = router;
