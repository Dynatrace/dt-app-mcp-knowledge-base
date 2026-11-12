## TypeScript: Import types when you only need types

TypeScript works with two namespaces:

- The type namespace—every type or interface you create adds a name to this namespace.
- The value namespace—you add a name to this namespace for every `const`, `let`, `function`.

They are distinct, meaning you can use the same name in both namespaces and won't clash. They have a one-way boundary, which means that you can access names in the value namespace and add information to the type namespace using the `typeof` operator, but not the other way around. There is no way to get type information into your JavaScript runtime code.

Everything in the type namespace is erasable. Code in the value namespace might be transpiled.

A few elements contribute the same name to both namespaces: `enums`, `classes`, and `namespaces`. Even if you set out not to use them in your code, you might still have some legacy code you constantly refer to, even if you only need type information. You can tell TypeScript that you're only interested in the type information by using:

```ts
import type { Foo } from 'foo';
```

With that, TypeScript will include the type information, but the bundler won't load any runtime code.

### Enforce with ESLint

The `@typescript-eslint/consistent-type-imports` rule enforces `import type` automatically and supports auto-fix:

```ts title="eslint.config.mjs"
{
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
  },
}
```

Run `eslint --fix` to convert existing value imports that only use types to `import type` in one pass.
