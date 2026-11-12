## Filter options

You can search through options by adding the `Select.Filter` component. This renders a search input, where you can type the filtering term and filter the options on the client-side. If no options are found after filtering, you can also customize the shown message by adding content to the `Select.EmptyState` component, which is only valid within the `Select.Content` element. Otherwise, the default message is shown: "No items found.".

**Filter**

```tsx
import { FormField, Label, Select } from '@dynatrace/strato-components/forms';

const Filter = () => {
  return (
    <FormField>
      <Label>Select a country</Label>
      <Select>
        <Select.Content>
          <Select.EmptyState>No matching countries found.</Select.EmptyState>
          {/* highlight-next-line */}
          <Select.Filter />
          <Select.Option value="austria">Austria</Select.Option>
          <Select.Option value="germany">Germany</Select.Option>
          <Select.Option value="italy">Italy</Select.Option>
          <Select.Option value="spain">Spain</Select.Option>
        </Select.Content>
      </Select>
    </FormField>
  );
};
```
