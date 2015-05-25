'use strict';

var express  = require('express');
var router   = express.Router();
var Product  = appRequire('models/product');
var Category = appRequire('models/category');

/* GET index. */
router.get('/', function (req, res) {
  res.json({});
});

/* GET product by id. */
router.get('/db/flush', function (req, res) {
  // todo: rewrite this with promises and send status when all db changes will be done
  Product.flush(function (err, result) {
    res.json(err === null ? result : err);
  });
  Category.flush(function () {
  });
});

module.exports = router;
