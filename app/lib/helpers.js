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
   * @param relPath
   * @returns {string}
   */
  global.appPath = function (relPath) {
    return require('path').join(__dirname, '..', relPath);
  }
}();