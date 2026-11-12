## Suggest full statements when typing values

Complete filter statements (key, operator, value) can be suggested automatically based on typed input. This allows users to type a value like `error` and immediately see suggestions like `status = error` without needing to know the key name first.

To enable this feature, add `suggestStatementOnValueMatch` to the key predicate in your `validatorMap`. The property accepts either:

- `true` — Enables statement suggestions for all values defined in the `valuePredicate` array (suggestions are displayed for exact matches, starts-with, ends-with, and contains matches)
- A function — A custom match function that receives the current token and returns `true` if a statement suggestion should be shown

Statement suggestions always use the `=` (equals) comparison operator. If multiple keys have the same value configured, suggestions for all matching keys will be shown.

**StatementSuggestions**

```tsx
import {
  FilterField,
  type FilterFieldValidatorMap,
  type FilterFieldLeafNode,
} from '@dynatrace/strato-components/filters';

// A custom match function that validates trace IDs (32-character hex strings)
const isValidTraceId = (currentToken: FilterFieldLeafNode) => {
  const traceIdRegex = /^[a-fA-F0-9]{32}$/;
  return traceIdRegex.test(currentToken.textValue);
};

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    // Enable statement suggestions with a boolean for predefined values
    {
      key: 'status',
      valuePredicate: ['error', 'warning', 'info', 'success'],
      // highlight-next-line
      suggestStatementOnValueMatch: true,
    },
    // Multiple keys can share values - all will be suggested
    {
      key: 'environment',
      valuePredicate: ['dev', 'staging', 'prod'],
      // highlight-next-line
      suggestStatementOnValueMatch: true,
    },
    // Enable statement suggestions with a custom match function
    {
      key: 'traceId',
      valueType: 'String',
      // highlight-next-line
      suggestStatementOnValueMatch: isValidTraceId,
    },
  ],
  exhaustive: false,
};

const StatementSuggestions = () => {
  return (
    <FilterField
      aria-label="Filter data"
      validatorMap={validatorMap}
      autoSuggestions
    />
  );
};
```
