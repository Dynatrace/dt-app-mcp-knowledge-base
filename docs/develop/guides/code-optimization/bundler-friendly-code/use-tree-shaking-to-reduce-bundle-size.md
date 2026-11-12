## Use tree-shaking to reduce bundle size

Tree-shaking is static code analysis that follows your dependency graph and checks for the usage of exported and imported symbols: `const` and `let` bindings, functions, and classes.

To use tree-shaking effectively, only rely on ECMAScript module dependencies. Use [Bundlephobia](https://bundlephobia.com) to check whether a library supports tree-shaking. For example, `lodash` is not tree-shakeable, but the ECMAScript module alternative `lodash-es` is tree-shakeable and side-effect-free, meaning you only include what you actually use. Side effects are covered later in this guide.

But even if everything you use is built on ES Modules and is tree-shakeable, there are still many ways to inadvertently increase your bundle size.

### Enforce with ESLint

Add a package denylist to your `eslint.config.mjs` to catch known non-tree-shakeable imports at lint time:

```ts title="eslint.config.mjs"
{
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "lodash",
            message: "'lodash' is not tree-shakeable. Use 'lodash-es' instead.",
          },
          {
            name: "moment",
            message: "'moment' is not tree-shakeable. Use 'date-fns' or 'dayjs' instead.",
          },
        ],
      },
    ],
  },
}
```

> **Note**
>
> If you already have a `no-restricted-imports` rule in your config, don't replace it — append these entries to your existing `paths` array.

The `no-restricted-imports` denylist covers known offenders. For any dependency outside the list, check [Bundlephobia](https://bundlephobia.com) to verify tree-shakeability before adding it.

To also ban CommonJS `require()` and AMD `define()`, add `no-restricted-syntax` selectors. See the [combined snippet below](#enforce-with-eslint-1) and combine all selectors into one rule entry, since ESLint doesn't merge multiple entries for the same rule.

:::tip React Doctor

[React Doctor](https://www.react.doctor/) complements the denylist with rules that catch a wider class of non-tree-shakeable patterns across your codebase:

- `no-barrel-import`—flags imports from any barrel file in your own code.
- `no-full-lodash-import`—flags full-library `lodash` imports.
- `no-moment`—flags `moment` usage and suggests lighter alternatives.

Use it alongside ESLint to surface dependency issues that a fixed denylist can't enumerate.
:::
