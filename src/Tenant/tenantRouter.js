// Option A is that we can make User it's own model and route

const express = require('express');
const dd = require('../Config/AwsConfig');
const { Admins } = require('../Config/DynamoDbTables');
const hashingId = require('../Common/HashingId');

const router = express.Router();

router.get('/', (req, res) => {
  dd.scan(Admins, (err, d) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    } else {
      res.status(200).json({ status: 'success', data: d });
    }
  });
  // res.status(200).json({ status: 'userRouter connected properly' });
});

router.post('/signup', (req, res) => {
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

  dd.put(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(200).json({ status: 'error', error: err });
    } else {
      console.log(d);
      res.status(200).json({ status: 'success', data });
    }
  });
});
module.exports = router;
