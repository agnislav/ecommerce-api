'use strict';

var router = require('express').Router();
var API    = require('json-api');

var models = {
  Product: appRequire('models/product'),
  Category: appRequire('models/category')
};

var adapter    = new API.dbAdapters.Mongoose(models);
var registry   = new API.ResourceTypeRegistry();
var Controller = new API.controllers.API(registry);

['products', 'categories'].forEach(function (resourceType) {
  var description       = require('../resource-descriptions/' + resourceType);
  description.dbAdapter = adapter;
  for (let key in description.urlTemplates) {
    if (description.urlTemplates.hasOwnProperty(key)) {
      description.urlTemplates[key] = 'http://localhost:3000/v1' + description.urlTemplates[key]; // todo: fix this
    }
  }
  //description.urlTemplates.self = '/v1' + description.urlTemplates.self;
  registry.type(resourceType, description);
});

var DocsController = new API.controllers.Documentation(registry, {name: 'LightCom API'});

// Set up our controllers
var APIController  = new API.controllers.API(registry);
var Front          = new API.httpStrategies.Express(APIController, DocsController);
var requestHandler = Front.apiRequest.bind(Front);

router.get("/", Front.docsRequest.bind(Front));

router.get('/:type(products)', requestHandler);
router.get('/:type(products)/:id', requestHandler);
router.get('/:type(products)/:id/:relationship', requestHandler);
router.get('/:type(products)/:id/relationships/:relationship', requestHandler);

router.get('/:type(categories)', requestHandler);
router.get('/:type(categories)/:id', requestHandler);
router.get('/:type(categories)/:id/:relationship', requestHandler);
router.get('/:type(categories)/:id/relationships/:relationship', requestHandler);

/* GET product by id. */
//router.get('/categories/:id', function (req, res) {
//  const id = req.params.id;
//
//  if (id !== null && id !== undefined) {
//    appRequire('models/category').findOne({id: id}, function (err, result) { // todo: move this function out
//      if (err === null) {
//        res.json(result);
//      }
//      else {
//        res.json({message: err}); // todo: specify standard error object
//      }
//    });
//  }
//  else {
//    res.json({message: "product id isn't specified"}); // todo: specify standard error object
//  }
//});

module.exports = router;
