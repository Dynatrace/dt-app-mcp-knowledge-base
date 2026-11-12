## Use multiple selection

The `Select` supports multiple selection. You can enable that by adding the `multiple` prop. If enabled, the "Select all" option gets added automatically.

**Multiple**

```tsx
import { Select } from '@dynatrace/strato-components/forms';

const Multiple = () => {
  return (
    <Select
      // highlight-next-line
      multiple
      defaultValue={['austria']}
    >
      <Select.Content>
        <Select.Option value="austria">Austria</Select.Option>
        <Select.Option value="germany">Germany</Select.Option>
        <Select.Option value="italy">Italy</Select.Option>
        <Select.Option value="spain">Spain</Select.Option>
      </Select.Content>
    </Select>
  );
};
```
