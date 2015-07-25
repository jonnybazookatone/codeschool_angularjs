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
        ],
        reviews: [
            {
                stars: 5,
                body: "My opinion!",
                author: "joe@thomas.com"
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
        ],
        reviews: [
            {
                stars: 5,
                body: "My opinion!",
                author: "joe@thomas.com"
            }
        ]
    }
];

app.controller("PanelController", function () {
    this.tab = 1;

    console.log(this.tab);
    this.selectTab = function(setTab) {
        console.log('set Tab ' + setTab);
        this.tab = setTab;
    };

    this.isSelected = function(checkTab){
        console.log(checkTab == this.tab);
        return checkTab === this.tab;
    };
});

app.controller("ReviewController", function () {
    this.review = {};

    this.addReview = function(product) {
       product.reviews.push(this.review);
       this.review = {};
    };
});

})();
