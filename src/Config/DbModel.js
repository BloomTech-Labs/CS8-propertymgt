const T = {
  Tinfo: [],
  Quantity: 0,
};

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
  NameOwner: '',
  EmailOwner: '',
  MobileOwner: '',
  HomeOwnerAddr: '',
  PropertyID: '',
  PropertyAddr: '',
  MaxOccupants: '',
  SqFootage: '',
  Bedrooms: '',
  Bathrooms: '',
  YearBuilt: '',
  Contract: '',
  Tenant: [T],
  AdminInfo: Admin,
};
module.exports = PropertyInfo;
