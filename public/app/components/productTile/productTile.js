/**
 * Created by Agnislav Onufrijchuk on 19.05.2015.
 */
'use strict';

angular.module('lightcom').directive('productTile', ['productManager', function (productManager) {
  return {
    restrict: 'AE',
    scope: {
      productId: '='
    },
    templateUrl: '/app/components/productTile/productTile.html',
    transclude: true,
    link: function postLink (scope) {
      productManager.getProductByID(scope.productId, function(product) {
        scope.product = product;
      });
    }
  }
}]);