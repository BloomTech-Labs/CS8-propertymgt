// this file needs to be broken down into smaller parts
const express = require('express');
const log = require('./src/Common/Show');

const app = express();
const UserRouter = require('./src/Users/userRouter');
const adminRouter = require('./src/Admin/adminRouter');
const tenantRouter = require('./src/Tenant/tenantRouter');
const billingRouter = require('./src/Billing/BillingRouter');
// var ReactDOMServer = require('react-dom/server');

// const bodyParser = require('body-parser');
const cors = require('cors');
var path    = require("path");

app.use(express.json());
app.use(require('body-parser').text());
// app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'src/lspmgt_frontend/build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/lspmgt_frontend/build', 'index.html'));
});

// app.use(bodyParser.json());

app.use(cors());
// app.use('/users', userRouter);
app.use('/users', UserRouter);
app.use('/billing', billingRouter);
app.use('/api/admin', adminRouter);
app.use('/api/tenant', tenantRouter);
const port = process.env.PORT || 5000;
// need to change and add process env instead hard coding the port
app.listen(port, () => {
  log('app running on port:', port);
});
