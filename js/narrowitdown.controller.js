(function() {
  'use strict';
  angular
    .module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
      var narrowIt = this;
      var promise = MenuSearchService.getAllItems();

      promise.then(function(response) {
        narrowIt.items = response.data.menu_items;
      });

      narrowIt.getMatches = function(searchTerm) {
        console.log("searchTerm", searchTerm);
        MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result) {
          console.log("Controller result: ", result);
          narrowIt.found = result;
        })
      }

    }
})();