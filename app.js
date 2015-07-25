(function() {
//   |
// This is wrapped in a closure

// Module
//
//        angular library
//           |         name of module
//           |              |   dependencies
//           |              |      |
var app = angular.module('store', ["store-products"]);

// Controller
//             controller name
//                  |        controller function when executed
//                                     |
app.controller('StoreController', ['$http', function($http) {

    var store = this;
    store.product = [];
    $http.get('gems.json').success(function(data) {
        console.log(data);
        store.product = data;
    });
}]);

app.controller("PanelController", function () {
});

app.controller("ReviewController", function () {
    this.review = {};

    this.addReview = function(product) {
       product.reviews.push(this.review);
       this.review = {};
    };
});

app.directive("productTitle", function() {
    return {
        restrict: "E",
        templateUrl: "product-title.html"
    }
});

})();
