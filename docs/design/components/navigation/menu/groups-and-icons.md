## Groups and icons

You can organize menu items into logical groups, with or without icons. To add icons, use `Menu.Prefix` or `Menu.Suffix`. See the [Accessibility tab](https://developer.dynatrace.com/design/components/navigation/Menu/a11y.md) for guidance on labeling for screen readers.

**Grouped**

```tsx
import { useState, type SyntheticEvent } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Label } from '@dynatrace/strato-components/forms';
import { Menu } from '@dynatrace/strato-components/navigation';
import {
  AccountIcon,
  CriticalIcon,
  ExternalLinkIcon,
  GroupIcon,
  SettingIcon,
  WarningIcon,
} from '@dynatrace/strato-icons';

const Grouped = () => {
  const [selected, setSelected] = useState('');
  const onItemSelected = (event: SyntheticEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      setSelected(event.target.innerText);
    }
  };

  return (
    <>
      <Menu>
        <Menu.Trigger>
          <Button
            variant="accent"
            color="primary"
            aria-label="Reveals more options"
          >
            Profile Menu
          </Button>
        </Menu.Trigger>
        <Menu.Content>
          {/* highlight-start */}
          <Menu.Group label="Account">
            {/* highlight-end */}
            <Menu.Item onSelect={onItemSelected}>
              {/* highlight-start */}
              <Menu.Prefix>
                <AccountIcon />
              </Menu.Prefix>
              {/* highlight-end */}
              Account Info
            </Menu.Item>
            <Menu.Item onSelect={onItemSelected}>
              <Menu.Prefix>
                <SettingIcon />
              </Menu.Prefix>
              Settings
            </Menu.Item>
            <Menu.Item onSelect={onItemSelected}>
              <Menu.Prefix>
                <GroupIcon />
              </Menu.Prefix>
              Account Group
            </Menu.Item>
          </Menu.Group>
          <Menu.Group aria-label="Possible issues">
            <Menu.Item onSelect={onItemSelected}>
              Report bug
              <Menu.Suffix>
                <ExternalLinkIcon />
              </Menu.Suffix>
            </Menu.Item>
            <Menu.Item onSelect={onItemSelected}>
              <Menu.Prefix>
                <WarningIcon />
              </Menu.Prefix>
              Warnings
            </Menu.Item>
            <Menu.Item onSelect={onItemSelected}>
              <Menu.Prefix>
                <CriticalIcon />
              </Menu.Prefix>
              Errors
            </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu>

      {selected && (
        <p>
          Selected menu item: <Label>{selected}</Label>
        </p>
      )}
    </>
  );
};
```
