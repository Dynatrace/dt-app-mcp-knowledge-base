## Import

After you have exported the members, you can import them into the other modules using the import statement. Use the `import` keyword, followed by the members you want to import in curly brackets, and then the location of the module relative to the current file as shown:

```ts skip-testing
import { fruits, login, player } from './moduleA';
```

### Import with alias

In cases where you have a naming conflict because two module shares an export with the same name. Importing them will create a name collision. To solve this, you can rename the import using the `as` keyword:

```ts skip-testing
import { fruits } from './moduleA';
import { fruits as summerFruits } from './moduleB';
```

### Import all exported members

To import all the exported members, you can do so without individually naming them like this:

```ts skip-testing
import * as MyModule from './moduleA';
```

Then you can access the members using dot notation:

```ts skip-testing
console.log(MyModule.fruits); // ['apple', 'orange', 'banana', 'pineapple', 'blueberry'];
```
