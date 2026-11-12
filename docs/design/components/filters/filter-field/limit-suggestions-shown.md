## Limit suggestions shown

To limit the number of default suggestions rendered, provide the `defaultSuggestionsCount` config. You can set limits for an empty and a filled `FilterField`.

If the suggestions exceed the limit, a show more / less button will be rendered to expand / collapse the remaining suggestions.

**ShowMore**

```tsx
import { useMemo } from 'react';

import {
  FilterField,
  FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';

const ShowMore = () => {
  const validatorMap = useMemo<FilterFieldValidatorMap>(
    () => ({
      keyPredicates: [
        'Age',
        'Cluster',
        'Container count',
        'Health',
        'Namespace',
        'Namespace labels',
        'Workload warning events',
      ],
    }),
    [],
  );

  return (
    <FilterField
      aria-label="Filter data"
      // highlight-next-line
      defaultSuggestionsCount={{ empty: 3, filled: 5 }}
      validatorMap={validatorMap}
      autoSuggestions
    />
  );
};
```
