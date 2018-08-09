// this file needs to be broken down into smaller parts
const express = require('express');
const log = require('./src/Common/Show');

const app = express();
const UserRouter = require('./src/Users');
const AdminRouter = require('./src/Admin');
const TenantRouter = require('./src/Tenant');
const PropertyRouter = require('./src/Admin/Properties');
const WorkOrderRouter = require('./src/Admin/WorkOrder');
const AddTenantRouter = require('./src/Admin/AddTenant');
const BillingRouter = require('./src/Admin/Billing');
const SettingsRouter = require('./src/Admin/Settings');
const home = require('./src/Home/HomeRouter');
// var ReactDOMServer = require('react-dom/server');

// const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname, 'src/lspmgt_frontend/build')));
app.use(express.json());
app.use(require('body-parser').text());

app.use(cors());

app.use('/', home);
app.use('/api/admin', AdminRouter);
app.use('/api/tenant', TenantRouter);
app.use('/api/users', UserRouter); // /admin/xxxx /tenant/xxxx
app.use('/api/property', PropertyRouter);
app.use('/api/workorder', WorkOrderRouter);
app.use('/api/addtenant', AddTenantRouter);
app.use('/api/billing', BillingRouter);
app.use('/api/settings', SettingsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  log('app running on port:', port);
});

// api end point example:
// const url = '/api/admin/
// const url = '/api/tenant/
// updatesetting({user: 'admin', endpoint: 'addtenant', payload: {}})
// updatesetting({user: 'tenant', endpoint: 'workorders', payload: {}})

/// api/
//        -> /admin
//              -> /addtenant
//              -> /addproperty
//              -> /deleteproperty
//              -> /updateproperty
//              -> //displayproperties
//              -> /updatesettings
//              -> /billing
//              -> /workorders
//              -> /workorderupdate

////      -> /tenant
//              -> /dashboard
//              -> /updatesettings
//              -> /billing
//              -> /workorders
//              -> /workorderupdate
