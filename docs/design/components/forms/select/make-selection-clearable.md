## Make selection clearable

In a single select, the `clearable` prop adds a button to the overlay when an option is selected to allow users to deselect the option. By default, `clearable` is set to `false` for the single select and `true` if multiple selection is enabled. For the multi-select, an option is added to select or deselect all options.

**Clearable**

```tsx
import { FormField, Label, Select } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Clearable = () => {
  return (
    <Flex>
      <FormField>
        <Label>Select country</Label>
        <Select
          // highlight-next-line
          clearable
        >
          <Select.Content>
            <Select.Option value="austria">Austria</Select.Option>
            <Select.Option value="germany">Germany</Select.Option>
            <Select.Option value="italy">Italy</Select.Option>
            <Select.Option value="spain">Spain</Select.Option>
          </Select.Content>
        </Select>
      </FormField>
      <FormField>
        <Label>Select countries</Label>
        <Select multiple>
          <Select.Content>
            <Select.Option value="austria">Austria</Select.Option>
            <Select.Option value="germany">Germany</Select.Option>
            <Select.Option value="italy">Italy</Select.Option>
            <Select.Option value="spain">Spain</Select.Option>
          </Select.Content>
        </Select>
      </FormField>
    </Flex>
  );
};
```
