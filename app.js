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
        price: 2,
        description: '. . . .',
        canPurchase: false,
        soldOut: false,
        images: [
            {
                full: "dodecahedron-01-full.png",
                thumbnail: "dodecahedron-01-thumb.jpg"
            },
            {   
                full: "dodecahedron-02-full.jpg",
                thumbnail: "dodecahedron-02-thumb.jpg"
            }
        ]
    },
    {
        name: 'Pentagonal',
        price: 5.95,
        description: ". . . .",
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: "pentagonal-01-full.png",
                thumbnail: "dodecahedron-01-thumb.jpg"
            },
            {   
                full: "dodecahedron-02-full.jpg",
                thumbnail: "dodecahedron-02-thumb.jpg"
            }
        ]

    }
];

})();
