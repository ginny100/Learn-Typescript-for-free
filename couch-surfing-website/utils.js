"use strict";
exports.__esModule = true;
exports.makeMultiple = exports.showDetails = exports.populateUser = exports.showReviewTotal = void 0;
var enums_1 = require("./enums");
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = enums_1.Loyalties.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
// Union Types example
// function add(firstValue : (number | string), secondValue: (number | string)) {
//     let result
//     if (typeof firstValue === 'number' && typeof secondValue === 'number') {
//         result = firstValue + secondValue
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'string') {
//         result = firstValue + ' ' + secondValue
//     }
//     if (typeof firstValue === 'number' && typeof secondValue === 'string') {
//         console.log('cannot perform this addition')
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'number') {
//         console.log('cannot perform this addition')
//     }
// }
// const combinedReviews = add(5,1)
// const firstNameLastName = add('Ania', 'Kubow')
function showDetails(value, element, price) {
    if (value) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
exports.showDetails = showDetails;
// Function Types example
// function add(firstValue : number, secondValue : number) : number {
//     return firstValue + secondValue
// }
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
exports.makeMultiple = makeMultiple;
