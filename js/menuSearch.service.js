(function() {
  'use strict';
  angular
    .module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
      var service = this;

      service.getAllItems = function() {
        var response = $http({
          method: 'GET',
          url: ApiBasePath + '/menu_items.json'
        });

        return response;
      };

      service.getMatchedMenuItems = function(searchTerm) {
        // Your code here
      };
    }
})();