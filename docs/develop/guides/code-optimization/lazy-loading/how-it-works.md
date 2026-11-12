## How it works

React's `lazy()` method accepts a function that returns a dynamic `import()`. The returned component is loaded asynchronously and must be rendered inside a `<Suspense>` component boundary that provides a fallback UI while the chunk is in flight.

See the following example of lazy loading a heavy component:

```tsx title="ui/app/App.tsx" untestable
import React, { lazy, Suspense } from 'react';
import { ProgressBar } from '@dynatrace/strato-components/content';

const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

export const App = () => (
  <Suspense fallback={<ProgressBar />}>
    <HeavyComponent />
  </Suspense>
);
```

The component module is only fetched when `<HeavyComponent />` is first rendered. Subsequent renders use the cached module and there is no per-render overhead.

### Enforce with ESLint

A `<Suspense>` boundary without a `fallback` prop renders nothing while the chunk loads and risks a layout shift. Use the following custom local rule to catch this automatically. The rule skips elements with a spread attribute (`{...props}`) since the fallback may be passed via spread, and it doesn't check whether `fallback={null}` or `fallback={undefined}` is intentional — those cases require a code review.

Add a local rules plugin file:

```ts title="eslint-local-rules.mjs"
export default {
  plugins: {
    local: {
      rules: {
        'require-suspense-fallback': {
          meta: {
            type: 'problem',
            messages: { missing: '<Suspense> must have a `fallback` prop. (Code Optimization: lazy-loading guide)' },
          },
          create(context) {
            return {
              JSXOpeningElement(node) {
                const name = node.name;
                const isSuspense =
                  (name.type === 'JSXIdentifier' && name.name === 'Suspense') ||
                  (name.type === 'JSXMemberExpression' && name.property?.name === 'Suspense');
                if (!isSuspense) return;
                if (node.attributes.some((a) => a.type === 'JSXSpreadAttribute')) return;
                if (!node.attributes.some((a) => a.type === 'JSXAttribute' && a.name.name === 'fallback')) {
                  context.report({ node, messageId: 'missing' });
                }
              },
            };
          },
        },
      },
    },
  },
};
```

Then wire it in `eslint.config.mjs`:

```ts title="eslint.config.mjs"
import localRules from './eslint-local-rules.mjs';

export default [
  {
    ...localRules,
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'local/require-suspense-fallback': 'error',
    },
  },
];
```
