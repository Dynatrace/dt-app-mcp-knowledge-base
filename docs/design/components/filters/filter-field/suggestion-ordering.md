## Suggestion Ordering

By default, key and value suggestions from the `validatorMap` are sorted alphabetically for string values, numerically in ascending order for numbers, and by unit order (smallest to largest, e.g. `ns`, `ms`, `s`, `m`, `h`) then numerically within the same unit for durations. When the user types, suggestions are reordered by match relevance: exact matches appear first, followed by starts-with, and then contains or ends-with matches. Within each relevance tier, alphabetical or ascending order is preserved.

**SuggestionOrdering**

```tsx
import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';

// Keys are defined in non-alphabetical order to show they appear alphabetically in suggestions.
// Numbers are placed before strings and sorted in ascending order.
const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    // Intentionally non-alphabetical: workload comes before cluster, namespace, age
    {
      key: 'workload',
      valuePredicate: ['frontend', 'backend', 'database', 'cache'],
    },
    {
      key: 'cluster',
      valuePredicate: [
        // Numbers are sorted in ascending order and shown before string values
        3,
        1,
        10,
        2,
        'cluster-eu-west',
        'cluster-us-east',
        'cluster-ap-south',
      ],
    },
    {
      key: 'namespace',
      valuePredicate: ['staging', 'production', 'development'],
    },
    {
      key: 'age',
      valueType: 'Number',
    },
  ],
  exhaustive: false,
};

const SuggestionOrdering = () => {
  return (
    <FilterField
      aria-label="Filter data"
      validatorMap={validatorMap}
      autoSuggestions
    />
  );
};
```

To preserve the original order defined in `keyPredicates` and `valuePredicate`, set `sortSuggestions: false` on the `validatorMap`. Relevance-based sorting when the user is typing remains active regardless of this setting.

**SuggestionOrderingDisabled**

```tsx
import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';

// Setting sortSuggestions: false preserves the definition order of keys and
// values from the validatorMap. Relevance-based sorting still applies once
// the user starts typing.
const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    // Keys remain in this definition order: workload, cluster, namespace, age
    {
      key: 'workload',
      valuePredicate: ['frontend', 'backend', 'database', 'cache'],
    },
    {
      key: 'cluster',
      valuePredicate: [
        // Values remain in this definition order: numbers and strings interleaved
        3,
        1,
        10,
        2,
        'cluster-eu-west',
        'cluster-us-east',
        'cluster-ap-south',
      ],
    },
    {
      key: 'namespace',
      valuePredicate: ['staging', 'production', 'development'],
    },
    {
      key: 'age',
      valueType: 'Number',
    },
  ],
  exhaustive: false,
  // Disable alphabetical/ascending sorting — keeps the original definition order.
  // Relevance-based sorting (exact → starts-with → contains/ends-with) still
  // applies once the user starts typing.
  // highlight-next-line
  sortSuggestions: false,
};

const SuggestionOrderingDisabled = () => {
  return (
    <FilterField
      aria-label="Filter data"
      validatorMap={validatorMap}
      autoSuggestions
    />
  );
};
```
