## Responsive behavior

Below its configured `breakpoint`, a panel renders as a `Drawer` instead of a split layout, to preserve screen space. The breakpoint only selects the render mode. It never overwrites a controlled `collapsed`.

### Out of the box

- **`PageLayout.Sidebar`** (uncontrolled): auto-collapses to a closed drawer below the breakpoint and reopens above it, so the navigation never covers the content. These auto-changes fire `onCollapsedChange`.
- **`PageLayout.Details`**: never auto-collapses. `defaultCollapsed` (default `false`) is honored on every viewport, so an open, uncontrolled details panel shows as an *open* drawer below the breakpoint.
- **Any panel**: subscribe to `onBreakpointTransition(belowBreakpoint)` to react to breakpoint changes. It fires on the first measurement and on every crossing, and never changes a controlled `collapsed` for you. Update `collapsed` yourself if you want to.

### Layout hierarchy

`PageLayout.Sidebar` and `PageLayout.Details` each have a `breakpoint` prop, but they measure different widths:

- **`PageLayout.Sidebar`** - `breakpoint` is measured against the full `PageLayout` container width.
- **`PageLayout.Details`** - `breakpoint` is measured against the combined width of the `Content` + `Details` area, to the right of the sidebar.

This means the two breakpoints fire independently. When the sidebar is expanded, it consumes page width and shrinks the content + details area. A details panel with `breakpoint={600}` may collapse to a drawer even when the full page is wider than 600 px.

The same rule applies to width props: `minWidth`, `maxWidth`, and `defaultWidth` on `PageLayout.Details` are percentages of the content + details area, not the full page.
