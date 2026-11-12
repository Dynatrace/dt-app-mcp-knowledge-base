## Demo

**Basic**

```tsx
import {
  AppHeader,
  Page,
  TitleBar,
} from '@dynatrace/strato-components/layouts';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

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

const Basic = () => {
  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppHeader.Navigation>
            <AppHeader.Logo appName="MyApp" />
          </AppHeader.Navigation>
        </AppHeader>
      </Page.Header>
      <Page.Sidebar>
        <TitleBar>
          <TitleBar.Title>Sidebar</TitleBar.Title>
          <TitleBar.Subtitle>e.g. for navigation</TitleBar.Subtitle>
          <TitleBar.Action>
            <Page.PanelControlButton />
          </TitleBar.Action>
        </TitleBar>
      </Page.Sidebar>
      <Page.Main style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar>
          <TitleBar.Prefix>
            <Page.PanelControlButton target="sidebar" />
          </TitleBar.Prefix>
          <TitleBar.Title>Main</TitleBar.Title>
          <TitleBar.Subtitle>
            Place your main content in this area
          </TitleBar.Subtitle>
          <TitleBar.Action>
            <Page.PanelControlButton />
          </TitleBar.Action>
        </TitleBar>
        <Placeholder />
      </Page.Main>
      <Page.DetailView style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar>
          <TitleBar.Title>Settings</TitleBar.Title>
          <TitleBar.Subtitle>
            For content related to the main area
          </TitleBar.Subtitle>
          <TitleBar.Action>
            <Page.PanelControlButton />
          </TitleBar.Action>
        </TitleBar>
        <Placeholder />
      </Page.DetailView>
    </Page>
  );
};
```
