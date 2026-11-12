## Accessibility

- Always include an `alt` prop on `<img>` tags. If the image is presentational, `alt` can be an empty string or the `<img>` tag needs to have `role="presentation"`. eslint: [jsx-a11y/alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md)

:::danger Bad

```tsx skip-testing
<img src="hello.jpg" />
```

:::

:::tip Good

```tsx skip-testing
<img src="hello.jpg" alt="Me waving hello" />

{/* Presentational image */}
<img src="hello.jpg" alt="" />
<img src="hello.jpg" role="presentation" />
```

:::

- Don't use words like "image", "photo", or "picture" in `<img>` `alt` props. eslint: [jsx-a11y/img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md)

**Detailed explanation**

Why? Screenreaders already announce img elements as images, so there is no need to include this information in the alt text.

:::danger Bad

```tsx skip-testing
<img src="hello.jpg" alt="Picture of me waving hello" />
```

:::

:::tip Good

```tsx skip-testing
<img src="hello.jpg" alt="Me waving hello" />
```

:::

- Use only valid, non-abstract [ARIA roles](https://www.w3.org/TR/wai-aria/#usage_intro). eslint: [jsx-a11y/aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md)

:::danger Bad

```tsx skip-testing
{/* Not an ARIA role */}
<div role="datepicker" />

{/* Abstract ARIA role */}
<div role="range" />
```

:::

:::tip Good

```tsx skip-testing
<div role="button" />
```

:::

- Don't use `accessKey` on elements. eslint: [jsx-a11y/no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md)

**Detailed explanation**

Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.

:::danger Bad

```tsx skip-testing
<button accesskey="s">Click me!</button>
```

:::

:::tip Good

```tsx skip-testing
<button>Click me!</button>
```

:::
