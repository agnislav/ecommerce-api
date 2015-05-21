/**
 * Created by Agnislav Onufrijchuk on 19.05.2015.
 */
'use strict';

angular.module('lightcom').factory('productManager', ['$http', 'productConstructor', function ($http, productConstructor) {
  /**
   * A cache for product objects
   * @type {Object}
   */
  var products = {};

  /**
   * Check if a product object exists in the cache
   * @param {string} id
   * @returns {boolean}
   * @private
   */
  var _productExists = function (id) {
    return products[id] && true || false;
  };

  /**
   * Returns a product object from the cache
   * @param {string} id
   * @todo dedicate a Product object
   * @returns {Object}
   * @private
   */
  var _getProduct = function (id) {
    return products[id];
  };

  /**
   * Puts a product object to the cache
   * @param {string} id
   * @todo dedicate a Product object
   * @param {Object} product
   * @private
   */
  var _saveProduct = function (id,  product) {
    return products[id] = product;
  };

  /**
   * Return product by id. Requests product information from the server if needed
   * @param {string} productID
   * @param {Function} cb
   */
  var getProductByID = function (productID, cb) {
    // todo: check for productID value
    if (_productExists(productID)) {
      cb(_getProduct(productID));
    }
    else {
      $http.get('/v1/product/' + productID) // todo: move to rest service
        .success(function(productJSON) {
            // todo: move this to transformResponse?
            // todo: add check
            var product = new productConstructor(productJSON);
            _saveProduct(productID, product);
            cb(_getProduct(productID));
        })

        .error(); // todo:
    }
  };

  return {
    getProductByID: getProductByID
  }
}]);