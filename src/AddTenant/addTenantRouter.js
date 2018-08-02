const dd = require('../Config/AwsConfig');
const hashingId = require('../Common/HashingId');
const hashingId2 = require('../Common/HashingId2');

// Add a new tenant and creates a LS_DB item with property, contract, and tenant info
const addTenant = (req, res) => {
  const {
    T1Name,
    T1Phone,
    T1Email,
    T1NotiP,
    T1NotiE,
    T2Name,
    T2Phone,
    T2Email,
    T2NotiP,
    T2NotiE,
    StartD, // same start date for both tenants
    EndD, // same end date for both tenants
    propertyId,
  } = req.body;

  const T2 = {
    tenantId: hashingId2,
    propertyId,
    NameT: T2Name,
    MobileT: T2Phone,
    EmailT: T2Email,
    GetTextsT: T2NotiP,
    GetEmailT: T2NotiE,
    StartD,
    EndD,
    WOrder: [],
  };

  const params = {
    TableName: 'Tenants',
    Item: {
      tenantId: hashingId,
      propertyId,
      NameT: T1Name,
      MobileT: T1Phone,
      EmailT: T1Email,
      GetTextsT: T1NotiP,
      GetEmailT: T1NotiE,
      StartD,
      EndD,
      WOrder: [],
      T2,
      Admin: '123',
    },
  };

  console.log('Hiyoo', params);

  dd.put(params, (error) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ status: 'Success..' });
  });
};

const lsdb = (req, res) => {
  const { propertyId, tenants } = req.body;
  const params = {
    TableName: 'LS_DB',
    Item: {
      Tenants: tenants,
      Property: propertyId,
      Admin: '123',
    },
  };

  dd.put(params, (error, data) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ status: 'Success..', data });
  });
};

const getTenant = (req, res) => {
  const { id } = req.params;
  const params = {
    TableName: 'Tenants',
    Key: {
      propertyId: id,
    },
  };
  dd.get(params, (err, data) => {
    if (err) res.status(404).json({ msg: 'Error', err });
    else res.status(200).json({ msg: 'Success', data });
  });
};

module.exports = { addTenant, lsdb, getTenant };
