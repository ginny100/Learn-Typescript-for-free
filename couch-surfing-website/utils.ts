import { Loyalties, Permissions } from './enums'
import { Review } from './interfaces'

const reviewTotalDisplay = document.querySelector('#reviews')!
const returningUserDisplay = document.querySelector('#returning-user')!
const userNameDisplay = document.querySelector('#user')!

export function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalties): void {
    const iconDisplay = Loyalties.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

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

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

// Function Types example
// function add(firstValue : number, secondValue : number) : number {
//     return firstValue + secondValue
// }

export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}