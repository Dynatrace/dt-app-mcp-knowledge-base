## Change insertion strategy

`FilterField` uses [filter field syntax](https://docs.dynatrace.com/docs/shortlink/ui-filter-field) to parse the user's input and transform it into tokens. Each token represents a filter key, value, comparison operator, or logical operator.

By default, applying a suggestion replaces the token that the cursor is currently positioned on with the value of the suggestion. Use the `insertionStrategy` prop to alter the behavior.

The following replacement strategies are supported:

| Strategy                  | Behavior                                                |
| ------------------------- | ------------------------------------------------------- |
| `replace-token` (default) | Replace the token at the cursor position.               |
| `replace-statement`       | Replace the whole statement at the cursor position.     |
| `replace-all`             | Replace the whole filter.                               |
| `insert`                  | Insert at the cursor position without any replacements. |

**InsertionStrategies**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FilterField } from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Grid } from '@dynatrace/strato-components/layouts';
import { RefreshIcon, PlayIcon } from '@dynatrace/strato-icons';

/**
 * Shows the example of the FilterField with different suggestion insertion strategies.
 */
const InsertionStrategies = () => {
  const [value, setValue] = useState('Health = healthy');
  const [submittedValue, setSubmittedValue] = useState(value);

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
            autoSuggestions
          >
            <FilterField.Suggestion
              value="unhealthy"
              // highlight-next-line
              insertionStrategy="replace-token"
              details="Replace token"
            />
            <FilterField.Suggestion
              value="cluster ="
              // highlight-next-line
              insertionStrategy="replace-statement"
              details="Replace statement"
            />
            <FilterField.Suggestion
              value="health = healthy and cluster = autopilot"
              // highlight-next-line
              insertionStrategy="replace-all"
              details="Replace all"
            />
            <FilterField.Suggestion
              value="addonmanager"
              // highlight-next-line
              insertionStrategy="insert"
              trailing="."
              details="Insert"
            />
            <FilterField.Suggestion
              value="kubernetes.io"
              // highlight-next-line
              insertionStrategy="insert"
              details="Insert"
            />
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
