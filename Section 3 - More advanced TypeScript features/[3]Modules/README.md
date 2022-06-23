# Modules
- Basically, `module` refers to anything that we `export` and `import`.
- There're 2 types of `export`'s, the normal one and the default one.
- If a `module` has more than 1 thing to `export`, we just need to use the keyword `export` to export those things. And then, when we `import` them in another file, their names should go inside `{}`.
- If a `module` has only 1 thing to `export`, we use `export default` to export that thing. And then, when we `import` it in another file, its name does NOT go inside `{}`. 
- When importing a `module`, you gotta name the things you `import` from it. 
  - If that `module` has only 1 `default export`, you can call that things `whatever` you want.
  - However, if that `module` has more than 1 `export`s, you'll need to call the exact names of those things as defined inside the `module` so that `TypeScript` knows they exist
- Examples:
  - Default export
```
import  Review  from './interfaces'
```
  - Multiple exports
```
import { Price, Country } from './types'
```