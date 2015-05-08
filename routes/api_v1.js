'use strict';

var express   = require('express');
var router    = express.Router();
//var dbManager = require('../lib/dbManager');
var productManager = require('../lib/productManager');
//var categoryManager = require('../lib/categoryManager');

/* GET index. */
router.get('/', function (req, res) {
  // todo: implement hypermedia table of content (?)
});

/* GET product by id. */
router.get('/product/:id', function (req, res) {
  const productID = req.params.id;

  if (productID !== null && productID !== undefined) {
    productManager.getProductByID(productID, { cb: function (err, result) { // todo: move this function out
      if (err === null) {
        res.json(result);
      }
      else {
        res.json({message: err}); // todo: specify standard error object
      }
    }});
  }
  else {
    res.json({message: "product id isn't specified"}); // todo: specify standard error object
  }
});

module.exports = router;
