const dd = require('../../Config/AwsConfig');
const hashingId = require('../../Common/HashingId');

const getWorkOrders = (req, res) => {
  const params = {
    TableName: 'Work_Orders',
  };
  dd.scan(params, (error, data) => {
    if (error) {
      res.status(400).json({ error });
    } else {
      res.status(200).json({ message: 'success', data });
    }
  });
};

module.exports = {
  getWorkOrders,
};
