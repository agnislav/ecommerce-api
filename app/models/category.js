/**
 * Created by Agnislav Onufrijchuk on 21.05.2015.
 */
var mongoose = require('mongoose');
var db       = mongoose.connection;

var CategorySchema = mongoose.Schema({
  id: {
    type: String,
    index: true
  },
  name: String,
  parentID: String
});

var Category = module.exports = mongoose.model('Category', CategorySchema, 'categories');

/**
 * Removes all documents from the collection, then imports new ones from a file
 * @todo reimplement it on a higher level to not have a copy of it for each model
 * @param cb
 */
module.exports.flush = function (cb) {
  "use strict";

  var collection = require('../../config/db/categories.json');

  this.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      this.create(collection, cb);
    }
  }.bind(this));
};