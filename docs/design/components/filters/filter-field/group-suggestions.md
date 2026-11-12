## Group suggestions

If there are many suggestions that fit into different categories, you can use `FilterField.SuggestionGroup` to separate them visually. Use the `FilterField.SuggestionGroupLabel` to add short labels above the groups.

**SuggestionDetailsAndGroups**

```tsx
import { useCallback, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FilterField,
  FilterFieldSuggestion,
  FilterFieldSuggestionsCallback,
  isFilterFieldListNode,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Grid } from '@dynatrace/strato-components/layouts';
import { RefreshIcon, PlayIcon } from '@dynatrace/strato-icons';

const recommendedKeySuggestions = [{ value: 'Cluster' }, { value: 'Health' }];

const otherKeySuggestions = [
  { value: 'Age' },
  { value: 'Container count' },
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
 * Shows the example of the FilterField with static suggestions.
 */
const SuggestionDetailsAndGroups = () => {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState(value);

  const [suggestions, setSuggestions] = useState<
    { group: string | undefined; suggestions: FilterFieldSuggestion[] }[]
  >([]);
  const getSuggestions: FilterFieldSuggestionsCallback = useCallback(
    (state) => {
      if (state === undefined) {
        setSuggestions([]);
        return;
      }

      const { currentTokens, currentStatement } = state;
      for (const currentToken of currentTokens) {
        const { type, token } = currentToken;

        switch (type) {
          case 'key':
            setSuggestions([
              {
                group: 'Recommended',
                suggestions: [
                  ...recommendedKeySuggestions.filter(
                    (suggestion) =>
                      isFilterFieldListNode(token) ||
                      token.value === '' ||
                      suggestion.value
                        ?.toLowerCase()
                        .includes(token.textValue.toLowerCase()),
                  ),
                ],
              },
              {
                group: 'Other',
                suggestions: [
                  ...otherKeySuggestions.filter(
                    (suggestion) =>
                      isFilterFieldListNode(token) ||
                      token.value === '' ||
                      suggestion.value
                        ?.toLowerCase()
                        .includes(token.textValue.toLowerCase()),
                  ),
                ],
              },
            ]);
            break;
          case 'value':
            setSuggestions([
              {
                group: undefined,
                suggestions: [
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
                ],
              },
            ]);
            break;
          default:
            setSuggestions([]);
        }
      }
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
            {suggestions?.map((suggestion) => (
              <FilterField.SuggestionGroup>
                {suggestion.group && (
                  // highlight-start
                  <FilterField.SuggestionGroupLabel>
                    {suggestion.group}
                  </FilterField.SuggestionGroupLabel>
                  // highlight-end
                )}
                {suggestion.suggestions?.map((suggestion) => (
                  <FilterField.Suggestion
                    key={suggestion.value}
                    {...suggestion}
                  />
                ))}
              </FilterField.SuggestionGroup>
            ))}
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
