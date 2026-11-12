## Demo

**Basic**

```tsx
import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <ToggleButtonGroup name="basic">
      <ToggleButtonGroup.Item value="left">align left</ToggleButtonGroup.Item>
      <ToggleButtonGroup.Item value="center">
        align center
      </ToggleButtonGroup.Item>
      <ToggleButtonGroup.Item value="right">align right</ToggleButtonGroup.Item>
    </ToggleButtonGroup>
  );
};
```
