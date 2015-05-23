/**
 * Created by Agnislav Onufrijchuk on 21.05.2015.
 */
var mongoose = require('mongoose');
var db       = mongoose.connection;

var ProductSchema = mongoose.Schema({
  id: {
    type: String,
    index: true
  },
  name: String,
  description: String,
  price: {
    currency: String,
    format: String,
    value: Number
  }
});

var Product = module.exports = mongoose.model('Product', ProductSchema);

//module.exports.createProduct = function (newProduct, cb) {
//  newProduct.save(cb);
//};

/**
 * Removes all documents from the collection, then imports new ones from a file
 * @todo reimplement it on a higher level to not have a copy of it for each model
 * @param cb
 */
module.exports.flush = function (cb) {
  "use strict";

  var collection = require('../../config/db/products.json');

  this.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      this.create(collection, cb);
    }
  }.bind(this));
};