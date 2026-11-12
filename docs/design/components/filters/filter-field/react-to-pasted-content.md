## React to pasted content

To react to pasted content, implement an `onSuggest` callback and check whether `pastedContent` is included in the provided suggestion types. When it is, you can offer suggestions based on the pasted content, optionally using insertion strategies like `replace-statement` or `replace-all` to turn the raw pasted content into a full statement.

**PastedContent**

```tsx
import { useState, useCallback } from 'react';

import {
  FilterField,
  type FilterFieldSuggestionGroup,
  type FilterFieldSuggestionsCallback,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';
import { Container, Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'podName',
      valueType: 'String',
      comparisonOperators: ['not-matches-phrase', 'matches-phrase'],
    },
    {
      key: 'healthy',
      valueType: 'Boolean',
    },
  ],
};

const PastedContent = () => {
  const [suggestions, setSuggestions] = useState<
    Record<string, FilterFieldSuggestionGroup | undefined>
  >({});

  const getSuggestions: FilterFieldSuggestionsCallback = useCallback(
    (state) => {
      if (state === undefined) {
        setSuggestions({});
        return;
      }

      const { currentTokens } = state;

      const suggestions: Record<
        string,
        FilterFieldSuggestionGroup | undefined
      > = {};

      for (const currentToken of currentTokens) {
        const { type, token } = currentToken;

        // highlight-next-line
        if (type === 'pastedContent') {
          const matchesPhrase = `podName ~ ${token.textValue}`;
          const notMatchesPhrase = `podName !~ ${token.textValue}`;

          suggestions.value = {
            id: 'pasted-content-suggestions',
            label: 'Pasted content suggestion group',
            suggestions: [
              {
                value: matchesPhrase,
                details: 'Matches phrase',
                displayValue: matchesPhrase,
                // highlight-next-line
                insertionStrategy: 'replace-statement',
              },
              {
                value: notMatchesPhrase,
                details: 'Not matches phrase',
                displayValue: notMatchesPhrase,
                // highlight-next-line
                insertionStrategy: 'replace-statement',
              },
            ],
          };
        }

        setSuggestions(suggestions);
      }
    },
    [],
  );

  return (
    <Flex flexDirection="column">
      <FormField>
        <Label>Filter field</Label>
        <FilterField
          defaultValue="healthy = true"
          // highlight-next-line
          onSuggest={getSuggestions}
          validatorMap={validatorMap}
          autoSuggestions
        >
          <FilterField.Suggestions>
            {Array.from(Object.values(suggestions)).map(
              (suggestionGroup) =>
                suggestionGroup && (
                  <FilterField.SuggestionGroup
                    key={suggestionGroup.id}
                    {...suggestionGroup}
                  />
                ),
            )}
          </FilterField.Suggestions>
        </FilterField>
        <FormFieldMessages />
      </FormField>

      <Container as={Flex} flexDirection="column" gap={4} paddingY={12}>
        <Text textStyle="base-emphasized">Text to try out pasting</Text>
        <Flex flexDirection="column" gap={0}>
          <Text style={{ userSelect: 'all' }}>pod_(frontend_1)</Text>
          <Text style={{ userSelect: 'all' }}>pod&lt;&gt; service:8080</Text>
          <Text style={{ userSelect: 'all' }}>pod = $backend[1]"v1"</Text>
          <Text style={{ userSelect: 'all' }}>"pod-backend-2"</Text>
        </Flex>
      </Container>
    </Flex>
  );
};
```
