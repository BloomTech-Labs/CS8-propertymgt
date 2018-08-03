const crypto = require('crypto');

module.exports = crypto.scryptSync((Date.now() / 2).toString(), 'keyid', 10).toString('hex');
