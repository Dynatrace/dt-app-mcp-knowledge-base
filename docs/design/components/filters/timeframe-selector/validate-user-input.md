## Validate user input

This example shows how to validate user input in `TimeframeSelector` using the `react-hook-form` package, which handles error messages. To connect the form with `TimeframeSelector`, register the field with the custom error message and use the `useForm` hook from `react-hook-form`.

**Validate**

```tsx
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@dynatrace/strato-components/buttons';
import type { Timeframe } from '@dynatrace/strato-components/core';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Heading, Text } from '@dynatrace/strato-components/typography';

const Validate = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<{
    timeframe: Timeframe | null;
  }>({
    mode: 'all',
  });

  return (
    <form
      onSubmit={handleSubmit(() => void 0)}
      onReset={() => reset()}
      noValidate
    >
      <Flex flexDirection="column" gap={16}>
        <Heading level={2}>Register</Heading>
        <Flex flexDirection="column" gap={16}>
          <Controller
            name="timeframe"
            control={control}
            rules={{
              validate: (value) =>
                (value?.from &&
                  value.from.type === 'expression' &&
                  value?.to &&
                  value.to.type === 'expression') ||
                'Please only enter expressions in the from and to value',
            }}
            render={({ field, fieldState: { error } }) => (
              <FormField required>
                <TimeframeSelector
                  aria-label="Timeframe selector"
                  /* oxlint-disable-next-line typescript/no-deprecated */
                  clearable
                  {...field}
                />
                <FormFieldMessages>
                  {(msgs) => {
                    if (msgs.length > 0) {
                      return msgs.map((msgs) => (
                        <FormFieldMessages.Item key={msgs.id} {...msgs} />
                      ));
                    }

                    if (error) {
                      return (
                        <FormFieldMessages.Item
                          variant="error"
                          key={error.type}
                        >
                          {error.message}
                        </FormFieldMessages.Item>
                      );
                    }
                  }}
                </FormFieldMessages>
              </FormField>
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
