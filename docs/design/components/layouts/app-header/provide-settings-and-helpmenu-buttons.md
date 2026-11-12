## Provide settings and HelpMenu buttons

To provide an app-specific help menu for users to find additional help and information, render the `HelpMenu` component within `AppHeader.Menus`. Optionally, you can also supply a custom settings button next to the `HelpMenu`.

**Menus**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { AppHeader, HelpMenu } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { SettingIcon } from '@dynatrace/strato-icons';

const Menus = () => {
  return (
    <AppHeader>
      {/* highlight-start */}
      <AppHeader.Menus>
        <Tooltip text="Settings">
          <Button onClick={() => undefined}>
            <Button.Prefix>
              <SettingIcon />
            </Button.Prefix>
          </Button>
        </Tooltip>
        <HelpMenu
          entries={{
            whatsNew: 'default',
            keyboardShortcuts: 'default',
            playground: 'default',
            about: 'default',
          }}
        />
      </AppHeader.Menus>
      {/* highlight-end */}
    </AppHeader>
  );
};
```

Read more about `HelpMenu` in the [HelpMenu](https://developer.dynatrace.com/design/components/layouts/HelpMenu.md) docs.
