/**
 * Created by Agnislav Onufrijchuk on 08.05.2015.
 */

var DatabaseManager = require('./DatabaseManager'),
    productManager = {};

productManager.getProductByID = function (id, options) {
  "use strict";
  var productID = Number(id);

  if (productID) {
    DatabaseManager.getProductByID(productID, options);
  }
};

module.exports = productManager;