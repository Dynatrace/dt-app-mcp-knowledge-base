## PageLayout.Sidebar

The `PageLayout.Sidebar` is the optional left panel. It collapses to a drawer when the container width drops below the `breakpoint`.

**`PageLayoutSidebarProps`**

| Prop           | Type         | Default | Description                                                                           |
| -------------- | ------------ | ------- | ------------------------------------------------------------------------------------- |
| `minWidth`     | `PanelWidth` | `200`   | The minimum width of the sidebar panel. Accepts a pixel value or a percentage string. |
| `maxWidth`     | `PanelWidth` | `'50%'` | The maximum width of the sidebar panel. Accepts a pixel value or a percentage string. |
| `defaultWidth` | `PanelWidth` | `'15%'` | The initial width of the sidebar panel. Accepts a pixel value or a percentage string. |
| `breakpoint`   | `number`     | `960`   | Container width in pixels below which the sidebar panel collapses to a drawer.        |
