## Validation

For validation patterns including custom hints and errors, see [show custom hints and errors](https://developer.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) in the `FormField` documentation.

### OnChange

The `onChange` callback returns a `TimeValue` when valid and an empty string when invalid, or null when empty. This information can be helpful to validate the `DateTimePicker`. The returned ISOStrings are formatted in UTC time, with `precision` prop defining their precision.

**OnChange**

```tsx
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@dynatrace/strato-components/buttons';
import type { TimeValue } from '@dynatrace/strato-components/core';
import {
  DateTimePicker,
  FormField,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Heading, Text } from '@dynatrace/strato-components/typography';

const OnChange = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<{
    datetime: TimeValue | string | null;
  }>({
    mode: 'all',
    defaultValues: {
      datetime: new Date().toISOString(),
    },
  });

  return (
    <form
      onSubmit={handleSubmit(() => void 0)}
      onReset={() => reset()}
      noValidate
    >
      <Flex flexDirection="column" gap={16}>
        <Heading level={2}>Select a date</Heading>
        <Flex flexDirection="column" gap={16}>
          <Controller
            name="datetime"
            control={control}
            rules={{
              validate(value: TimeValue | string | null) {
                if (value === '') {
                  return 'Please select a valid date.';
                }
                if (value === null) {
                  return 'A DateTime is required.';
                }
                return true;
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <FormField required>
                  <Label>DateTime</Label>
                  <DateTimePicker {...field} />
                  <FormFieldMessages>
                    {error && (
                      <FormFieldMessages.Item
                        variant="error"
                        message={error.message}
                      />
                    )}
                  </FormFieldMessages>
                </FormField>
                <Text as="p">Value: {JSON.stringify(field.value)}</Text>
              </>
            )}
          />

          <Button type="submit" variant="emphasized">
            Submit
          </Button>
          <Text>
            The form has{!isSubmitSuccessful && ' not'} been submitted.
          </Text>
        </Flex>
      </Flex>
    </form>
  );
};
```
