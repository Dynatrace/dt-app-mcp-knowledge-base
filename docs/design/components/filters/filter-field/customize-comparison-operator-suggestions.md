## Customize comparison operator suggestions

With the `autoSuggestions` prop set to true, relevant operator suggestions are added automatically. To customize the suggestions, omit `autoSuggestions` and use the returned `autoSuggestions` in the `onSuggest` callback. The `onSuggest` callback provides the information you need to determine which suggestions to show.

**FilteredAutoSuggestEntries**

```tsx
import { useCallback, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FilterField,
  FilterFieldGroupedSuggestions,
  FilterFieldSuggestion,
  FilterFieldSuggestionGroup,
  FilterFieldSuggestionsCallback,
  isFilterFieldListNode,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Grid } from '@dynatrace/strato-components/layouts';
import { RefreshIcon, PlayIcon } from '@dynatrace/strato-icons';

const keySuggestions = [
  { value: 'Health', details: 'Uses customized comparison operators.' },
  { value: 'Age' },
  { value: 'Cluster' },
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
const FilteredAutoSuggestEntries = () => {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState(value);

  const [suggestions, setSuggestions] = useState<FilterFieldGroupedSuggestions>(
    {},
  );
  const getSuggestions: FilterFieldSuggestionsCallback = useCallback(
    (state) => {
      if (state === undefined) {
        setSuggestions({});
        return;
      }

      const { currentTokens, currentStatement, groupedSuggestions } = state;

      const suggestions: Record<
        string,
        FilterFieldSuggestionGroup | undefined
      > = {};

      for (const currentToken of currentTokens) {
        const { type, token } = currentToken;
        switch (type) {
          case 'key':
            suggestions.key = {
              id: 'key-suggestions',
              label: 'Custom key label',
              suggestions: [
                ...keySuggestions.filter(
                  (suggestion) =>
                    token.value === '' ||
                    suggestion.value
                      ?.toLocaleLowerCase()
                      .includes(token.textValue.toLocaleLowerCase()),
                ),
                ...(groupedSuggestions[type]?.suggestions ?? []),
              ],
            };
            break;
          case 'value':
            suggestions.value = {
              id: 'value-suggestions',
              label: 'Custom value label',
              suggestions: [
                ...(
                  valueSuggestions[currentStatement?.key?.value ?? ''] ?? []
                ).filter(
                  (suggestion) =>
                    isFilterFieldListNode(token) ||
                    token.value === '' ||
                    suggestion.value
                      ?.toLocaleLowerCase()
                      .includes(token.textValue.toLocaleLowerCase()),
                ),
                ...(groupedSuggestions[type]?.suggestions ?? []),
              ],
            };
            break;
          case 'comparisonOperator': {
            if (currentStatement?.key?.value.toLowerCase().includes('age')) {
              suggestions.comparisonOperator = {
                id: 'comparison-operator-suggestions',
                label: 'Custom comparison operator label',
                suggestions: [
                  ...(groupedSuggestions[type]?.suggestions ?? []).filter(
                    ({ value }) => value === '>' || value === '<',
                  ),
                ],
              };
              return;
            }

            groupedSuggestions.comparisonOperator &&
              (suggestions.comparisonOperator =
                groupedSuggestions.comparisonOperator);
            break;
          }
        }
        setSuggestions(suggestions);
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
            // highlight-next-line
            onSuggest={getSuggestions}
          >
            {Array.from(Object.values(suggestions)).map(
              (suggestionGroup) =>
                suggestionGroup && (
                  <FilterField.SuggestionGroup
                    key={suggestionGroup.id}
                    {...suggestionGroup}
                  />
                ),
            )}
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
