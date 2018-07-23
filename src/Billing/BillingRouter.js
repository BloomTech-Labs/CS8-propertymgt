const express = require('express');
const router = express.Router();
// const dd = require('../Config/AwsConfig');
// const dbModel = require('../Config/Dbmodel');

router.get('/', (req, res) => {
    res.status(200).json({ status: 'billing route connected' });
});

module.exports = router;