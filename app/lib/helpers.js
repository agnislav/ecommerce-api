/**
 * Created by Agnislav Onufrijchuk on 25.05.2015.
 */
var path = require('path');
module.exports = function() {
  /**
   * Require a module using a path relative to /app/
   * @param name
   * @returns {*}
   */
  global.appRequire = function(name) {
    return require(path.join(__dirname, '..',  name));
  };
}();