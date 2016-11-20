(function() {
  'use strict';
  angular
    .module('NarrowItDownApp')
    .directive('foundItems', foundItemsDirective)

    function foundItemsDirective() {
      var ddo = {
        restrict: 'E',
        templateUrl: '../loader/found-items-template.html',
        replace: true,
        scope: {
          foundItems: '<',
          onRemove: '&'
        },
        controller: 'NarrowItDownController',
        controllerAs: 'narrowItCtrl',
        // bindToController: true,
        link: function(scope, elem, attrs) {
          console.log("scope: ", scope);
        }
      };
      return ddo;
    }
})();