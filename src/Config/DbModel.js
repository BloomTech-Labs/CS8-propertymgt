const LSDB = {
  // lsdbId: '', // primary key
  Admin: '', // adminId
  Property: '', // propertyId
  Tenants: [], // [tenantId, tenantId]
};

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
  Admin: '',
};

const Tenant = {
  T: [
    {
      // tenantId: '', // primary key
      propertyId: '',
      NameT: '',
      MobileT: '',
      EmailT: '',
      HouseApplicationT: '',
      GetEmailT: false, // boolean
      GetTextsT: false, // boolean
      DueDate: '',
      StartEndDataT: '',
      AssignedPropertyT: '',
      SendContractT: false, // boolean
      Balance: '',
      Alerts: '',
      WOrder: [],
    },
    {
      // tenantId: '',
      propertyId: '',
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
  ],
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
