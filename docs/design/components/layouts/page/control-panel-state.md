## Control panel state

Use the `dismissed` prop and `onDismissChange` callback of the panels to control the panel state yourself. The `onDismissChange` is called every time a different dismiss state is suggested with two arguments:

- The expected state
- The reason for the change

There are currently four possible reasons for such a change:

- The viewport width exceeds the breakpoint ('above breakpoint')
- The viewport width is larger than the breakpoint ('below breakpoint')
- The drawer was dismissed by user interaction, either pressing `Escape` ('escape') or clicking on the backdrop ('backdrop')
- The drawer was opened by clicking on the panel hint when using `integratedControls` ('panel hint')

**Controlled**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Page, TitleBar } from '@dynatrace/strato-components/layouts';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';
import { SettingIcon } from '@dynatrace/strato-icons';

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

const Controlled = () => {
  const [isDetailViewDismissed, setIsDetailViewDismissed] =
    useState<boolean>(false);
  const [isSidebarDismissed, setIsSidebarDismissed] = useState<boolean>(false);

  return (
    <Page>
      <Page.Header>MyApp</Page.Header>
      <Page.Sidebar
        minWidth={200}
        resizable={false}
        // highlight-start
        dismissed={isSidebarDismissed}
        onDismissChange={(state) => setIsSidebarDismissed(state)}
        // highlight-end
      >
        <TitleBar>
          <TitleBar.Title>Sidebar</TitleBar.Title>
          <TitleBar.Subtitle>e.g. for navigation</TitleBar.Subtitle>
          <TitleBar.Action>
            <Page.PanelControlButton
              onClick={() => setIsSidebarDismissed(true)}
            />
          </TitleBar.Action>
        </TitleBar>
      </Page.Sidebar>
      <Page.Main style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar>
          <TitleBar.Prefix>
            <Page.PanelControlButton
              onClick={() => setIsSidebarDismissed(!isSidebarDismissed)}
            />
          </TitleBar.Prefix>
          <TitleBar.Title>Main</TitleBar.Title>
          <TitleBar.Subtitle>
            Place your main content in this area
          </TitleBar.Subtitle>
          <TitleBar.Action>
            <Page.PanelControlButton
              onClick={() => setIsDetailViewDismissed(!isDetailViewDismissed)}
            >
              <Button.Prefix>
                <SettingIcon />
              </Button.Prefix>
            </Page.PanelControlButton>
          </TitleBar.Action>
        </TitleBar>
        <Placeholder />
      </Page.Main>
      <Page.DetailView
        // highlight-start
        dismissed={isDetailViewDismissed}
        onDismissChange={(state) => setIsDetailViewDismissed(state)}
        // highlight-end
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TitleBar>
          <TitleBar.Title>Settings</TitleBar.Title>
          <TitleBar.Subtitle>
            For content related to the main area
          </TitleBar.Subtitle>
          <TitleBar.Action>
            <Page.PanelControlButton
              onClick={() => setIsDetailViewDismissed(true)}
            />
          </TitleBar.Action>
        </TitleBar>
        <Placeholder />
      </Page.DetailView>
    </Page>
  );
};
```
