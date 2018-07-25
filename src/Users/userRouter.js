// Option A is that we can make User it's own model and route

const express = require('express');
const dd = require('../Config/AwsConfig');

const router = express.Router();

// global TableName in params is 'ls_property_mgt'

router.get('/list', (req, res) => {
  const params = {
    TableName: 'Admins',
    // temporary key, does not work yet
    // Key: {
    //   userId: 0,
    // },
  };

  dd.scan(params, (err, d) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    }
    res.status(200).json({ status: 'success', data: d });
  });
  // res.status(200).json({ status: 'userRouter connected properly' });
});

router.post('/signup', (req, res) => {
  console.log(req.body);
  const user = req.body;
  const params = {
    TableName: 'Admins',
    Item: {
      Name: user.Name,
      Email: user.Email,
      Phone: user.Phone,
      Password: user.Password,
      adminId: user.adminId,
    },
  };

  dd.put(params, (err, d) => {
    if (err) {
      console.log(err);
      res.status(200).json({ status: 'error', error: err });
    } else {
      console.log(d);
      res.status(200).json({ status: 'success', data: d });
    }
  });
});

module.exports = router;
