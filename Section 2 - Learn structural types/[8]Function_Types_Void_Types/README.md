# Function Types + Void Types
- `TypeScript` has many ways to describe how functions can be called. We can write types that describe functions using the `Function Types` in `TypeScript`
- The `Void Type` is also a `TypeScript` type. A function that does not return anything must have the type of `void`.
- A function whose declared type is neither `void` nor `any` must return a value.
- Some example:
  - This would work
```
export function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalties) : void {
    const iconDisplay = Loyalties.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}
```
  - This would work too
```
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) : undefined {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
    return undefined
}
```
  - However, this would not work
```
export function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalties) : undefined {
    const iconDisplay = Loyalties.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}
```