const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

/**
 * GET route template
 */
router.get('/temp',rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log(req.user.username)
  if(req.user.username){
    res.send('secrets secrets hurt someone')
  }else{
    res.sendStatus(503)
  }
});

/**
 * POST route template
 */
router.post('/temp',rejectUnauthenticated, (req, res) => {
  // POST route code here
  if(req.user.username){
    res.send('secrets secrets hurt someone')
  }else{
    res.sendStatus(503)
  }
});

module.exports = router;
