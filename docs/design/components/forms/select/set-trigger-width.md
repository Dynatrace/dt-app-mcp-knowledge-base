## Set trigger width

You can set the width of the trigger by adding the `width` prop on the `Select.Trigger` component and either giving it a fixed value or setting it to `full`, which would adjust it to the width of its container. By default, it's set to `content`, so it adjusts to the width of the trigger content.

**TriggerWidth**

```tsx
import { Select } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const TriggerWidth = () => {
  return (
    <Flex flexDirection="column">
      <Select>
        <Select.Trigger
          // highlight-next-line
          width="150px"
        />
        <Select.Content>
          <Select.Option value="dashboards">Dashboards</Select.Option>
          <Select.Option value="notebooks">Notebooks</Select.Option>
          <Select.Option value="Analyzers">Data analyzers</Select.Option>
          <Select.Option value="hub">Hub</Select.Option>
        </Select.Content>
      </Select>
      <Select>
        <Select.Trigger
          // highlight-next-line
          width="full"
        />
        <Select.Content>
          <Select.Option value="dashboards">Dashboards</Select.Option>
          <Select.Option value="notebooks">Notebooks</Select.Option>
          <Select.Option value="Analyzers">Data analyzers</Select.Option>
          <Select.Option value="hub">Hub</Select.Option>
        </Select.Content>
      </Select>
    </Flex>
  );
};
```
