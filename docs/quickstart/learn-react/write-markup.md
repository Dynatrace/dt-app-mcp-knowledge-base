## Write markup

You've already seen that react components return markup. This markup isn't HTML. It's called JSX, syntactic sugar for JavaScript, to write XML-like declarative code.

Since JSX is just syntactic sugar, it's also optional. The compiler under the hood converts JSX into JavaScript function calls. Following is an example of `MyComponent` with and without JSX:

```tsx skip-testing
// jsx
function MyComponent() {
  return <span>My Fancy Component</span>;
}

// without jsx
function MyComponent() {
  return React.createElement('span', null, 'My Fancy Component');
}
```

The compiler replaces JSX with `React.createElement` function calls in this example. Therefore, you can also assign JSX to a variable, pass it to a function, and return it from a function like a normal JavaScript function. Following are some examples of valid JSX code along with `React.createElement` version:

**JSX**

```tsx skip-testing
// assign jsx to variable
const MyElement = <h1>Hi there!</h1>;
```

**React.createElement**

```tsx skip-testing
const MyElement = React.createElement('h1', null, 'Hi there!');
```

**JSX**

```tsx skip-testing
// return jsx from a function
const doSomething = () => {
  return <span>Do Something</span>;
};
```

**React.createElement**

```tsx skip-testing
const doSomething = () => {
  return React.createElement('span', null, 'Do Something');
};
```

**JSX**

```tsx skip-testing
// jsx as a function argument
const anotherFunction = (jsxValue) => {
  // do something with jsxValue here
};

anotherFunction(<h1>Hello</h1>);
```

**React.createElement**

```tsx skip-testing
const anotherFunction = (jsxValue) => {
  // do something with jsxValue here
};
anotherFunction(React.createElement('h1', null, 'Hello'));
```

> **Note**
>
> React 17 introduced a new JSX transform. With this update, JSX isn't coupled with React imports. Under the hood, compilers can transform your JSX using this new transform.
>
> For example, instead of `React.createElement`, the compiler can use `jsx` method from `react/jsx-runtime`. Look at the `MyComponent` using this new transform:
>
> ```tsx testable
> // Inserted by a compiler (don't import it yourself!)
> import { jsx as _jsx } from 'react/jsx-runtime';
>
> function MyComponent() {
>   return _jsx('span', { children: 'My Fancy Component' });
> }
> ```
>
> As an app developer, nothing changes for you.
>
> To learn more, visit [Introducing the new JSX transform](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform).

### Add expressions in JSX

You can also add [JavaScript expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions) in your JSX code using curly braces. In the following example, you're doing the following:

- create a variable `fullName`
- then wrap it around curly braces in the JSX and assign that to the `greeting` variable
- finally, use the `greeting` variable in the return expression

Take a look at the following code snippet:

```tsx skip-testing
function ExpressionComponent() {
  const fullName = 'Lorem Stark';
  // highlight-start
  const greeting = <h1>Welcome {fullName}</h1>;
  // highlight-end

  return (
    <div>
      // highlight-start
      {greeting}
      // highlight-end
    </div>
  );
}
```

It will render `<h1>Welcome Lorem Stark</h1>` on the page.

### Conditional rendering

You can also conditionally render some JSX. In the following example, the app only renders `<span>Dark Mode</span>` when `darkMode` is `true`:

```tsx skip-testing
function ConditionalRender() {
  // highlight-start
  let darkMode = true; // boolean value
  return (
    <div>{darkMode && <span>Dark Mode</span>}</div>;
  );
  // highlight-end
}
```

You can also use a ternary operator to have `if/else` like rendering. In the following example, if `darkMode` is true the app renders `<span>Dark Mode</span>`, else it renders `<span>Light Mode</span>`.

```tsx skip-testing
function TernaryComponent() {
  // highlight-start
  let darkMode; // boolean value
  return <div>{darkMode ? <span>Dark Mode</span> : <span>Light Mode</span>}</div>;
  // highlight-end
}
```

### Render list

You can also render objects and arrays. In the following example, the app renders the list of people on the page by returning JSX from Array's `map`:

```tsx skip-testing
function AComponentWithMap() {
  // highlight-start
  const people = [
    {
      name: 'Philip Prosacco',
      id: 'abc',
    },
    {
      name: 'Allison Nolan',
      id: 'xyz',
    },
  ];
  // highlight-end

  return (
    <div>
      <h2>List of people</h2>
      <ul>
        // highlight-start
        {people.map((person) => (
          <li key={person.id}>{person.name} </li>
        ))}
        // highlight-end
      </ul>
    </div>
  );
}
```

> **Tip**
>
> React uses the `key` prop to identify each element in an array uniquely. To learn more, read [List and Keys](https://reactjs.org/docs/lists-and-keys.html#keys).

### Things to remember

Here are some things to remember:

- You can mix HTML tags and React components in JSX.
- A React component can only return one root JSX tag. If you have to return many elements from a React component, you can wrap a `div` or `React.Fragment` component around them. Take a look at [Fragment documentation](https://react.dev/reference/react/Fragment).
- You have to close all HTML tags and React components like `<img/>`.

> **Note**
>
> To learn more about JSX, visit [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
