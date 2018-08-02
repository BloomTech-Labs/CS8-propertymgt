const Admin = {
  // adminId: '', // primary key
  Name: '',
  Email: '',
  Phone: '',
};

const PropertyInfo = {
  // propertyId: '', // primary key
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
  Contract: false, // boolean
  Tenants: [], // holds tenantId for each tenant
  Admin: '',
};

const Tenant = {
  // tenantId: '', // primary key
  NameT: '',
  MobileT: '',
  EmailT: '',
  HouseApplicationT: '',
  GetEmailT: false, // boolean
  GetTextsT: false, // boolean
  DueDate: '',
  StartEndDataT: '',
  AssignedPropertyT: '',
  SendContractT: '',
  Balance: '',
  Alerts: '',
  WOrder: [],
  T2: {
    // tenantId: '',
    NameT: '',
    MobileT: '',
    EmailT: '',
    HouseApplicationT: '',
    GetEmailT: false, // boolean
    GetTextsT: false, // boolean
    DueDate: '',
    StartEndDataT: '',
    AssignedPropertyT: '',
    SendContractT: '',
    Balance: '',
    Alerts: '',
    WOrder: [],
  },
  Admin: '',
};

const WOrder = {
  PropertyAddr: '',
  Issue: '',
  PhotoIssue: '', // stores a picture
  Permission: true, // boolean
  Status: 'SUBMITTED',
};

module.exports = PropertyInfo;
