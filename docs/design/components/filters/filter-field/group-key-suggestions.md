## Group key suggestions

Key suggestions from the `validatorMap` can be organized into labeled groups using `FilterFieldKeySuggestionGroupConfig` objects in the `keyPredicates` array.

The `keyPredicates` property accepts an array of key names (strings), `FilterFieldKeySuggestionConfig` objects, or `FilterFieldKeySuggestionGroupConfig` objects. The array format is required to use key suggestion groups.

**ValidatorMapGroupedKeySuggestions**

```tsx
import { useEffect, useRef } from 'react';

import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  type FormControlWithOverlayRef,
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    { key: 'host', valueType: 'String' },
    { key: 'service', valueType: 'String' },

    // Keys grouped under "Status"
    // highlight-start
    {
      label: 'Status',
      suggestions: [
        { key: 'status', valuePredicate: ['active', 'inactive', 'pending'] },
        { key: 'health', valuePredicate: ['healthy', 'unhealthy'] },
      ],
    },
    // highlight-end

    // Keys grouped under "Metrics"
    // highlight-start
    {
      label: 'Metrics',
      suggestions: [
        { key: 'cpu', valueType: 'Number' },
        { key: 'memory', valueType: 'Number' },
        { key: 'responseTime', valueType: 'Duration' },
      ],
    },
    // highlight-end
  ],
  exhaustive: false,
};

const ValidatorMapGroupedKeySuggestions = () => {
  const filterFieldRef = useRef<FormControlWithOverlayRef>(null);
  useEffect(() => {
    filterFieldRef.current?.validate();
  }, []);

  return (
    <FormField>
      <FilterField
        aria-label="Filter data"
        ref={filterFieldRef}
        validatorMap={validatorMap}
        autoSuggestions
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
