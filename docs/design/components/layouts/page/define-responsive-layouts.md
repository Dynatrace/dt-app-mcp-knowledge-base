## Define responsive layouts

The page handles different screen sizes internally. On smaller screens, a drawer is used for `Sidebar` and `DetailView` instead of rendering them next to the `Main` panel. You can configure the breakpoints to determine when to switch to the drawer.

Default breakpoints:

- `DetailView`: tablet
- `Sidebar`: mobile

**MobileConfig**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FormField,
  Label,
  NumberInputV2 as NumberInput,
} from '@dynatrace/strato-components/forms';
import {
  AppHeader,
  Page,
  TitleBar,
} from '@dynatrace/strato-components/layouts';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';
import {
  CloseSidebarIcon,
  OpenSidebarIcon,
  SettingIcon,
  XmarkIcon,
} from '@dynatrace/strato-icons';

const MobileConfig = () => {
  const [isDetailViewDismissed, setIsDetailViewDismissed] =
    useState<boolean>(false);
  const [isSidebarDismissed, setIsSidebarDismissed] = useState<boolean>(false);
  const [breakpoint, setBreakpoint] = useState<number | null>(920);

  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppHeader.Navigation>
            <AppHeader.NavigationItem href="/">Home</AppHeader.NavigationItem>
            <AppHeader.NavigationItem href="/">
              Dashboards
            </AppHeader.NavigationItem>
            <AppHeader.NavigationItem href="/">
              Notebooks
            </AppHeader.NavigationItem>
          </AppHeader.Navigation>
        </AppHeader>
      </Page.Header>
      <Page.Sidebar
        dismissed={isSidebarDismissed}
        onDismissChange={(state) => {
          setIsSidebarDismissed(state);
        }}
      >
        <TitleBar>
          <TitleBar.Title>Sidebar</TitleBar.Title>
          <TitleBar.Subtitle>e.g. for navigation</TitleBar.Subtitle>
          <TitleBar.Action>
            <Button
              onClick={() => setIsSidebarDismissed(true)}
              aria-label="Close sidebar"
            >
              <Button.Prefix>
                <XmarkIcon />
              </Button.Prefix>
            </Button>
          </TitleBar.Action>
        </TitleBar>
      </Page.Sidebar>
      <Page.Main style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar>
          <TitleBar.Prefix>
            <Button
              onClick={() => setIsSidebarDismissed(!isSidebarDismissed)}
              aria-label={`${isSidebarDismissed ? 'Open' : 'Close'} sidebar`}
            >
              <Button.Suffix>
                {isSidebarDismissed ? (
                  <OpenSidebarIcon />
                ) : (
                  <CloseSidebarIcon />
                )}
              </Button.Suffix>
            </Button>
          </TitleBar.Prefix>
          <TitleBar.Title>Main</TitleBar.Title>
          <TitleBar.Subtitle>
            Place your main content in this area
          </TitleBar.Subtitle>
          <TitleBar.Action>
            <Button
              onClick={() => setIsDetailViewDismissed(!isDetailViewDismissed)}
              aria-label={`${
                isDetailViewDismissed ? 'Open' : 'Close'
              } settings`}
            >
              <Button.Prefix>
                <SettingIcon />
              </Button.Prefix>
            </Button>
          </TitleBar.Action>
        </TitleBar>
        <div
          style={{
            width: '100%',
            height: '100%',
            marginTop: Spacings.Size24,
            borderRadius: Borders.Radius.Container.Default,
            backgroundColor: Colors.Background.Container.Neutral.Default,
          }}
        />
      </Page.Main>
      <Page.DetailView
        onDismissChange={(state) => {
          setIsDetailViewDismissed(state);
        }}
        dismissed={isDetailViewDismissed}
        // highlight-next-line
        breakpoint={breakpoint || 920}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TitleBar>
          <TitleBar.Title>Settings</TitleBar.Title>
          <TitleBar.Subtitle>
            Change the breakpoint to a screen size smaller than the current
            screen to see the Drawer (initially closed).
          </TitleBar.Subtitle>
          <TitleBar.Action>
            <Button
              onClick={() => setIsDetailViewDismissed(true)}
              aria-label="Close details"
            >
              <Button.Prefix>
                <XmarkIcon />
              </Button.Prefix>
            </Button>
          </TitleBar.Action>
        </TitleBar>
        <FormField>
          <Label>
            Change the breakpoint of the detail view, 0 means no mobile layout
            will be used.
          </Label>
          <NumberInput
            aria-label="define breakpoint"
            value={breakpoint}
            onChange={setBreakpoint}
          />
        </FormField>
      </Page.DetailView>
    </Page>
  );
};
```
