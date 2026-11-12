## Demo

By itself, the `AppHeader` displays the configured application icon and name as anchor tag, which links to the root of the application.

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { AppHeader, HelpMenu } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { SettingIcon } from '@dynatrace/strato-icons';

const Basic = () => {
  return (
    <AppHeader>
      <AppHeader.Navigation>
        <AppHeader.NavigationItem href="/">First tab</AppHeader.NavigationItem>
        <AppHeader.NavigationItem href="/second-tab">
          Second tab
        </AppHeader.NavigationItem>
        <AppHeader.NavigationItem href="/third-tab">
          Third tab
        </AppHeader.NavigationItem>
      </AppHeader.Navigation>
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
            getStarted: {
              onSelect: () => undefined,
            },
            documentation: [
              {
                label: 'Dynatrace Hub',
                href: 'link/to/hub',
                onSelect: () => undefined,
              },
              {
                label: 'Onboarding wizard',
                onSelect: () => undefined,
              },
            ],
            keyboardShortcuts: 'default',
            playground: 'default',
            feedback: { onSelect: () => undefined },
            about: 'default',
          }}
        />
      </AppHeader.Menus>
    </AppHeader>
  );
};
```

> **Note**
>
> `AppHeader.NavItems`, `AppHeader.NavItem` and `AppHeader.AppNavLink` have been renamed for better discoverability.
>
> The old names still work like before and can be used interchangeably.
