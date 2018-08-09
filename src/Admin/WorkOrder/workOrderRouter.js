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

const deleteWorkOrder = (req, res) => {
  const { id } = req.params;
  const params = {
    TableName: 'Work_Orders',
    Key: {
      workorderId: id,
    },
  };

  dd.delete(params, (error, data) => {
    if (error) {
      res.status(500).json({ status: 'Workorder Delete Error' });
      console.log(error);
    } else {
      console.log('deleted WO ==>', data);
      res.status(200).json({ status: 'Workorder Deleted', data });
    }
  });
};

module.exports = {
  getWorkOrders,
  deleteWorkOrder,
};
