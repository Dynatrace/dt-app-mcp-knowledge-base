## Background

JavaScript is a "weakly typed" or "untyped" language. In other words, a programmer doesn't specify the type of data. The language infers the type based on the data provided.

Take a look at the following code:

```ts skip-testing
list.reverse();
```

The earlier code accesses the `reverse` property on `list` and calls it. As a developer, you may wonder:

- Is the `reverse` property callable?
- Does `reverse` take any argument? If so, what type of arguments?
- What does `reverse` return?

All these questions can be answered depending on what the `list` is. Think of `list` as an array that's defined as follows:

```ts skip-testing
let list = [10, 20, 30];
```

`reverse` returns a reversed array. However, if the `list` is a string, the earlier code will result in an error. Unfortunately, you don't know this **while writing your code**. This is where TypeScript comes in.

### Type inference

One of the features of TypeScript is type inference. This means TypeScript can figure out the type of data while you write code without any extra syntax. Take a look at the following code:

```ts skip-testing
let list = '["Item1", "Item2", "Item3"]';

list.reverse(); // won't work
```

In the above code, the variable `list` is a string even though it looks very similar to an array. When you try to access the `reverse` property, TypeScript gives you the following error:
`Property 'reverse' doesn't exist on type 'string'.`

### Explicit types

Imagine that you have an `add` method that adds two numbers as follows:

```ts skip-testing
function add(num1, num2) {
  return num1 + num2;
}

add('2', '3'); // result: 23
```

Since JavaScript is untyped, you can call this method with two strings as arguments. However, this might not be your intention. You can fix this issue using TypeScript. Take a look at the following example:

```ts skip-testing
function add(num1: number, num2: number) {
  return num1 + num2;
}

add('2', '3'); // TypeScript Error
```

TypeScript throws an error when you call the `add` method and displays the message, `Argument of type 'string' is not assignable to parameter of type 'number'`.

### Autocompletion

One of the other features of TypeScript is autocompletion. With TypeScript, you can define the shapes of `Objects`.

Imagine that you have an object with two properties: `longitude` and `latitude`. You can create an interface to define this as shown:

```ts skip-testing
interface GeoLocation {
  longitude: number;
  latitude: number;
}

let gpsLocation: GeoLocation = {
  longitude: 16.373819,
  latitude: 48.208176,
};
```

TypeScript gives you auto-completion because it knows the structure:

![TypScript autocompletion](https://developer.dynatrace.com/assets/images/typescript-e99b03101d8016419aa5dec7af52379d.png)
