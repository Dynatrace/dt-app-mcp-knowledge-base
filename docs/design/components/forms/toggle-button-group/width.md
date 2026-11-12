## Width

The `width` property of the `ToggleButtonGroup` component accepts three types of values:

- `content`: adjusts the width to fit the content,
- `full`: expands to the full available width,
- Custom string values (e.g., "400px"): allows specifying an exact width.

**Width**

```tsx
import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Width = () => {
  return (
    <Flex flexDirection="column" gap={8}>
      <div>
        <ToggleButtonGroup
          // highlight-next-line
          width="content"
          name="content"
        >
          <ToggleButtonGroup.Item value="left">
            align left
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="center">
            align center
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="right">
            align right
          </ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup
          // highlight-next-line
          width="600px"
          name="600px"
        >
          <ToggleButtonGroup.Item value="left">
            align left
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="center">
            align center
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="right">
            align right
          </ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup
          // highlight-next-line
          width="full"
          name="full"
        >
          <ToggleButtonGroup.Item value="left">
            align left
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="center">
            align center
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="right">
            align right
          </ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </div>
    </Flex>
  );
};
```
