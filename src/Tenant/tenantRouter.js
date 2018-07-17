const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({status: 'it works, tenant'})
});




module.exports = router;