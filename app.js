(function() {
//   |
// This is wrapped in a closure

// Module
//
//        angular library
//           |         name of module
//           |              |   dependencies
//           |              |      |
var app = angular.module('store', []);

// Controller
//             controller name
//                  |        controller function when executed
//                                     |
app.controller('StoreController', function() {
    this.product = gem;
});

// Object of interest
var gem = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . . .',
        canPurchase: false,
        soldOut: false,
    },
    {
        name: 'Pentagonal',
        price: 5.95,
        description: ". . . .",
        canPurchase: true,
        soldOut: false,
    }
];

})();
