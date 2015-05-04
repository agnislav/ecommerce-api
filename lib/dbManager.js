/**
 * Created by Agnislav Onufrijchuk on 05.05.2015.
 */
"use strict";

var mongo     = require('mongoskin'),
    db        = mongo.db("mongodb://localhost:27017/ecommerce", {native_parser: true}),
    dbManager = {};

dbManager.getProductByID = function (productID, cb) {
  db.collection('products').findOne({id: productID}, cb);
};

dbManager.flushDB = function (cb) {
  var colProducts = require('../db/products.json');
  db.dropDatabase().collection('products').insert(colProducts, cb);
};

module.exports = dbManager;