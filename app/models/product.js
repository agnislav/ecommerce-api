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
