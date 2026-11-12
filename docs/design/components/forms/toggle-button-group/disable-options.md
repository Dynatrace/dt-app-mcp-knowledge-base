## Disable options

The `ToggleButtonGroup` offers two disable options. You can disable the entire group or disable specific buttons. To implement either option, apply the `disabled` prop to the target element (either the group or an individual button).

**Disabled**

```tsx
import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Disabled = () => {
  return (
    <Flex flexDirection="column" gap={8}>
      <div>
        <ToggleButtonGroup
          // highlight-next-line
          disabled
          name="disabled"
        >
          <ToggleButtonGroup.Item value="all">
            All options
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="disabled">
            disabled
          </ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup name="item-disabled">
          <ToggleButtonGroup.Item value="left">
            align left
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item
            // highlight-next-line
            disabled
            value="center"
          >
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
