## Use complex objects as values

There are some known limitations when using complex objects as option values. For the `Select` to be able to keep the user's selection between renders, you can opt for one of the following approaches:

- Use the controlled variant of the `Select`.
- Use cached values inside of your component function (for example, by using `useMemo` or `useState`).
- Declare variables outside of your component function.

The value returned by a form when the user selects an option depends on the properties of the selected option.

1. If you provide a `textValue`, that will be the returned value.
2. If you don't provide a `textValue`, and the `value` can be converted to a string, the stringified `value` will be returned.
3. If you don't provide a `textValue` or a stringifiable `value`, the option label will be submitted.
4. If no `textValue` is given, and neither the `value` nor the option label can be stringified, a fallback value will be submitted.

**ComplexObjectsInForms**

```tsx
import { useState, type SyntheticEvent } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FormField, Label, Select } from '@dynatrace/strato-components/forms';
import { Divider, Flex } from '@dynatrace/strato-components/layouts';
import { Code, Text } from '@dynatrace/strato-components/typography';

const ComplexObjectsInForms = () => {
  const [value, setValue] = useState(null);
  const [submittedValue, setSubmittedValue] = useState<string | undefined>();

  return (
    <Flex flexDirection="column">
      <Flex
        as="form"
        onSubmit={(event: SyntheticEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          setSubmittedValue(formData.get('number') as string);
        }}
        alignItems="flex-end"
        gap={4}
      >
        <FormField>
          <Label>Number</Label>
          <Select name="number" value={value} onChange={setValue}>
            <Select.Trigger placeholder="Pick a number" />
            <Select.Content>
              <Select.Option
                value={{ type: 'BigInt', value: '1' }}
                // highlight-next-line
                textValue="BigInt: 1"
              >
                Option 1
              </Select.Option>
              <Select.Option value={{ type: 'BigInt', value: '2' }}>
                Option 2
              </Select.Option>
              <Select.Option value={BigInt(3)}>Option 3</Select.Option>
              <Select.Option value={BigInt(4)}>
                <div>Option 4</div>
              </Select.Option>
            </Select.Content>
          </Select>
        </FormField>
        <Button type="submit" variant="accent" color="primary">
          Submit
        </Button>
      </Flex>
      <Divider />
      <Flex gap={4}>
        <Text>Submitted value: </Text>
        <Code style={{ width: 'max-content' }}>{submittedValue ?? '-'}</Code>
      </Flex>
    </Flex>
  );
};
```
