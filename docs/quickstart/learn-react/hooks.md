## Hooks

A hook is a special function that gives you access to the state and other React features in a React component.

By convention, the hook's name starts with `use`. React provides built-in hooks like `useState`, `useEffect`, and more. You can also create custom hooks to share stateful logic between many components.

### The State hook

To create a local state in a React component, use the `useState` hook from React. Take a look at the following code:

```tsx skip-testing
const [state, setState] = useState(initialState);
```

The `useState` function returns an array with two items:

- The first item is the current value of the state, initially set to the `initialState` provided.
- The second item is a function that lets you update the state.

#### Example

In the following example, you have a `MyDiceApp` component. When a user clicks on the button, it generates a random dice count between one to six and stores it in the `diceValue` state using the `setDiceValue` function, as follows:

```tsx skip-testing
// highlight-start
import { useState } from 'react';
// highlight-end

function MyDiceApp() {
  // highlight-start
  const [diceValue, setDiceValue] = useState();
  // highlight-end

  function handleClick() {
    const diceCount = Math.floor(Math.random() * 6 + 1);
    //highlight-start
    setDiceValue(diceCount);
    // highlight-end
  }

  return (
    <div>
      <h2>Dice App</h2>
      <button onClick={handleClick}>Roll Dice</button>
      // highlight-start
      <h4>Dice Value: {diceValue}</h4>
      // highlight-end
    </div>
  );
}
```

:::tip Deep-dive
Setting the state doesn't change any value in the currently executing code. Take a look at the following code:

```tsx skip-testing
// imports
const [state, setState] = useState(0);

function handleAnEvent() {
  setState(1);
  // highlight-start
  console.log(state); // logs 0
  // highlight-end
}
// …
```

The log will still print `0` instead of `1`. The new state is only available from the next render.
:::

### The Effect hook

The Effect hook allows you to perform side effects to changes in your react app. Take a look at the following code:

```tsx skip-testing
useEffect(callbackFn, dependencyArray);
```

The `useEffect` function takes two parameters:

- The first parameter is an anonymous callback function that performs the side-effect.
- The second item is an array of dependencies that tells react when to call the callback function.

#### Example

Add a useEffect hook to the earlier `MyDiceApp` component in the following example. This `useEffect` runs a side-effect each time the app updates the `diceValue` state and logs its value.

```tsx testable
// highlight-start
import React, { useState, useEffect } from 'react';
// highlight-end

function MyDiceApp() {
  const [diceValue, setDiceValue] = useState<number>();

  // highlight-start
  useEffect(() => {
    console.log(diceValue);
  }, [diceValue]);
  // highlight-end

  function handleClick() {
    const diceCount = Math.floor(Math.random() * 6 + 1);
    setDiceValue(diceCount);
  }

  return (
    <div>
      <h2>Dice App</h2>
      <button onClick={handleClick}>Roll Dice</button>
      <h4>Dice Value: {diceValue}</h4>
    </div>
  );
}
```

:::caution Common Mistake
Very often, developers omit the dependency array in the useEffect hook, as follows:

```tsx skip-testing
useEffect(() => {
  // do something
});
```

It will cause the callback function to be called with every re-render, potentially leading to infinite re-renders.
:::

### Rules of Hooks

- Use your Hooks at the top of your React component, and don't call them inside loops, conditions, or nested functions. To know why, look at this [Explanation](https://legacy.reactjs.org/docs/hooks-rules.html#explanation).
- Use Hooks only in your React function components or your custom hooks. React hooks won't work in a regular JavaScript function.

> **Note**
>
> To learn more about hooks, go to [Built-in React Hooks](https://react.dev/reference/react)
