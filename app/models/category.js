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
