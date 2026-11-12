Breakpoints are used to adjust the layout and appearance of elements in the interface based on different screen sizes.

```ts
import Breakpoints from '@dynatrace/strato-design-tokens/breakpoints';
```

| Name                         | Value    | CSS variable                      | Description                                                                                           |
| ---------------------------- | -------- | --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Breakpoints.Max.Mobile`     | `640px`  | `--dt-breakpoints-max-mobile`     | Use with \`@media\` \`max-width\` to apply styles to mobile-sized screens.                            |
| `Breakpoints.Min.Tablet`     | `641px`  | `--dt-breakpoints-min-tablet`     | Use this with \`@media\` \`min-width\`, to apply styles to tablet and wider screen sizes.             |
| `Breakpoints.Max.Tablet`     | `960px`  | `--dt-breakpoints-max-tablet`     | Use with \`@media\` \`max-width\` to apply styles to tablets and smaller screens.                     |
| `Breakpoints.Min.Desktop`    | `961px`  | `--dt-breakpoints-min-desktop`    | Use this with \`@media\` \`min-width\`, to apply styles to desktop and wider screen sizes.            |
| `Breakpoints.Max.Desktop`    | `1920px` | `--dt-breakpoints-max-desktop`    | Use with \`@media\` \`max-width\` to apply styles to desktops and smaller screens.                    |
| `Breakpoints.Min.Widescreen` | `1921px` | `--dt-breakpoints-min-widescreen` | Use this with \`@media\` \`min-width\`, to apply styles to widescreen desktop and wider screen sizes. |
