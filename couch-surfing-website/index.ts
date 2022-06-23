import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils'
import { Permissions, Loyalties } from './enums'
import { Price, Country } from './types'
import { Review, Property } from './interfaces'

const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')!
const container = document.querySelector('.container')!
const button = document.querySelector('button')!
const footer = document.querySelector('.footer')!

let isLoggedIn: boolean

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
const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: Loyalties.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: Loyalties.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: Loyalties.SILVER_USER,
        date: '27-03-2021',
    },
]

const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
const properties: Property[] = [
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
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer?.appendChild(card)
}

//Add the reviews
let count = 0
function addReviews(reviews: Review[]): void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(reviews)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button)
    }
}

button.addEventListener('click', () => addReviews(reviews))

// use your location, your current time, and the current temperature of your location
let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'