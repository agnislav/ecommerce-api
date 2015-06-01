'use strict';

var router = require('express').Router();
var fs     = require('fs');
var async  = require('async');
//var Product  = appRequire('models/product');
//var Category = appRequire('models/category');

/* GET index. */
router.get('/', function (req, res) {
  res.json({});
});

/* GET product by id. */
router.get('/db/flush', function (req, res) {
  fs.readdir(appPath('models'), function (err, schemas) {
    // todo: add error handling
    schemas && async.each(
        schemas,
        function (schema, cb) {
          appRequire('models/' + schema).flush(cb);
        },
        function (err) {
          res.json(err ? err : {message: 'db flushed'});
        });
  });
});

module.exports = router;
