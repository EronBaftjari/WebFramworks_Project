const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');


/* Locations pages */
router.get('/login', ctrlLocations.login);
router.get('/register', ctrlLocations.register);
router.get('/information', ctrlLocations.information);

router.get('/', function (req, res) { res.redirect('/login'); });
module.exports = router;
