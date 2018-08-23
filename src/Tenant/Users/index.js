const express = require('express');
const router = express.Router();

// import route modules
const { signup, signin, list, listTenants, tenantSignup } = require('./userAuth');

//user Auth
router.get('/signup', signup);
router.get('/signin', signin);
router.get('/admin/list', list);
router.get('/tenant/list', listTenants);
// router.get('/tenant/signup', tenantSignup);

module.exports = router;
