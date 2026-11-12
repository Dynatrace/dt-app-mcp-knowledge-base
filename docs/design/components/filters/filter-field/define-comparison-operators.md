## Define comparison operators

The `validatorMap` property lets you define a list of comparison operators globally (for all keys) or individually (per key). For any comparison operator that isn't defined in the list, `FilterField` will show an error.

If you define comparison operators globally, be aware that the key types may also narrow down the list of allowed comparison operators. If you define comparison operators specifically for a key, they will overwrite restrictions set by the type of the key.

**ValidatorMapOperators**

```tsx
import { useEffect, useRef } from 'react';

import {
  type FilterFieldValidatorMap,
  FilterField,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
  type FormControlWithOverlayRef,
} from '@dynatrace/strato-components/forms';

const defaultValue =
  'Cluster ~ k8s-cluster-loadtest Namespace > local-dev-namespace-1 Health != true ';

const clusterValues = [
  'k8s-cluster-loadtest',
  'k8s-cluster-loadtest-sm',
  'k8s-cluster-e2e',
  'aws-topology',
  'local-dev',
];

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'Cluster',
      valuePredicate: clusterValues,
      // highlight-next-line
      comparisonOperators: ['equals', 'not-equals'],
    },
    {
      key: 'Health',
      valueType: 'Boolean',
    },
  ],
  // highlight-next-line
  comparisonOperators: ['equals'],
  exhaustive: false,
};

const ValidatorMapOperators = () => {
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
