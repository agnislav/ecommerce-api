// TODO: rewrite for Jasmine and move close to the module tested

var expect = require('expect.js');
//var test = require('unit.js');

describe('Testing CategoryManager:', function () {
  "use strict";

  beforeEach(function () {
    var DatabaseManager = require('../lib/DatabaseManager');
    DatabaseManager.flushDB(function () {});
  });

  it('gets a category by id', function(done) {
    var categoryManager = require('../lib/CategoryManager');

    /*categoryManager.getCategoryByID('laptops', {cb: function(err, category) {
      expect(err).to.equal(null);
      expect(category).not.to.equal(null);
      expect(category.id).to.equal('laptops');
      expect(category.name).to.equal('Laptops');
      done();
    }});*/

    done();
  });
});