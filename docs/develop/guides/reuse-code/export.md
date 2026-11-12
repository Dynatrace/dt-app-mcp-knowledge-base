## Export

To use code from another module, first you need to export the code from the original module using the `export` statement. In the example below, you have a module named `moduleA` with some exported members:

```ts title="moduleA.ts" testable
export const fruits = ['apple', 'orange', 'banana', 'pineapple', 'blueberry'];
export function login() {
  // Placeholder function for demonstration purposes
}
export const player = {
  id: 1,
  name: 'John Doe',
  age: 22,
};

// Animal class isn't be available outside
class Animal {}
```

Alternatively, you can export everything in a single statement at the end of the file:

```ts skip-testing
export { fruits, login, player };
```

### Export with alias

If you would like to rename a member while exporting it. You can do so using the `as` keyword:

```ts skip-testing
export { fruits, login, player as tennisPlayer };
```
