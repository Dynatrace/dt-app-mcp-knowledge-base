## Integrated controls

The page can show integrated controls to dismiss and close the `Sidebar` panel, without you having to manually add buttons to your content sections. You can enable this feature by setting the `integratedControls` prop on the `Sidebar` component. Integrated controls show when hovering the `Sidebar` panel or when the panel is dismissed.

**IntegratedControls**

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

const IntegratedControls = () => {
  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppHeader.Navigation>
            <AppHeader.Logo appName="MyApp" />
          </AppHeader.Navigation>
        </AppHeader>
      </Page.Header>
      {/* highlight-next-line */}
      <Page.Sidebar integratedControls>
        <TitleBar>
          <TitleBar.Title>Sidebar</TitleBar.Title>
          <TitleBar.Subtitle>e.g. for navigation</TitleBar.Subtitle>
        </TitleBar>
      </Page.Sidebar>
      <Page.Main style={{ display: 'flex', flexDirection: 'column' }}>
        <TitleBar>
          <TitleBar.Title>Main</TitleBar.Title>
          <TitleBar.Subtitle>
            Place your main content in this area
          </TitleBar.Subtitle>
          <TitleBar.Action>
            {/* highlight-start */}
            <Page.PanelControlButton target="details" />
            {/* highlight-end */}
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
            {/* highlight-start */}
            <Page.PanelControlButton />
            {/* highlight-end */}
          </TitleBar.Action>
        </TitleBar>
        <Placeholder />
      </Page.DetailView>
    </Page>
  );
};
```
