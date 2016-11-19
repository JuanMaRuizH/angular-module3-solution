(function() {
  'use strict';
  angular
    .module('NarrowItDownApp')
    .directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
      var ddo = {
        restrict: 'E',
        replace: true,
        scope: {
          foundItems: '<'
        },
        templateUrl: '../loader/found-items-template.html'
      };
      return ddo;
    }
})();