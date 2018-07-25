const crypto = require('crypto');

module.exports = crypto.scryptSync(Date.now().toString(), 'keyid', 10).toString('hex');
