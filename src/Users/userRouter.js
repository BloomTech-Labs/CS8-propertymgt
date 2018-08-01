
//****************** IMPORTANT ******************//

// THIS FILE IS NOT IN USE ANYMORE, THE CODE HAS BEEN PORTED TO THE NEW FORMAT
// DO NOT ADD OR MODIFY THIS FILE, IT WILL BE DELETED ON FUTURE COMMITS

//****************** IMPORTANT ******************//


// Option A is that we can make User it's own model and route

// const express = require('express');
// const dd = require('../Config/AwsConfig');
// const hashingId = require('../Common/HashingId');

// const router = express.Router();

// global TableName in params is 'ls_property_mgt'


// ported
// router.get('/list', (req, res) => {
//   const params = {
//     TableName: 'Admins',
//     // temporary key, does not work yet
//     // Key: {
//     //   userId: 0,
//     // },
//   };

//   dd.scan(params, (err, d) => {
//     if (err) {
//       res.status(200).json({ status: 'error', error: err });
//     }
//     res.status(200).json({ status: 'success', data: d });
//   });
//   // res.status(200).json({ status: 'userRouter connected properly' });
// });


// ported
// router.post('/admin/signup', (req, res) => {
//   console.log(req.body);
//   const { AdminName, AdminEmail, AdminPW } = req.body;
//   const params = {
//     TableName: 'Admins',
//     Item: {
//       AdminName,
//       AdminEmail,
//       AdminPW,
//       adminId: hashingId,
//     },
//   };

//   dd.put(params, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(200).json({ status: 'error', error: err });
//     } else {
//       console.log(data);
//       res.status(200).json({ status: 'success', data });
//     }
//   });
// });

// ported
// router.get('/listtenants', (req, res) => {
//   const params = {
//     TableName: 'Tenants',
//     // temporary key, does not work yet
//     // Key: {
//     //   userId: 0,
//     // },
//   };

//   dd.scan(params, (err, d) => {
//     if (err) {
//       res.status(200).json({ status: 'error', error: err });
//     }
//     res.status(200).json({ status: 'success', data: d });
//   });
//   // res.status(200).json({ status: 'userRouter connected properly' });
// });

// ported
// router.post('/tenant/signup', (req, res) => {
//   console.log(req.body);
//   const { Name, Email, Phone, Password } = req.body;
//   const params = {
//     TableName: 'Tenants',
//     Item: {
//       Name,
//       Email,
//       Phone,
//       Password,
//       tenantId: hashingId,
//     },
//   };

//   dd.put(params, (err, d) => {
//     if (err) {
//       console.log(err);
//       res.status(200).json({ status: 'error', error: err });
//     } else {
//       console.log(d);
//       res.status(200).json({ status: 'success', data: d });
//     }
//   });
// });

// module.exports = router;
