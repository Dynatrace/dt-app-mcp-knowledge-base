## JSX

- Wrap JSX tags in parentheses when they span more than one line. eslint: [react/jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

:::danger Bad

```tsx skip-testing
export const Foo = () => {
  return <Bar>
    <Baz />
  </Bar>;
};
```

:::

:::tip Good

```tsx skip-testing
export const Foo = () => {
  return (
    <Bar>
      <Baz />
    </Bar>
  );
};
```

:::

- Always self-close tags that have no children. eslint: [react/self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

:::danger Bad

```tsx skip-testing
<Foo variant="stuff"></Foo>
```

:::

:::tip Good

```tsx skip-testing
<Foo variant="stuff" />
```

:::

- If your component has multiline properties, close its tag on a new line. eslint: [react/jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

:::danger Bad

```tsx skip-testing
<Foo
  bar="bar"
  baz="baz" />
```

:::

:::tip Good

```tsx skip-testing
<Foo
  bar="bar"
  baz="baz"
/>
```

:::
