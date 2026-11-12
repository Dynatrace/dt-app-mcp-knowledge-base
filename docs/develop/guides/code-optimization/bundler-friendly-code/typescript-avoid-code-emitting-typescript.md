## TypeScript: Avoid code-emitting TypeScript

The best TypeScript is the one that can just be erased to regular JavaScript, but some features create code that is different from what you'd usually expect. Let's take `enums`, for example.

```ts
enum Result {
  Ok = 'Ok',
  Error = 'Error',
}
```

Although this looks like an innocent way to define state, it generates the following JavaScript, which tree-shaking can't analyse:

```ts
var Result;

(function (Result) {
  // Immediately Invoked Function Expression (IIFE) — opaque to tree-shaking
  Result['Ok'] = 'Ok';
  Result['Error'] = 'Error';
  // All variants loaded, even if you only use one
})(Result || (Result = {}));
```

The IIFE pattern means tree-shaking can't remove unused variants—use one, load them all. For `Result`, that's two values. For real-world `enums` that span hundreds of lines, it adds up fast.

Enums also introduce side effects that affect the type system. Use string union types instead, as they provide the same type safety.

But it's not only `enums`, there are other elements in TypeScript that generate code. Activate the `erasableSyntaxOnly` flag (available since TypeScript 5.8) to catch these at compile time. For more information, see [erasable-syntax-only](https://oida.dev/erasable-syntax-only/).

> **Tip**
>
> Using `const enum` seems like a good fix, but it isn't. It needs full cross-file type information to inline values safely, which doesn't work with `isolatedModules: true`, which is required by Vite, esbuild, and SWC. Instead, use string union types.

### Enforce with TypeScript

Enable `erasableSyntaxOnly` in your `tsconfig.json` (TypeScript 5.8+) to catch enums, namespaces, and parameter properties at compile time:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "erasableSyntaxOnly": true
  }
}
```

### Enforce with ESLint

For earlier feedback at lint time, add `no-restricted-syntax` selectors to your `eslint.config.mjs`. The TypeScript AST selectors (`TSEnumDeclaration`, `TSModuleDeclaration`, and `TSParameterProperty`) require `@typescript-eslint/parser` as your ESLint parser.

If you're also using the `no-restricted-syntax` selectors from the [tree-shaking section](#enforce-with-eslint) above—`require()` and `define()`—combine all selectors into a single rule entry. ESLint doesn't merge multiple entries for the same rule:

```ts title="eslint.config.mjs"
{
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "Avoid TypeScript enums — use a string union type instead.",
      },
      {
        selector: "TSModuleDeclaration[kind='namespace']",
        message: "Avoid TypeScript namespaces — use a plain ES module instead.",
      },
      {
        selector: "TSParameterProperty",
        message: "Avoid TypeScript parameter properties — assign fields explicitly in the constructor body.",
      },
      {
        selector: "CallExpression[callee.name='require']",
        message: "Use ESM import statements instead of CommonJS require().",
      },
      {
        selector: "CallExpression[callee.name='define']",
        message: "Use ESM import statements instead of AMD define().",
      },
    ],
  },
}
```
