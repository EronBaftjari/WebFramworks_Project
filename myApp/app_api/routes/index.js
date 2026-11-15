var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');
const ctrlSongs = require('../controllers/songs');

router.get('/login', ctrlUsers.login);
router.get('/songsList', ctrlSongs.songsList);

module.exports = router;