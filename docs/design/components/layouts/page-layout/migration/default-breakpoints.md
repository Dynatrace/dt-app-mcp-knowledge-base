# Default breakpoints

The default breakpoints have changed:

| Panel     | `Page`    | `PageLayout` |
| --------- | --------- | ------------ |
| `Sidebar` | `640 px`  | `960 px`     |
| `Details` | `1280 px` | `600 px`     |

Review your existing breakpoint overrides after migrating. The new defaults are intentionally wider for the sidebar, and narrower for the details.

## Reacting to breakpoint crossings

A breakpoint crossing won't overwrite a controlled `collapsed` or fire `onCollapsedChange` for a controlled panel. `onBreakpointTransition(belowBreakpoint)` fires on the first measurement and on every crossing; subscribe to it to keep `collapsed` in sync.

If you need a controlled panel to start collapsed on a narrow viewport, initialize your state from the callback rather than reading `window.innerWidth` yourself:

```tsx
const [collapsed, setCollapsed] = useState(false);

<PageLayout.Sidebar
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  onBreakpointTransition={(belowBreakpoint) => {
    if (belowBreakpoint) setCollapsed(true);
  }}
>
```

## PanelControlButton removed

`Page.PanelControlButton` has no direct replacement and expand controls on `PageLayout.Sidebar` are built-in and always enabled. For the `PageLayout.Details` use the `PageLayout.Details.ControlBar` or build your own button.

**Custom control:** Manage collapsed state with `collapsed` + `onCollapsedChange`, and wire your own button.

## keepMounted behavior

`PageLayout` always keeps panel content mounted. Local state, form values, and scroll position persist across collapse and expand cycles automatically.

- If you used `keepMounted={true}`, remove it. If you relied on unmount-on-close to reset state, reset explicitly in `onCollapsedChange`.

## Width type

`Page` accepted broad `PanelSize` values. In contrast, `PageLayout` narrows panel width props to `PanelWidth: number | "${n}%"`. Number values are treated as pixels. This applies to `defaultWidth`, `minWidth`, and `maxWidth`.

### Before and after

```tsx
// Before
import { Page } from '@dynatrace/strato-components/layouts';

<Page>
  <Page.Header>Header</Page.Header>
  <Page.Sidebar integratedControls>Sidebar</Page.Sidebar>
  <Page.Main>Content</Page.Main>
  <Page.DetailView>Details</Page.DetailView>
</Page>;
```

```tsx
// After
import { PageLayout } from '@dynatrace/strato-components/layouts';

<PageLayout>
  <PageLayout.Header>Header</PageLayout.Header>
  <PageLayout.Sidebar>Sidebar</PageLayout.Sidebar>
  <PageLayout.Content>Content</PageLayout.Content>
  <PageLayout.Details>Details</PageLayout.Details>
</PageLayout>;
```

#### Controlled sidebar

```tsx
const [collapsed, setCollapsed] = useState(false);

<PageLayout>
  <PageLayout.Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>
    Sidebar
  </PageLayout.Sidebar>
  <PageLayout.Content>
    <button onClick={() => setCollapsed((c) => !c)}>Toggle sidebar</button>
    Content
  </PageLayout.Content>
</PageLayout>;
```
