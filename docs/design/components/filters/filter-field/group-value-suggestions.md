## Group value suggestions

Value suggestions for a key can be organized into labeled groups by replacing string or number entries in `valuePredicate` with `FilterFieldValueSuggestionGroupConfig` objects.

**ValidatorMapGroupedValueSuggestions**

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
    {
      key: 'severity',
      valuePredicate: [
        'info',

        // Values grouped under "Critical Levels"
        // highlight-start
        {
          label: 'Critical Levels',
          suggestions: ['critical', 'error'],
        },
        // highlight-end

        // Values grouped under "Warning Levels"
        // highlight-start
        {
          label: 'Warning Levels',
          suggestions: ['warning', 'notice'],
        },
        // highlight-end
      ],
    },
    {
      key: 'status',
      valuePredicate: [
        {
          // Values grouped under "Active States"
          // highlight-start
          label: 'Active States',
          suggestions: ['running', 'active', 'online'],
          // highlight-end
        },
        {
          // Values grouped under "Inactive States"
          // highlight-start
          label: 'Inactive States',
          suggestions: ['stopped', 'inactive', 'offline'],
          // highlight-end
        },
      ],
    },
  ],
};

const ValidatorMapGroupedValueSuggestions = () => {
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
