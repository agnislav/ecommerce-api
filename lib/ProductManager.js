/**
 * Created by Agnislav Onufrijchuk on 08.05.2015.
 */

var dbManager = require('./dbManager'),
    productManager = {};

productManager.getProductByID = function (id, options) {
  "use strict";
  var productID = Number(id);

  if (productID) {
    dbManager.getProductByID(productID, options);
  }
};

module.exports = productManager;