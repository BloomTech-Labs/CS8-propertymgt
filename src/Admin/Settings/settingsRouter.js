const dd = require('../../Config/AwsConfig');

// const getAdmin = (req, res) => {
//   const { email } = req.params
//   const params => {
//     TableName: 'Admins',
//     Key: {

//     }
//   }

// }

// TODO: Need to hass in passwords and update them
// Update admin settings
const settingsUpdate = (req, res) => {
  const { Email, Phone, DisplayName, OldPassword, NewPassword } = req.body;

  // Passing in admin id as url params
  const { id } = req.params;
  const params = {
    TableName: 'Admins',
    Key: {
      adminId: id,
    },
    UpdateExpression: 'set #b = :DisplayName, #a = :Email, #c = :Phone',
    ConditionExpression: '#b <> :DisplayName OR #a <> :Email OR #c <> :Phone',
    ExpressionAttributeNames: { '#b': 'Name', '#a': 'Email', '#c': 'Phone' },
    ExpressionAttributeValues: {
      ':DisplayName': DisplayName,
      ':Email': Email,
      ':Phone': Phone,
    },
  };

  dd.update(params, (error, data) => {
    if (error) {
      res.status(400).json({ msg: 'Error', error });
      console.log('Admin settings update error ==>', error);
    } else res.status(200);
  });
};

module.exports = {
  settingsUpdate,
};
