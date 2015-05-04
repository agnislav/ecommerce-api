'use strict';

var express   = require('express');
var router    = express.Router();
var dbManager = require('../lib/dbManager');

/* GET index. */
router.get('/', function (req, res) {
  // todo: implement hypermedia table of content (?)
});

/* GET product by id. */
router.get('/product/:id', function (req, res) {
  var productID = Number(req.params.id),
      product, err;

  dbManager.getProductByID(productID, function (err, result) {
    if (err === null) {
      res.json(result);
    }
  });
});

module.exports = router;
