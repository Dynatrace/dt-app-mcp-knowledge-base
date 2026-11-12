## Define values for keys

For any key in the `validatorMap` property, you can define a list of values that are valid by passing an array to the `valuePredicate`. `FilterField` will return an error for any value that isn't on the list.

If, in addition to a list of values, you pass a key type as a `valuePredicate`, `FilterField` will accept any value that is in the list and of that key type.

**ValidatorMapValuePredicates**

```tsx
import { useEffect, useRef } from 'react';

import {
  type FilterFieldValidatorMap,
  FilterField,
} from '@dynatrace/strato-components/filters';
import {
  type FormControlWithOverlayRef,
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';

const defaultValue =
  'Cluster = k8s-cluster-loadtest-lg Namespace = local-dev-namespace-3 Duration < 300s ';

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

const durationValues = ['100s', '200s'];

const ValidatorMapValuePredicates = () => {
  const filterFieldRef = useRef<FormControlWithOverlayRef>(null);
  useEffect(() => {
    filterFieldRef.current?.validate();
  }, []);

  const validatorMap: FilterFieldValidatorMap = {
    keyPredicates: [
      {
        key: 'Cluster',
        // highlight-next-line
        valuePredicate: clusterValues,
        valueType: 'String',
      },
      {
        key: 'Namespace',
        // highlight-next-line
        valuePredicate: namespaceValues,
      },
      {
        key: 'Duration',
        // highlight-next-line
        valuePredicate: durationValues,
      },
    ],
  };

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
