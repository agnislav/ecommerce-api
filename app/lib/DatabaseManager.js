/**
 * Created by Agnislav Onufrijchuk on 05.05.2015.
 */
"use strict";

var mongo     = require('mongoskin'),
    db        = mongo.db("mongodb://localhost:27017/lightcom", {native_parser: true}),
    dbManager = {};

/**
 * Common stuff
 */

dbManager.getProductByID = function (productID, options) {
  var cb = options && options.cb;
  db.collection('products').findOne({id: productID}, cb);
};

dbManager.getProductsByCategoryID = function (categoryID, options, cb) {
  //
};

dbManager.getCategoryByID = function (categoryID, cb) {
  //
};

dbManager.getCategoriesByParentID = function (parentID, options, cb) {
  //
};


/**
 * DBA stuff
 */

dbManager.flushDB = function (cb) {
  var ef            = function () {},
      colProducts   = require('../../config/db/products.json'),
      colCategories = require('../../config/db/categories.json');

  cb = cb || ef;

  db.dropDatabase();
  db.collection('products').insert(colProducts, ef);
  db.collection('categories').insert(colCategories, cb);
};

module.exports = dbManager;