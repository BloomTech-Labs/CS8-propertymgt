const express = require('express');

const router = express.Router();

// import route modules
const { settingsUpdate } = require('./settingsRouter');

router.patch('/update/:id', settingsUpdate);

module.exports = router;
