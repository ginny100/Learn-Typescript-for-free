# Interfaces
- `Interface` helps us avoid repetition in our code.
  - We can define an `interface` like so
```
interface Review {
    name: string;
    stars: number;
    loyaltyUser: Loyalties;
    date: string;
}
```
  - And then, instead of writing the lengthy code like this
```
const reviews:
    {
        name: string;
        stars: number;
        loyaltyUser: Loyalties;
        date: string;
    }[] = [
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
```
  - We can write
```
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
```
  - And then, wherever we need to use that `interface`, we can do
```
export function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}
```