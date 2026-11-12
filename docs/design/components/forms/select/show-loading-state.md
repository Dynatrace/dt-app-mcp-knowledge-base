## Show loading state

You can show the loading state of the `Select.Option` components by adding the `loading` prop to the `Select.Content` component.

**Loading**

```tsx
import { Select } from '@dynatrace/strato-components/forms';

const Loading = () => {
  return (
    <Select>
      <Select.Content
        // highlight-next-line
        loading
      >
        <Select.Option value="austria">Austria</Select.Option>
        <Select.Option value="germany">Germany</Select.Option>
        <Select.Option value="italy">Italy</Select.Option>
        <Select.Option value="spain">Spain</Select.Option>
      </Select.Content>
    </Select>
  );
};
```
