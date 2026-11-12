## Details (optional)

The details panel is for content directly tied to a selection or entity shown in `PageLayout.Content`.

- Use it to show additional information related to the content area without forcing users to go to a new page.
- Don't use it to show content unrelated to the content area.
- Along with additional information, `Details` may be used for settings that configure an item in the content area.

### Width

The default width for the details panel is 25% of the full screen width for screen sizes below 1920px. Above that size, 30% of screen size is recommended. However, the panel can be customized to other widths as well and is also resizable. The minimum width of the panel is 320px. Its maximum default width is 100% of the screen size.

### Split view

In split view, the details panel and the content area are shown side by side, just below the app header.

Use details panel exclusively as a split view when:

- The `Content` and details panel should show all their information simultaneously.
- The details panel must not be closed.

![Example of a split view where the full content area is visible to the left of the details panel.](https://developer.dynatrace.com/assets/images/pagelayout-splitview-light-fe08f0ecab8a7674e4032662bd4e2788.webp)&#x20;

### Overlay view

In overlay view, the details panel lays over the content and doesn't reduce the width of the content area.

Use details panel exclusively as an overlay view when:

- Re-arranging or compressing the content area to make room for the details panel would diminish the experience.
- `Content` and `Details` must not be visible simultaneously.

Note that the overlay can only be closed with a button, not by clicking outside the panel.

![Example of an overlay view showing how the details panel lays on top of the content area, covering some of the content area.](../../components-docs-assets/pagelayout-overlay-light.webp)&#x20;

:::tip Keep overlay view accessible Use the overlay view with caution since it can obstruct focused elements in the content area. Be sure that the keyboard navigation follows a Z pattern. :::
