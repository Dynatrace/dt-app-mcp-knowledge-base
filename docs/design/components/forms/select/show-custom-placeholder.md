## Show custom placeholder

You can use the `Select.Trigger` component to show a placeholder for the trigger button by adding the `placeholder` prop. If no option is selected, the `placeholder` value is shown by default. Notice that the `clearable` prop is used here to enable empty selection.

**Placeholder**

```tsx
import { Select } from '@dynatrace/strato-components/forms';

const Placeholder = () => {
  return (
    <Select clearable>
      <Select.Trigger
        // highlight-next-line
        placeholder="Please select an app"
      />
      <Select.Content>
        <Select.Option value="dashboards">Dashboards</Select.Option>
        <Select.Option value="notebooks">Notebooks</Select.Option>
        <Select.Option value="Analyzers">Data analyzers</Select.Option>
        <Select.Option value="hub">Hub</Select.Option>
      </Select.Content>
    </Select>
  );
};
```
