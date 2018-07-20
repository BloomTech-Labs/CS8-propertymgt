// Option A is that we can make User it's own model and route

const express = require('express');
const router = express.Router();
const dd = require('../Config/AwsConfig');
const User = require('./userModels');

router.get('/', (req, res) => {
  const params = {
    TableName: 'ls_property_mgt',
    // using a temporary key, does not work yet
    Key: {
      userId: 0,
    },
  };

  dd.get(params, (err, data) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    }
    res.status(200).json({ status: 'success', data: data });
  });
  // res.status(200).json({ status: 'userRouter connected properly' });
});

module.exports = router;
