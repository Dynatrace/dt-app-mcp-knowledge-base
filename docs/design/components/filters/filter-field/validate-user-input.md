## Validate user input

To validate user input, set restrictions for keys, comparison operators, and values using the `validatorMap` property. `FilterField` will highlight errors and show appropriate suggestions in the suggestions overlay as long as the `autoSuggestions` property of the `FilterField` is set to `true`.

**ValidatorMap**

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
  'Cluster = k8s-cluster-loadtest Namespace = local-dev-namespace-4 ';

const clusterValues = [
  'k8s-cluster-loadtest',
  'k8s-cluster-loadtest-sm',
  'k8s-cluster-e2e',
  'aws-topology',
  'local-dev',
];

const namespaceValues = [
  'kube-public',
  'kube-scheduler',
  'local-dev-namespace-1',
  'local-dev-namespace-2',
  'local-dev-namespace-3',
];

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'Cluster',
      valuePredicate: clusterValues,
      valueType: 'String',
    },
    {
      key: 'Namespace',
      valuePredicate: namespaceValues,
      comparisonOperators: ['equals', 'not-equals'],
    },
  ],
  comparisonOperators: ['equals', 'not-equals', 'exists', 'not-exists'],
  exhaustive: false,
};

const ValidatorMap = () => {
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
        // highlight-next-line
        validatorMap={validatorMap}
        autoSuggestions
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
