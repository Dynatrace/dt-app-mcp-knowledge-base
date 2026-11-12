## Demo

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Menu } from '@dynatrace/strato-components/navigation';
import {
  HelpIcon,
  HomeIcon,
  SettingIcon,
  ThumbsUpIcon,
} from '@dynatrace/strato-icons';

const Basic = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button variant="accent" color="primary">
          Navigation Menu
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item
          onSelect={() => {
            /* Trigger logic goes here */
          }}
        >
          <Menu.Prefix>
            <HomeIcon />
          </Menu.Prefix>
          Home
        </Menu.Item>
        <Menu.Item
          onSelect={() => {
            /* Trigger logic goes here */
          }}
        >
          <Menu.Prefix>
            <ThumbsUpIcon />
          </Menu.Prefix>
          Recommendation
        </Menu.Item>
        <Menu.Item
          onSelect={() => {
            /* Trigger logic goes here */
          }}
        >
          <Menu.Prefix>
            <SettingIcon />
          </Menu.Prefix>
          Settings
        </Menu.Item>
        <Menu.Item
          onSelect={() => {
            /* Trigger logic goes here */
          }}
        >
          <Menu.Prefix>
            <HelpIcon />
          </Menu.Prefix>
          Help
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
```
