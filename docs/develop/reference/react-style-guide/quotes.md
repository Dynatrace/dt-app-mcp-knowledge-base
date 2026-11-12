## Quotes

- Always use double quotes (") for JSX attributes, but single quotes (') for all other JS. eslint: [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)

**Detailed explanation**

Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

:::danger Bad

```tsx skip-testing
<Foo bar='bar' />

<Foo style={{ left: "20px" }} />
```

:::

:::tip Good

```tsx skip-testing
<Foo bar="bar" />

<Foo style={{ left: '20px' }} />
```

:::
