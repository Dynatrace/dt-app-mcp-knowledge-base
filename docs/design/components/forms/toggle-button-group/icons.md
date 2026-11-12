## Icons

Icons can be placed before or after the text in the `ToggleButtonGroup.Item`. If an item only displays an icon, include a `tooltip` describing what the icon represents.

**Icons**

```tsx
import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  ColumnsIcon,
  LegendBottomIcon,
  LegendRightIcon,
  RowsIcon,
  SecurityCriticalIcon,
  SecurityHighIcon,
  SecurityMediumIcon,
  WarningIcon,
} from '@dynatrace/strato-icons';

const Icons = () => {
  return (
    <Flex flexDirection="column" gap={8}>
      <div>
        <ToggleButtonGroup name="item-only">
          <ToggleButtonGroup.Item
            value="legend-right"
            tooltip="Legend Right"
            data-testid="legend-right"
            aria-label="Legend Right"
          >
            {/* highlight-start */}
            <ToggleButtonGroup.Prefix>
              <LegendRightIcon />
            </ToggleButtonGroup.Prefix>
            {/* highlight-end */}
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item
            value="legend-bottom"
            tooltip="Legend Bottom"
            data-testid="legend-bottom"
            aria-label="Legend Bottom"
          >
            {/* highlight-start */}
            <ToggleButtonGroup.Suffix>
              <LegendBottomIcon />
            </ToggleButtonGroup.Suffix>
            {/* highlight-end */}
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item
            value="columns"
            tooltip="Columns"
            data-testid="columns"
            aria-label="Columns"
          >
            {/* highlight-start */}
            <ToggleButtonGroup.Suffix>
              <ColumnsIcon />
            </ToggleButtonGroup.Suffix>
            {/* highlight-end */}
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item
            value="rows"
            tooltip="Rows"
            data-testid="rows"
            aria-label="Rows"
          >
            {/* highlight-start */}
            <ToggleButtonGroup.Suffix>
              <RowsIcon />
            </ToggleButtonGroup.Suffix>
            {/* highlight-end */}
          </ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup name="prefix-suffix">
          <ToggleButtonGroup.Item value="critical">
            {/* highlight-start */}
            <ToggleButtonGroup.Prefix>
              <SecurityCriticalIcon />
            </ToggleButtonGroup.Prefix>
            {/* highlight-end */}
            Security Critical
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="high">
            {/* highlight-start */}
            <ToggleButtonGroup.Prefix>
              <SecurityHighIcon />
            </ToggleButtonGroup.Prefix>
            {/* highlight-end */}
            Security High
            {/* highlight-start */}
            <ToggleButtonGroup.Suffix>
              <WarningIcon />
            </ToggleButtonGroup.Suffix>
            {/* highlight-end */}
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="medium">
            {/* highlight-start */}
            <ToggleButtonGroup.Prefix>
              <SecurityMediumIcon />
            </ToggleButtonGroup.Prefix>
            {/* highlight-end */}
            Security Medium
          </ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </div>
    </Flex>
  );
};
```
