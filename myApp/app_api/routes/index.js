var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');
var ctrlSongs = require('../controllers/songs');


router.get('/songsList', ctrlSongs.songsList);
router.post('/login',ctrlUsers.login);
router.post('/register',ctrlUsers.register);


module.exports = router;