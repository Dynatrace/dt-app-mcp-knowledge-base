## Change create label

Use the `createLabel` prop to change the action word in the create option. For example, `createLabel="Use"` shows "Use xyz" instead of "Create xyz".

**CreateLabel**

```tsx
import { Combobox, FormField, Label } from '@dynatrace/strato-components/forms';

const CreateLabel = () => {
  return (
    <FormField>
      <Label>Programming language</Label>
      <Combobox
        // highlight-next-line
        createLabel="Use"
        placeholder="Select or enter language"
      >
        <Combobox.Content>
          <Combobox.Option value="TypeScript">TypeScript</Combobox.Option>
          <Combobox.Option value="JavaScript">JavaScript</Combobox.Option>
          <Combobox.Option value="Python">Python</Combobox.Option>
          <Combobox.Option value="Rust">Rust</Combobox.Option>
          <Combobox.Option value="Go">Go</Combobox.Option>
        </Combobox.Content>
      </Combobox>
    </FormField>
  );
};
```
