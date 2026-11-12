## Validate

The `SearchInput` supports an error state, which can be triggered in two primary ways:

- **Form submission:** If the form containing the `SearchInput` is submitted with invalid or missing data, the component can reflect the error state.
- **Validation function:** Validation logic can be applied to determine whether the selected value meets the required criteria.

This example demonstrates how to show users a validation message using `FormFieldMessages`.

**Validation**

```tsx
import { useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FormField,
  Label,
  SearchInput,
  FormFieldMessages,
  type FormControlRef,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Validation = () => {
  const searchInputRef = useRef<FormControlRef<HTMLDivElement> | null>(null);
  const [showCustomError, setShowCustomError] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Flex flexDirection="column" gap={16}>
        <FormField>
          <Label>Search</Label>
          <SearchInput ref={searchInputRef} required />
          {/* highlight-start */}
          <FormFieldMessages>
            {(messages) => {
              if (showCustomError) {
                return (
                  <FormFieldMessages.Item variant="error">
                    Custom error for the search input
                  </FormFieldMessages.Item>
                );
              }
              if (!messages || messages.length === 0) {
                return (
                  <FormFieldMessages.Item variant="hint">
                    Hint for the search input
                  </FormFieldMessages.Item>
                );
              }

              return messages.map((msg) => (
                <FormFieldMessages.Item key={msg.id} {...msg} />
              ));
            }}
          </FormFieldMessages>
          {/* highlight-end */}
        </FormField>

        <Flex gap={12}>
          <Button variant="accent" type="submit">
            Submit
          </Button>
          <Button
            variant="emphasized"
            onClick={() => setShowCustomError(!showCustomError)}
          >
            Toggle custom error
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
```
