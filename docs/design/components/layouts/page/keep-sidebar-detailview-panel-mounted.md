## Keep Sidebar / DetailView panel mounted

By default, when the `Page.Sidebar` or `Page.DetailView` content is not visible to the user, it will also be removed from the DOM to prevent unwanted component updates on hidden elements. If you want to keep the content in the DOM to preserve the state, you can set the `keepMounted` prop on the component.

> **Note: Known limitation**
>
> The `keepMounted` approach we are using currently doesn't work with e.g. `react-router-dom` and `Outlet` components nested in the panels, because the rendered react nodes end up in a different position in the react tree, losing the original context. For now, if you need to keep more complex components mounted, you have to implement it in your app.

**KeepMounted**

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

const KeepMounted = () => {
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
      <Page.Sidebar keepMounted>
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
