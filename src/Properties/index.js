const express = require('express');
const router = express.Router();

// import route modules
const {
    properties,
    addProperty,
    deleteProperty,
    updateProperty,
    settingsUpdate
} = require('./propertiesRouter');

router.get('/all', properties);
router.post('/add', addProperty);
router.delete('/delete/:id', deleteProperty);
router.patch('/update/:id', updateProperty);
router.patch('/settings/update/:id', settingsUpdate);


module.exports = router;