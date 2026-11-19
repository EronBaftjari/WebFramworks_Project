const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');

/* Pages */
router.get('/login', ctrlLocations.login);     // open the page -> show form
router.post('/login', ctrlLocations.login);    // click Sign In -> send to API
router.get('/register', ctrlLocations.register);
router.get('/information', ctrlLocations.information);
router.get('/', function (req, res) { res.redirect('/login'); });

module.exports = router;