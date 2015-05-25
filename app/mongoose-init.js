/**
 * Created by Agnislav Onufrijchuk on 25.05.2015.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lightcom');
var db = mongoose.connection;

/**
 * Removes all documents from the collection, then imports new ones from a file
 * @todo reimplement it on a higher level to not have a copy of it for each model
 * @param cb
 */
mongoose.Model.flush = function (cb) {
  "use strict";

  var collection = require('../config/db/' + this.collection.name + '.json');

  // todo: reimplement with promises
  this.remove({}, function (err) {
    !err && this.create(collection, cb) || console.log(err);
  }.bind(this));
};