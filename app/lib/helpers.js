/**
 * Created by Agnislav Onufrijchuk on 25.05.2015.
 */
"use strict";

module.exports = function() {
  /**
   * Require a module using a path relative to /app/
   * @param name
   * @returns {*}
   */
  global.appRequire = function(name) {
    return require(appPath(name));
  };

  /**
   * Returns a path relative to app directory
   * @param path
   * @returns {string}
   */
  global.appPath = function (path) {
    return require('path').join(__dirname, '..', path);
  }
}();