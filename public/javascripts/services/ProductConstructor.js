/**
 * Created by Agnislav Onufrijchuk on 19.05.2015.
 */
'use strict';

angular.module('lightcom').factory('productConstructor', [ProductConstructor]);

function ProductConstructor () {
  /**
   * List of properties that can be used as is
   * @name properties
   * @type {string[]}
   * @private
   */
  /**
   * List of properties which require getters/setters to be created
   * @name gsetters
   * @type {string[]}
   * @private
   */
  var properties = ['id', 'name', 'description'],
      gsetters   = ['price'];

  /**
   * Creates a product object based on a JSON object
   * @param {Object} productJSON
   * @constructor
   */
  var Product = function (productJSON) {
    /**
     * Storage for raw data for getters/setters
     * @name _raw
     * @type {Object}
     * @private
     */
    this._raw = {};

    // Fill simple properties from the json
    for (let i = 0; i < properties.length; i++) {
      let prop = properties[i];
      Object.defineProperty(this, prop, {
        value: productJSON[prop],
        writable: false,
        configurable: false
      })
    }

    // Save data for getters/setters
    for (let i = 0; i < gsetters.length; i++) {
      let prop        = gsetters[i];
      this._raw[prop] = productJSON[prop];
    }
  };

  Product.prototype.constructor = Product;

  /**
   * Returns a formatted price
   * @name price
   * @type {string}
   */
  Object.defineProperty(Product.prototype, 'price', {
    get: function () {
      return this._raw.price.format.replace('[[value]]', this._raw.price.value);
    },
    set: function () {
    } // todo: throw an error
  });

  return Product;
}