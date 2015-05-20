// TODO: rewrite for Jasmine and move close to the module tested

var expect = require('expect.js');
//var test = require('unit.js');

describe('Testing database:', function () {
  "use strict";

  it('is connected to the DB', function(done) {
    var DatabaseManager = require('../lib/DatabaseManager');
    expect(DatabaseManager).not.to.equal(null);
    done();
  });
});