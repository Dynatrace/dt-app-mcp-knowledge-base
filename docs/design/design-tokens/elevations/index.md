Elevations determine the stacking order of items, the z-index.

```ts
import Elevations from '@dynatrace/strato-design-tokens/elevations';
```

| Name                      | Value        | CSS variable                   | Description                                                                                                |
| ------------------------- | ------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `Elevations.Default`      | `1`          | `--dt-elevations-default`      | Use as the default layer, for elements that do not need to be explicitly layered on top of other elements. |
| `Elevations.Sticky`       | `10`         | `--dt-elevations-sticky`       | Use for elements that are pinned to a certain location while also staying on top of other content.         |
| `Elevations.Overlay`      | `20`         | `--dt-elevations-overlay`      | Use for elements that appear on top of all other content on the page.                                      |
| `Elevations.Notification` | `1999999999` | `--dt-elevations-notification` | Use for notifications that should always be visible on top of other content.                               |
