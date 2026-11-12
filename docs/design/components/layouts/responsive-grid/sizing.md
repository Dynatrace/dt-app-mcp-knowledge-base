## Sizing

The wrapper is a size container (`container-type: inline-size`), so its content can't determine its size. The wrapper collapses inside the following: `width: fit-content`, a flex row item without `flex` or `width`, or a table cell. Make sure `ResponsiveGrid` takes its width from a parent.
