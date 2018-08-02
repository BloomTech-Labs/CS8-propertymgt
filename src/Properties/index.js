const express = require('express');

const router = express.Router();

// import route modules
const {
  // propertieslsdb,
  lsdb,
  properties,
  addProperty,
  addTenant,
  deleteProperty,
  updateProperty,
} = require('./propertiesRouter');

// router.get('/lsdb', propertieslsdb);
router.get('/all', properties);
router.post('/add', addProperty);
router.post('/addtenant/', addTenant);
router.post('/lsdb', lsdb);
router.delete('/delete/:id', deleteProperty);
router.patch('/update/:id', updateProperty);

module.exports = router;
