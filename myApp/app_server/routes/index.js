const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');

const passport = require('passport');

/* Pages */
router.get('/login', ctrlLocations.login); 
   
router.post('/login', passport.authenticate('local', {
  successRedirect: '/information',   // right password - go to information
  failureRedirect: '/login',         // wrong password - back to login
  failureMessage: true               // remember why it failed
})); 

router.get('/register', ctrlLocations.register);     // open the page -> show form
router.post('/register', ctrlLocations.register);
router.get('/information', ctrlLocations.information);
router.get('/', function (req, res) { res.redirect('/login'); });

module.exports = router;