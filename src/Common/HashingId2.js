const crypto = require('crypto');

module.exports = () => {
  return crypto.scryptSync(Date.now().toString(), 'keyid', 10).toString('hex');
};
