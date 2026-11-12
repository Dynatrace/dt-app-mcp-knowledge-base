## Layout

![Desktop layout with sidebar, content, and details panels side by side, compared to a mobile layout where the sidebar and details panels collapse behind the content](https://developer.dynatrace.com/assets/images/mobile-detailview-sidebar-mobile-light-98f64d49cc01b33a2c7b13a896e419a1.webp)

### Sidebar and Details

For the Sidebar panel and the Details panel of the `PageLayout` component, use the `defaultWidth` prop to set the panel width per breakpoint, rather than leaving it at the component default. Be sure to use the overlay mode for Details on mobile.

| Condition            | Recommendation                                            |
| -------------------- | --------------------------------------------------------- |
| Mobile (≤640px)      | `defaultWidth`: 85%, `maxWidth`: 85%                      |
| Tablet (641px–960px) | `defaultWidth`: 85% (overlay mode; `maxWidth` left unset) |

See the properties of the [PageLayout](https://developer.dynatrace.com/contents/docs/design/components/layouts/PageLayout/props.mdx/) component documentation for the full list of configuration options, including `minWidth`, `maxWidth`, and the `breakpoint` prop that controls when a panel collapses into a drawer.

Custom grids may contain different numbers of columns depending on the breakpoint. These are our recommendations for wrapping the blocks:

| Condition              | Recommendation |
| ---------------------- | -------------- |
| Mobile (≤640px)        | 1–4 columns    |
| Tablet (641px–960px)   | 1–6 columns    |
| Desktop (961px–1920px) | 1–12 columns   |
| Widescreen (>1920px)   | 1–12 columns   |

The wrapping order, alignment, and other grid parameters can be customized using the [grid properties](https://developer.dynatrace.com/contents/docs/design/components/layouts/Grid/index.mdx/).

![Do: at each breakpoint, related groups of blocks stay together and keep their relative proportions, compared to Don't: groups are split apart and lose their hierarchy when wrapped for tablet and mobile](https://developer.dynatrace.com/assets/images/mobile-retain-size-and-flex-growth-light-b071ba1587dc7a5642145a501648d66b.webp)

Keep in mind, similar groups should remain proportional, and hierarchy should be preserved at each breakpoint. Don't override the proportions of elements and containers relative to their similar siblings or underlying items.

### Tables

| Condition                                                                                            | Recommendation                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Table needs to render in a narrow or mobile-width container                                          | Use [DataTable](https://developer.dynatrace.com/contents/docs/design/components/tables/DataTable/index.mdx/), not [SimpleTable](https://developer.dynatrace.com/contents/docs/design/components/tables/SimpleTable/index.mdx/)—it lacks the overflow, sizing behavior narrow containers need. |
| Table requires horizontal scroll as a fallback                                                       | Acceptable, but may not be clear.                                                                                                                                                                                                                                                             |
| Low-priority columns need to be hidden at narrow widths                                              | Combine `columnVisibility`, `onColumnVisibilityChange` with `useBreakpoint` to control visibility per breakpoint—`defaultColumnVisibility` only seeds the initial state.                                                                                                                      |
| The visibility-settings modal needs warnings or an error threshold for the number of visible columns | Use `maxWarning` and `maxError` on `DataTable.VisibilitySettings` to configure non-blocking and blocking thresholds.                                                                                                                                                                          |
