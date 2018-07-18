// this file needs to be broken down into smaller parts
const express = require('express');
const app = express();
const adminRouter = require('./src/Admin/adminRouter');
const tenantRouter = require('./src/Tenant/tenantRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/api/admin', adminRouter);
app.use('/api/tenant', tenantRouter);

// need to change and add process env instead hard coding the port
app.listen(5000, () => {
  console.log('app runnign on port 5000');
});
