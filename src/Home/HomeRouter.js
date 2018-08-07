const express = require('express');

const router = express.Router();
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/lspmgt_frontend/build', 'index.html'));
});

module.exports = router;
