## Add display labels and descriptions to suggestions

You can enrich key and value suggestions from the `validatorMap` with a `displayValue` (a human-readable label shown instead of the raw value) and `details` (a secondary description). Both are optional and only affect the suggestion overlay — they have no effect on validation or the applied filter value.

**For keys** — add `displayValue` and `details` directly to the `FilterFieldKeySuggestionConfig` object in `keyPredicates`.

**For values** — replace string, number, boolean, or duration entries in `valuePredicate` with a `FilterFieldRichValuePredicate` object. Set `value` to the actual filter value that gets applied. `displayValue` and `details` are optional.

**ValidatorMapSuggestionDetails**

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

const defaultValue =
  'Host = web-server-01 Namespace = namespace-1 Duration = 20ms ';

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'host',
      // highlight-start
      displayValue: 'Host',
      details: 'The host on which the monitored process is running.',
      // highlight-end
      valueType: 'String',
    },
    {
      key: 'namespace',
      // highlight-start
      displayValue: 'Namespace',
      details: 'The namespace associated with the monitored process.',
      // highlight-end
      valuePredicate: [
        {
          // highlight-start
          value: 'namespace-1',
          displayValue: 'Namespace 1',
          details: 'The first namespace',
          // highlight-end
        },
        {
          // highlight-start
          value: 'namespace-2',
          displayValue: 'Namespace 2',
          details: 'The second namespace',
          // highlight-end
        },
      ],
    },
  ],
};

const ValidatorMapSuggestionDetails = () => {
  const filterFieldRef = useRef<FormControlWithOverlayRef>(null);
  useEffect(() => {
    filterFieldRef.current?.validate();
  }, []);

  return (
    <FormField>
      <FilterField
        aria-label="Filter data"
        ref={filterFieldRef}
        defaultValue={defaultValue}
        validatorMap={validatorMap}
        autoSuggestions
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
