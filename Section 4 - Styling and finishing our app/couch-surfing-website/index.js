"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var enums_1 = require("./enums");
var propertyContainer = document.querySelector('.properties');
var reviewContainer = document.querySelector('.reviews');
var container = document.querySelector('.container');
var button = document.querySelector('button');
var footer = document.querySelector('.footer');
var isLoggedIn;
// Reviews
// Option 1: Using Any
// const reviews: (
//     {
//         name: string;
//         stars: number;
//         loyaltyUser: Loyalties;
//         date: string;
//     } |
//     {
//         name: string;
//         stars: number;
//         loyaltyUser: Loyalties;
//         date: string;
//         description: string;
//     }
// )[] = [
//         {
//             name: 'Sheia',
//             stars: 5,
//             loyaltyUser: Loyalties.GOLD_USER,
//             date: '01-04-2021'
//         },
//         {
//             name: 'Andrzej',
//             stars: 3,
//             loyaltyUser: Loyalties.SILVER_USER,
//             date: '28-03-2021'
//         },
//         {
//             name: 'Omar',
//             stars: 4,
//             loyaltyUser: Loyalties.BRONZE_USER,
//             date: '27-03-2021',
//             description: 'Great hosts, location was a bit further than said'
//         },
//     ]
// Option 2: Using Any
// const reviews: any[] = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: Loyalties.GOLD_USER,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 3,
//         loyaltyUser: Loyalties.BRONZE_USER,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: Loyalties.SILVER_USER,
//         date: '27-03-2021',
//         description: 'Great hosts, location was a bit further than said',
//     },
// ]
// Option 3: Using fixed types for object and Interface
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: enums_1.Loyalties.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.Loyalties.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.Loyalties.SILVER_USER,
        date: '27-03-2021'
    },
];
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
var properties = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
// Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement('img');
    image_1.setAttribute('src', properties[i].image);
    card.appendChild(image_1);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer === null || propertyContainer === void 0 ? void 0 : propertyContainer.appendChild(card);
}
//Add the reviews
var count = 0;
function addReviews(reviews) {
    if (!count) {
        count++;
        var topTwo = (0, utils_1.getTopTwoReviews)(reviews);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', function () { return addReviews(reviews); });
// use your location, your current time, and the current temperature of your location
var currentLocation = ['London', '11:35', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
// MainProperty Class
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return MainProperty;
}());
var yourMainProperty = new MainProperty('images/italian-property.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: enums_1.Loyalties.GOLD_USER,
        date: '12-04-2021'
    }]);
var mainImageContainer = document.querySelector('.main-image');
var image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
