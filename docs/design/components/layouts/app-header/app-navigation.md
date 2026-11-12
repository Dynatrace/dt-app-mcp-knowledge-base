## App navigation

If your app has several high-level features to explore data or personas with different user goals, levels of knowledge, or access, use `AppHeader.Navigation` to segment the flows. It will collapse into a menu, if there isn't enough space in the AppHeader.

**Navigation**

```tsx
import { NavLink, Link as RouterLink } from 'react-router';

import { Button } from '@dynatrace/strato-components/buttons';
import { AppHeader, HelpMenu } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { SettingIcon } from '@dynatrace/strato-icons';

const Navigation = () => {
  return (
    <AppHeader>
      {/* highlight-start */}
      <AppHeader.Navigation>
        <AppHeader.Logo />
        <AppHeader.NavigationItem href="#" isSelected>
          First tab
        </AppHeader.NavigationItem>
        <AppHeader.NavigationItem href="#" disabled isSelected>
          Second tab
        </AppHeader.NavigationItem>
        <AppHeader.NavigationItem href="#" disabled>
          Third tab
        </AppHeader.NavigationItem>
        <AppHeader.NavigationItem to="#" as={NavLink}>
          Fourth tab
        </AppHeader.NavigationItem>
        <AppHeader.NavigationItem to="/#?something" as={RouterLink}>
          Fifth tab
        </AppHeader.NavigationItem>
      </AppHeader.Navigation>
      {/* highlight-end */}
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
    </AppHeader>
  );
};
```

### Set active styles on `NavigationItem`

Set `isSelected` on `AppHeader.NavigationItem` to apply the correct styles.

### Usage with routing libraries

By default, navigation items and the logo link are rendered as `<a href="...">` tags. You can use the `as` prop on `AppHeader.Logo` and `AppHeader.NavigationItem`s to customize which component is rendered. If you want to use a routing library like `react-router-dom` you can set `as={NavLink}`.

`react-router-dom`s `NavLink` automatically adds an `active` css class, so you don't need to set `isSelected` manually.

**NavigationWithRoutingLibraries**

```tsx
import { NavLink, Link as RouterLink } from 'react-router';

import { Button } from '@dynatrace/strato-components/buttons';
import { AppHeader, HelpMenu } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { SettingIcon } from '@dynatrace/strato-icons';

const NavigationWithRoutingLibraries = () => {
  return (
    <AppHeader>
      <AppHeader.Navigation>
        {/* highlight-start */}
        <AppHeader.Logo as={RouterLink} to="#" />
        <AppHeader.NavigationItem as={RouterLink} to="#" isSelected={false}>
          First tab
        </AppHeader.NavigationItem>
        <AppHeader.NavigationItem as={NavLink} to="#">
          Second tab
        </AppHeader.NavigationItem>
        {/* highlight-end */}
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
            keyboardShortcuts: 'default',
            playground: 'default',
            about: 'default',
          }}
        />
      </AppHeader.Menus>
    </AppHeader>
  );
};
```

### Customize app Logo

The `AppHeader.Logo` component allows you to customize the logos link, text and icon. It needs to be placed inside `AppHeader.Navigation`.

**CustomLogo**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { AppHeader, HelpMenu } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { SettingIcon } from '@dynatrace/strato-icons';

const CustomLogo = () => {
  return (
    <AppHeader>
      <AppHeader.Navigation>
        {/* highlight-start */}
        <AppHeader.Logo
          href="#"
          appName="Notebooks"
          appIcon="/platform/app-engine/registry/v1/app-icons/dynatrace.notebooks"
        />
        {/* highlight-end */}
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
            keyboardShortcuts: 'default',
            playground: 'default',
            about: 'default',
          }}
        />
      </AppHeader.Menus>
    </AppHeader>
  );
};
```

### Indicate release phase of app

Use the `releasePhase` prop on `AppHeader.Logo` to communicate the release phase of your app to users. The prop accepts `'preview'`, `'early-access'`, `'new'`, and `'deprecated'`, each displaying a correspondingly labelled chip next to the app name.

**NavigationLogoReleasePhase**

```tsx
import { AppHeader, Flex } from '@dynatrace/strato-components/layouts';

const NavigationLogoReleasePhase = () => {
  return (
    <Flex flexDirection="column">
      <AppHeader>
        <AppHeader.Navigation>
          <AppHeader.Logo
            appName="My Great App"
            // highlight-next-line
            releasePhase="preview"
          />
          <AppHeader.NavigationItem href="#">Item 1</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 2</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 3</AppHeader.NavigationItem>
        </AppHeader.Navigation>
      </AppHeader>
      <AppHeader>
        <AppHeader.Navigation>
          <AppHeader.Logo
            appName="My Great App"
            // highlight-next-line
            releasePhase="early-access"
          />
          <AppHeader.NavigationItem href="#">Item 1</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 2</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 3</AppHeader.NavigationItem>
        </AppHeader.Navigation>
      </AppHeader>
      <AppHeader>
        <AppHeader.Navigation>
          <AppHeader.Logo
            appName="My Great App"
            // highlight-next-line
            releasePhase="new"
          />
          <AppHeader.NavigationItem href="#">Item 1</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 2</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 3</AppHeader.NavigationItem>
        </AppHeader.Navigation>
      </AppHeader>
      <AppHeader>
        <AppHeader.Navigation>
          <AppHeader.Logo
            appName="My Great App"
            // highlight-next-line
            releasePhase="deprecated"
          />
          <AppHeader.NavigationItem href="#">Item 1</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 2</AppHeader.NavigationItem>
          <AppHeader.NavigationItem href="#">Item 3</AppHeader.NavigationItem>
        </AppHeader.Navigation>
      </AppHeader>
    </Flex>
  );
};
```
