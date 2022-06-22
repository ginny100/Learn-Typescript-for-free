# Object Types
- A simple `object type` in `TypeScript` looks like this
```
object {name: 'Ginny'}
```
- We can define exactly what types make up our object in `TypeScript`. Example:
```
const you: {
    userName: string;
    isReturning: boolean;
    age: number
} = {
    userName: 'Bobby',
    isReturning: true,
    age: 23
}
```