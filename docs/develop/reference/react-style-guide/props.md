## Props

- Always use camelCase for prop names, or PascalCase if the prop value is a React component.

:::danger Bad

```tsx skip-testing
<Foo
  UserName="hello"
  phone_number={12345678}
/>
```

:::

:::tip Good

```tsx skip-testing
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

:::

- Omit the value of the prop when it's explicitly `true`. eslint: [react/jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

:::danger Bad

```tsx skip-testing
<Foo hidden={true} />
```

:::

:::tip Good

```tsx skip-testing
<Foo hidden />
```

:::

- Avoid using an array index as `key` prop, prefer a stable id. ([Why?](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318))

:::danger Bad

```tsx skip-testing
todos.map((todo, index) => <Todo {...todo} key={index} />);
```

:::

:::tip Good

```tsx skip-testing
todos.map((todo) => <Todo {...todo} key={todo.id} />);
```

:::

- Use spread props sparingly.

**Detailed explanation**

Why? Otherwise, you're more likely to pass unnecessary props down to components. For React v15.6.1 and older, you could pass invalid HTML attributes to the DOM.

**Exceptions**:

- Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha's beforeEach construct.

```tsx skip-testing
export default function Foo() {
  const props = {
    text: '',
    isPublished: false,
  };

  return <div {...props} />;
}
```

- To filter out unnecessary props when possible.

:::caution Caution

```tsx skip-testing
export const Foo = (props) => {
  return <Bar {...props} />;
};
```

:::

:::tip Better

```tsx skip-testing
// filter out unnecessary props
export const Foo = (props) => {
  const { ignoredProp, ...barProps } = props;

  return <Bar {...barProps} />;
};

// wrapped internal component
export const Foo = (props) => {
  return <WrappedFoo {...props} />;
};

// explicit props object
export const Foo = () => {
  const barProps = {
    name: 'bar',
    baz: 123,
  };

  return <Bar {...barProps} />;
};
```

:::
