// this file needs to be broken down into smaller parts
const express = require('express');
const log = require('./src/Common/Show');
const app = express();
// const userRouter = require('./src/Users/userRouter');
const adminRouter = require('./src/Admin/adminRouter');
const tenantRouter = require('./src/Tenant/tenantRouter');
const billingRouter = require('./src/Billing/BillingRouter');
// const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(require('body-parser').text());

// app.use(bodyParser.json());

app.use(cors());
// app.use('/users', userRouter);
app.use('/billing', billingRouter);
app.use('/api/admin', adminRouter);
app.use('/api/tenant', tenantRouter);

// need to change and add process env instead hard coding the port
app.listen(5000, () => {
  log('app running on port:', 5000);
});
