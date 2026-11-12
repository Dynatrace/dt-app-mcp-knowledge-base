## Define fallback keys for free-text search

The `fallbackKey` property allows you to define commonly used keys that generate suggestions using the currently typed token as the value. This is useful when you want users to search within specific fields without knowing the exact key name.

To enable this feature, add `fallbackKey` to the key predicate in your `validatorMap`. The property accepts either:

- `true` — Generates statement suggestions using the `matches-phrase` (`~`) operator
- An array of comparison operators — Generates one statement suggestion for each specified operator

When a user starts typing in an empty `FilterField`, suggestions like `content ~ typed-value` are shown, allowing quick searches in common fields.

The difference to `suggestStatementOnValueMatch` is that `fallbackKey` uses the currently typed token as the value regardless of whether it matches predefined values, while `suggestStatementOnValueMatch` only suggests statements when the typed value matches values defined in the `valuePredicate`.

**FallbackKey**

```tsx
import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    // Use fallbackKey: true to suggest statements with matches-phrase (~) operator
    {
      key: 'content',
      // highlight-next-line
      fallbackKey: true,
    },
    // Use fallbackKey with an array of operators for specific comparison operators
    {
      key: 'status',
      valuePredicate: ['error', 'warning', 'info', 'success'],
      suggestStatementOnValueMatch: true,
      // highlight-next-line
      fallbackKey: ['equals', 'not-equals'],
    },
    // Regular key without fallbackKey - no fallback suggestions generated
    {
      key: 'environment',
      valuePredicate: ['dev', 'staging', 'prod'],
    },
  ],
  comparisonOperators: ['equals', 'not-equals', 'matches-phrase'],
  exhaustive: false,
};

const FallbackKey = () => {
  return (
    <FilterField
      aria-label="Filter data"
      validatorMap={validatorMap}
      autoSuggestions
    />
  );
};
```
