# Classes
- As with other `JavaScript` language features, `TypeScript` adds `type annotations` and other syntax to allow you to express relationships between `classes` and other types.
- Creating a `class` in `TypeScript`
```
class Car {
    make: string
    year: number
    color: string

    constructor(make: string, year: number, color: string) {
        this.make = make
        this.year = year
        this.color = color
    }
}
```