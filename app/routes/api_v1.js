'use strict';

var express  = require('express');
var router   = express.Router();
var Product  = appRequire('models/product');
var Category = appRequire('models/category');

/* GET index. */
router.get('/', function (req, res) {
  // todo: implement hypermedia table of content (?)
});

/* GET product by id. */
router.get('/products/:id', function (req, res) {
  const id = req.params.id;

  if (id !== null && id !== undefined) {
    Product.findOne({id: id}, function (err, result) { // todo: move this function out
      if (err === null) {
        res.json(result);
      }
      else {
        res.json({message: err}); // todo: specify standard error object
      }
    });
  }
  else {
    res.json({message: "product id isn't specified"}); // todo: specify standard error object
  }
});

/* GET product by id. */
router.get('/categories/:id', function (req, res) {
  const id = req.params.id;

  if (id !== null && id !== undefined) {
    Category.findOne({id: id}, function (err, result) { // todo: move this function out
      if (err === null) {
        res.json(result);
      }
      else {
        res.json({message: err}); // todo: specify standard error object
      }
    });
  }
  else {
    res.json({message: "product id isn't specified"}); // todo: specify standard error object
  }
});

module.exports = router;
