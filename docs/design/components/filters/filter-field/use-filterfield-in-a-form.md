## Use FilterField in a form

The user can submit a filter statement using `Enter` or `Ctrl / Cmd + Enter`. This triggers the `onFilter` callback, which provides the string representation of the value, the syntax tree, and its validity state. Clearing the `FilterField` also triggers the `onFilter` callback.

When the `FilterField` is the only control in a form and no `onFilter` handler is set, `Enter` submits the form, the way a lone text input does. Setting `onFilter` takes that over: the callback fires and the form is not submitted, so one keystroke is handled once.

`FilterField` can be displayed in a form. By default, the form shows a set of error messages based on the entered value, rendered as tooltips. Use the `FormField` to make the error state visible and add an error message beneath the `FilterField`. Learn about using the [FormField](https://developer.dynatrace.com/design/components/forms/FormField.md).

To provide the same functionality for pointer users, add a dedicated button next to the `FilterField`, as outlined in [Usage](https://developer.dynatrace.com/design/components/filters/FilterField/usage.md).

**FormValidation**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FilterField } from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Grid } from '@dynatrace/strato-components/layouts';
import { PlayIcon, RefreshIcon } from '@dynatrace/strato-icons';

const FormValidation = () => {
  const [value, setValue] = useState('');
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
            value={value}
            onChange={setValue}
            autoSuggestions
          />
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
