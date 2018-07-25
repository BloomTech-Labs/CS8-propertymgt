// Tables in DynamoDB
// LS_DB -> Database possibly contains Admin, Tenant and Property
// Admins -> For Admin data
// Properties -> For Properties
// Tenants -> Tenant info
module.exports = tables = {
  LS_DB: { TableName: 'LS_DB' },
  Admins: { TableName: 'Admins' },
  Properties: { TableName: 'Properties' },
  Tenants: { TableName: 'Tenants' },
};
