## Group options together

You can use the `Select.Groups` to group more options in the same group.

**Groups**

```tsx
import { FormField, Label, Select } from '@dynatrace/strato-components/forms';

const Groups = () => {
  return (
    <FormField>
      <Label>Select an office location</Label>
      <Select>
        <Select.Content>
          <Select.Option value="brazil">Brazil</Select.Option>
          <Select.Option value="japan">Japan</Select.Option>
          <Select.Option value="australia">Australia</Select.Option>
          {/* highlight-start */}
          <Select.Group>
            <Select.GroupLabel>Dynatrace Europe</Select.GroupLabel>
            <Select.Option value="austria">Austria</Select.Option>
            <Select.Option value="estonia">Estonia</Select.Option>
            <Select.Option value="poland">Poland</Select.Option>
            <Select.Option value="spain">Spain</Select.Option>
          </Select.Group>
          <Select.Group>
            <Select.GroupLabel>Dynatrace North America</Select.GroupLabel>
            <Select.Option value="california">California</Select.Option>
            <Select.Option value="canada">Canada</Select.Option>
            <Select.Option value="massachusetts">Massachusetts</Select.Option>
            <Select.Option value="michigan">Michigan</Select.Option>
          </Select.Group>
          {/* highlight-end */}
        </Select.Content>
      </Select>
    </FormField>
  );
};
```
