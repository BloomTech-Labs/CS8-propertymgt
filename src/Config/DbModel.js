// const T = {
//   Tinfo: [],
//   Quantity: 0, // Tinfo.length
// };

const Tinfo = {
  NameT: '',
  MobileT: '',
  EmailT: '',
  HouseApplicationT: '',
  GetEmailT: '',
  GetTextsT: '',
  DueDate: '',
  StartEndDataT: '',
  AssignedPropertyT: '',
  SendContractT: '',
  Balance: '',
  Alerts: '',
  WOrder: [],
};

// sign up fields
const Admin = {
  Name: '',
  Email: '',
  Phone: '',
};

const WOrder = {
  PropertyAddr: '',
  TenantPhone: '',
  Issue: '',
  PhotoIssue: '',
  Permission: '',
  Status: '',
};

const PropertyInfo = {
  propertyId: '',
  NameOwner: '',
  EmailOwner: '',
  MobileOwner: '',
  HomeOwnerAddr: '',
  PropertyAddr: '',
  MaxOccupants: '',
  SqFootage: '',
  Bedrooms: '',
  Bathrooms: '',
  YearBuilt: '',
  Contract: '', // boolean
  Tenants: [], // holds tenantId for each tenant
  Admin: '',
};

module.exports = PropertyInfo;
