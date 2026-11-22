## States

The `Combobox` supports an initial value, a disabled state, and a read-only state. In the read-only state, users can see the value but can't change it or open the dropdown.

**Variants**

```tsx
import { Combobox, FormField, Label } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex flexDirection="column" gap={16}>
      <FormField>
        <Label>Default value</Label>
        <Combobox
          // highlight-next-line
          defaultValue="green"
        >
          <Combobox.Content>
            <Combobox.Option value="red">Red</Combobox.Option>
            <Combobox.Option value="green">Green</Combobox.Option>
            <Combobox.Option value="blue">Blue</Combobox.Option>
          </Combobox.Content>
        </Combobox>
      </FormField>
      <FormField
        // highlight-next-line
        disabled
      >
        <Label>Disabled</Label>
        <Combobox defaultValue="green">
          <Combobox.Content>
            <Combobox.Option value="red">Red</Combobox.Option>
            <Combobox.Option value="green">Green</Combobox.Option>
            <Combobox.Option value="blue">Blue</Combobox.Option>
          </Combobox.Content>
        </Combobox>
      </FormField>
      <FormField>
        <Label>Read-only</Label>
        <Combobox
          // highlight-next-line
          readOnly
          defaultValue="blue"
        >
          <Combobox.Content>
            <Combobox.Option value="red">Red</Combobox.Option>
            <Combobox.Option value="green">Green</Combobox.Option>
            <Combobox.Option value="blue">Blue</Combobox.Option>
          </Combobox.Content>
        </Combobox>
      </FormField>
    </Flex>
  );
};
```
