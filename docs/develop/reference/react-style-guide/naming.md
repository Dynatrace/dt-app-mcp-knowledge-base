## Naming

- **Extensions**: Use `.tsx` extension for React components.
- **Filename**: Use PascalCase for filenames. For example, `ReservationCard.tsx`.
- **Reference naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

:::danger Bad

```tsx skip-testing
// component
import fooBar from './FooBar';

// instance
const FooBar = <FooBar />;
```

:::

:::tip Good

```tsx skip-testing
// component
import FooBar from './FooBar';

// instance
const foobar = <FooBar />;
```

:::

- **Hooks**: Use camelCase for React hooks.

:::danger Bad

```tsx skip-testing
export const UseFoo = () => { ... }
```

:::

:::tip Good

```tsx skip-testing
export const useFoo = () => { ... }
```

:::

- **Props Naming**: Avoid using DOM component prop names for different purposes.

**Detailed explanation**

Why? People expect props like style and className to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

:::danger Bad

```tsx skip-testing
<Foo style="fancy" />

<Foo className="fancy" />
```

:::

:::tip Good

```tsx skip-testing
<Foo variant="fancy" />
```

:::
