## Load suggestions async

To load suggestions async and display a loading state in the suggestions overlay, set the `loading` prop on `FilterField.Suggestions`.

**AsyncSuggestions**

```tsx
import { useCallback, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FilterField,
  FilterFieldSuggestionsCallback,
  isFilterFieldListNode,
  type FilterFieldSuggestion,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Grid } from '@dynatrace/strato-components/layouts';
import { PlayIcon, RefreshIcon } from '@dynatrace/strato-icons';

const keySuggestions = [
  { value: 'Age' },
  { value: 'Cluster' },
  { value: 'Container count' },
  { value: 'Health' },
  { value: 'Namespace' },
  { value: 'Namespace labels' },
  { value: 'Workload warning events' },
];

const valueSuggestions: Record<string, FilterFieldSuggestion[]> = {
  Health: [{ value: 'healthy' }, { value: 'unhealthy' }],
  Cluster: [
    { value: 'k8s-cluster-loadtest' },
    { value: 'k8s-cluster-loadtest-sm' },
    { value: 'k8s-cluster-e2e' },
    { value: 'aws-topology' },
    { value: 'local-dev' },
  ],
  'Workload warning events': [{ value: 'yes' }, { value: 'no' }],
  Namespace: [
    { value: 'kube-public' },
    { value: 'kube-scheduler' },
    { value: 'local-dev-namespace-1' },
    { value: 'local-dev-namespace-2' },
    { value: 'local-dev-namespace-3' },
  ],
  'Namespace labels': [
    { value: 'kubernetes.io/metadata.name : ab-cd-1' },
    { value: 'kubernetes.io/metadata.name : kube-public' },
  ],
};

/**
 * Shows the example of the FilterField with async suggestions.
 */
const AsyncSuggestions = () => {
  const [value, setValue] = useState('Health = healthy ');
  const [submittedValue, setSubmittedValue] = useState(value);

  const [suggestions, setSuggestions] = useState<
    FilterFieldSuggestion[] | undefined
  >(keySuggestions);
  const [loading, setLoading] = useState(false);
  const getSuggestions: FilterFieldSuggestionsCallback = useCallback(
    (state) => {
      if (state === undefined) {
        setSuggestions([]);
        return;
      }

      const { currentTokens, currentStatement } = state;

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        for (const currentToken of currentTokens) {
          const { token, type } = currentToken;

          switch (type) {
            case 'key':
              setSuggestions([
                ...keySuggestions.filter(
                  (suggestion) =>
                    isFilterFieldListNode(token) ||
                    token.value === '' ||
                    suggestion.value
                      ?.toLowerCase()
                      .includes(token.textValue.toLowerCase()),
                ),
              ]);
              break;
            case 'value':
              setSuggestions([
                ...(
                  valueSuggestions[currentStatement?.key?.value ?? ''] ?? []
                ).filter(
                  (suggestion) =>
                    isFilterFieldListNode(token) ||
                    token.value === '' ||
                    suggestion.value
                      ?.toLowerCase()
                      .includes(token.textValue.toLowerCase()),
                ),
              ]);
              break;
            default:
              setSuggestions([]);
          }
        }
      }, 2000);
    },
    [],
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmittedValue(value);
      }}
    >
      <FormField>
        <Grid gridTemplateColumns="1fr auto" gap={4}>
          <FilterField
            aria-label="Filter data"
            defaultValue={value}
            onChange={setValue}
            onSuggest={getSuggestions}
            autoSuggestions
          >
            {/* highlight-next-line */}
            <FilterField.Suggestions loading={loading}>
              {suggestions?.map((suggestion) => (
                <FilterField.Suggestion
                  key={suggestion.value}
                  {...suggestion}
                />
              ))}
            </FilterField.Suggestions>
          </FilterField>
          <Button
            variant={value !== submittedValue ? 'accent' : 'emphasized'}
            color={value !== submittedValue ? 'primary' : 'neutral'}
            type="submit"
          >
            <Button.Prefix>
              {value === submittedValue ? <RefreshIcon /> : <PlayIcon />}
            </Button.Prefix>
            {value === submittedValue ? 'Refresh' : 'Update'}
          </Button>
        </Grid>
        <FormFieldMessages />
      </FormField>
    </form>
  );
};
```
