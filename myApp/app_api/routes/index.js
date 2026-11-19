var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');
var ctrlSongs = require('../controllers/songs');


router.get('/songsList', ctrlSongs.songsList);
router.post('/login',ctrlUsers.login);

module.exports = router;