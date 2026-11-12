## Disable options

In the `Select`, you can disable each option separately by adding the `disabled` prop on the `Select.Option` component. Otherwise, if you need to disable the whole `Select` component, you can add the `disabled` prop directly.

**DisableOptions**

```tsx
import { FormField, Label, Select } from '@dynatrace/strato-components/forms';

const DisableOptions = () => {
  return (
    <FormField>
      <Label>Select a country</Label>
      <Select name="choice" defaultValue="Austria">
        <Select.Content>
          <Select.Option value="austria">Austria</Select.Option>
          <Select.Option
            value="germany"
            // highlight-next-line
            disabled
          >
            Germany
          </Select.Option>
          <Select.Option value="italy">Italy</Select.Option>
          <Select.Option
            value="spain"
            // highlight-next-line
            disabled
          >
            Spain
          </Select.Option>
        </Select.Content>
      </Select>
    </FormField>
  );
};
```
