var express = require('express');
var router = express.Router();

/* GET users listing. */
let value=0
router.get('/', function(req, res, next) {
  value=value+1
  res.send(`user accesses  are ${value}`);
});

module.exports = router;
