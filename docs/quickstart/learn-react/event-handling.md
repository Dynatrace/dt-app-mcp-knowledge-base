## Event handling

The event handling in React is very similar to DOM. You write React events in `camelCase` and pass the function's name to it. In the following example, the app adds an `onClick` event listener to the button and attaches it to the `handleOnClick` function:

```tsx skip-testing
<button onClick={handleOnClick}>Click me!</button>
```

The event handler receives the event as an argument. You can also use the event to prevent the default behavior using `preventDefault` in your handler as shown:

```tsx skip-testing
function MyButton() {
  function handleOnClick(e) {
    // highlight-start
    e.preventDefault();
    // highlight-end
    console.log('You clicked me!');
  }
  return <button onClick={handleOnClick}>Click me!</button>;
}
```

> **Note**
>
> To learn more, go to [Responding to Events](https://react.dev/learn/responding-to-events)

### Custom events

Like DOM events, you can also create custom events for your component. Custom events allow you to pass data from a child to a parent component.

In the following example, you create a `MySpecialButton` component with `customEvent` as a prop. Through this prop, you send custom events to the parent component. The parent component can attach the event handler to this event.

The `MySpecialButton` component returns a `button`. The app fires the `customEvent` when a user clicks the button. In this example, the app sends `dataToParent` as an event, but you can pass anything.

```tsx skip-testing
// highlight-start
function MySpecialButton({ customEvent }) {
  //highlight-end
  function handleOnClick(e) {
    // highlight-start
    customEvent('dataToParent');
    // highlight-end
    console.log('You clicked me!');
  }

  return <button onClick={handleOnClick}>I'm special!</button>;
}
```

As mentioned earlier, then you can attach the event handler to the `customEvent` like so:

```tsx skip-testing
<MySpecialButton customEvent={handleCustomEvent} />
```
