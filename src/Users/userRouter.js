const express = require('express');
const router = express.Router();
const dd = require('../Config/AwsConfig');

router.get('/', (req, res) => {
  res.status(200).json({ status: 'userRouter connected properly' });
});

module.exports = router;
