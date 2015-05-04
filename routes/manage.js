'use strict';

var express   = require('express');
var router    = express.Router();
var dbManager = require('../lib/dbManager');

/* GET index. */
router.get('/', function (req, res) {
  res.json({});
});

/* GET product by id. */
router.get('/db/flush', function (req, res) {
  dbManager.flushDB(function (err, result) {
    if (err === null) {
      res.json(result);
    }
  });
});

module.exports = router;
