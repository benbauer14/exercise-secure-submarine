const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//needed for auth
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

/**
 * GET route template
 */
router.get('/temp',rejectUnauthenticated, (req, res) => { //added rejectUnauthenticated to this line to force auth
  // GET route code here
  console.log(req.user.username) //logs the user name of logged in user
  if(req.user.username === 'ben'){
    res.send('secrets secrets hurt someone') //when logged in on local3000, when visiting local5000/api/temp/temp
  }else{
    res.send('some secrets') // //if username is not ben but exists, they get some secrets. If not logged in they get forbidden.
  }
});

/**
 * POST route template
 */
router.post('/temp',rejectUnauthenticated, (req, res) => {
  // POST route code here
  if(req.user.username === 'ben'){
    res.send('secrets secrets hurt someone')
  }else{
    res.send('some secrets') //
  }
});

module.exports = router;
