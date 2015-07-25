(function() {

    var app = angular.module('store-products', []);
    
    app.directive("productPanels", function() {
       return {
           restrict: "E",
           templateUrl: "product-panels.html",
           controller: function() {
               this.tab = 1;

               this.selectTab = function(setTab) {
                   this.tab = setTab;
               };

               this.isSelected = function(checkTab){
                   return checkTab === this.tab;
               };
           },
           controllerAs: "panel"
        };
    });

})();
