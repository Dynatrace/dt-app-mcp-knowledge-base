## Save and restore panel sizes

Panel sizes are automatically retained when dismissing and reopening panels.

To restore the panel sizes over full page reloads or navigation, you can utilize e.g. the `localStorage`. Resize the panels in the page below and use the buttons to toggle between pages or reload the page to see this in effect.

**RestorePanelWidths**

```tsx
import { useCallback, useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  Flex,
  Page,
  PagePanelSizes,
  PanelSize,
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

const Placeholder = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      marginTop: Spacings.Size24,
      borderRadius: Borders.Radius.Container.Default,
      backgroundColor: Colors.Background.Container.Neutral.Default,
    }}
  />
);
type _PanelSizes = Record<string, PanelSize>;

const RestorePanelWidths = () => {
  const [pageKey, setPageKey] = useState('Page1');
  const [isDetailViewDismissed, setIsDetailViewDismissed] =
    useState<boolean>(false);
  const [isSidebarDismissed, setIsSidebarDismissed] = useState<boolean>(false);
  const pagePanelSizes = useMemo<_PanelSizes | undefined>(
    () => JSON.parse(window.localStorage.getItem(pageKey) || '{}'),
    [pageKey],
  );
  const resizeCallback = useCallback(
    (sizes: PagePanelSizes) => {
      window.localStorage.setItem(
        pageKey,
        JSON.stringify({
          sidebar: sizes.sidebar['%'],
          details: sizes.details['%'],
        }),
      );
    },
    [pageKey],
  );

  return (
    <Page key={pageKey}>
      <Page.Header>
        <Flex>
          <Button
            onClick={() => {
              setPageKey('Page1');
            }}
          >
            Page1
          </Button>
          <Button
            onClick={() => {
              setPageKey('Page2');
            }}
          >
            Page2
          </Button>
        </Flex>
      </Page.Header>
      <Page.Sidebar
        dismissed={isSidebarDismissed}
        onDismissChange={(state) => setIsSidebarDismissed(state)}
        // highlight-start
        preferredWidth={pagePanelSizes?.sidebar}
        onResize={resizeCallback}
        // highlight-end
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
        <Placeholder />
      </Page.Main>
      <Page.DetailView
        dismissed={isDetailViewDismissed}
        onDismissChange={(state) => setIsDetailViewDismissed(state)}
        // highlight-start
        preferredWidth={pagePanelSizes?.details}
        onResize={resizeCallback}
        // highlight-end
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TitleBar>
          <TitleBar.Title>Settings</TitleBar.Title>
          <TitleBar.Subtitle>
            For content related to the main area
          </TitleBar.Subtitle>
          <TitleBar.Action>
            <Button
              onClick={() => setIsDetailViewDismissed(true)}
              aria-label="Close settings"
            >
              <Button.Prefix>
                <XmarkIcon />
              </Button.Prefix>
            </Button>
          </TitleBar.Action>
        </TitleBar>
        <Placeholder />
      </Page.DetailView>
    </Page>
  );
};
```
