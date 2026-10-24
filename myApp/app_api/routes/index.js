var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

router.get('/login', ctrlUsers.login);

module.exports = router;