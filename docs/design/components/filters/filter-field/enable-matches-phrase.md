## Enable matches phrase (\~)

To enable matches phrase comparison operators (`~` and `!~`), provide a `validatorMap` with `matches-phrase` or `not-matches-phrase` in the list of allowed operators. You can enable comparison operators globally, for all keys at once, or for individual keys. Matches phrase comparison operators are compatible with keys of the type `Any` and `String`, or any type that you list as an allowed comparison operator for a key.

For details on mapping `matches-phrase` and `not-matches-phrase` to a DQL command, and when to use different comparison operators, see the documentation on [translation to DQL](#convert-syntax-tree-to-dql).

**EnableMatchesPhrase**

```tsx
import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';

const defaultValue = 'Cluster ~ cluster Namespace !~ local ';

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
      valueType: 'String',
      // highlight-next-line
      comparisonOperators: ['matches-phrase', 'not-matches-phrase'],
    },
  ],
  // highlight-next-line
  comparisonOperators: ['matches-phrase'],
};

const EnableMatchesPhrase = () => {
  return (
    <FormField>
      <FilterField
        aria-label="Filter data"
        defaultValue={defaultValue}
        validatorMap={validatorMap}
        autoSuggestions
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
