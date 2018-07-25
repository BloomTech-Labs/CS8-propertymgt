// Option A is that we can make User it's own model and route

const express = require('express');
const dd = require('../Config/AwsConfig');
const { Tenants } = require('../Config/DynamoDbTables');
const hashingId = require('../Common/HashingId');

const router = express.Router();

router.get('/', (req, res) => {
  console.log();
  dd.scan(Tenants, (err, d) => {
    if (err) {
      res.status(200).json({ status: 'error', error: err });
    }
    res.status(200).json({ status: 'success', data: d });
  });
  // res.status(200).json({ status: 'userRouter connected properly' });
});

router.post('/signup', (req, res) => {
  const params = {
    TableName: Tenant,
    Item: {
      TenantId: hashingId,
      Name: req.Name,
      Email: req.Email,
      Phone: req.phoneNumber,
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
