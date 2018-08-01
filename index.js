// this file needs to be broken down into smaller parts
const express = require('express');
const log = require('./src/Common/Show');

const app = express();
const UserRouter = require('./src/Users');
const AdminRouter = require('./src/Admin');
const PropertyRouter = require('./src/Properties');
const TenantRouter = require('./src/Tenant/tenantRouter');
const billingRouter = require('./src/Billing/BillingRouter');
const home = require('./src/Home/HomeRouter');
// var ReactDOMServer = require('react-dom/server');

// const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

app.use(express.static(path.join(__dirname, 'src/lspmgt_frontend/build')));
app.use(express.json());
app.use(require('body-parser').text());

app.use(cors());
app.use('/', home);

app.use('/api/admin', AdminRouter);
app.use('/api/tenant', TenantRouter);
app.use('/api/users', UserRouter);
app.use('/api/property', PropertyRouter);
app.use('/billing', billingRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log('app running on port:', port);
});
