## Demo

The `InputGroup` component provides a way to visually group multiple components. Supported components include:

- Button
- Select
- TextInput
- DateTimePicker
- TimeframeSelector
- Menu

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';
import { Select } from '@dynatrace/strato-components/forms';
import { InputGroup } from '@dynatrace/strato-components/layouts';
import { Menu } from '@dynatrace/strato-components/navigation';

const Basic = () => {
  return (
    <InputGroup>
      <Button variant="emphasized">Button</Button>
      <Menu>
        <Menu.Trigger>
          <Button variant="emphasized">Menu Trigger</Button>
        </Menu.Trigger>
      </Menu>
      <Select />
      <TimeframeSelector />
    </InputGroup>
  );
};
```
