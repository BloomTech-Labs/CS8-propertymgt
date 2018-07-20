// Option A is that we can make User it's own model and route

const express = require('express');
const router = express.Router();
const dd = require('../Config/AwsConfig');

// global TableName in params is 'ls_property_mgt'

router.get('/', (req, res) => {
  const params = {
    TableName: 'ls_property_mgt',
    // temporary key, does not work yet
    // Key: {
    //   userId: 0,
    // },
  };

  dd.scan(params, (err, data) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    }
    res.status(200).json({ status: 'success', data: data });
  });
  // res.status(200).json({ status: 'userRouter connected properly' });
});

router.post('/signup', (req, res) => {
  const params = {
    TableName: 'ls_property_mgt',
    Item: {
      Name: req.Name,
      Email: req.Email,
      Phone: req.phoneNumber,
    },
  };

  dd.put(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(200).json({ status: 'error', error: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success', data: data });
    }
  });
});

module.exports = router;
