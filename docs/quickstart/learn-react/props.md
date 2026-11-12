## Props

In React, a component can receive input from its outer component. You can achieve this using `props`. Think of `props` as something similar to `attributes` in HTML.

In the following example, you have a `StockDetail` component that takes an object as an argument with two props, `stockSymbol` and `stockValue`, and shows them on page.

```tsx skip-testing
function StockDetail({ stockSymbol, stockValue }) {
  return (
    <div>
      <h2>Stock Symbol: {stockSymbol}</h2>
      <h3>Stock Value: {stockValue}</h3>
    </div>
  );
}
```

You can then pass the actual value of these props as follows:

```tsx skip-testing
<StockDetail stockSymbol={'SYM'} stockValue={24.4} />
```

> **Tip**
>
> It's how you can pass the data from parent to child component.
