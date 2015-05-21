// TODO: rewrite for Jasmine and move close to the module tested

var expect = require('expect.js');
//var test = require('unit.js');

describe('Testing ProductManager:', function () {
  "use strict";

  beforeEach(function () {
    var DatabaseManager = require('./DatabaseManager');
    DatabaseManager.flushDB(function () {});
  });

  it('gets a product by id', function(done) {
    var productManager = require('./ProductManager');
    productManager.getProductByID(1, {cb: function(err, product) {
      expect(err).to.equal(null);
      expect(product).not.to.equal(null);
      expect(product.id).to.equal(1);
      expect(product.name).to.equal('Product #1');
      done();
    }});
  });
});