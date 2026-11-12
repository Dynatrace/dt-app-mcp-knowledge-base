## Minimum size behavior

When the `XYChart` is rendered in a small container, it automatically hides elements that would otherwise be clipped or unusable. No configuration is needed — this happens based on the available chart height.

| Chart height | What is shown                                |
| ------------ | -------------------------------------------- |
| ≥ 160 px     | Plot area, axes, and annotations             |
| ≥ 50 px      | Plot area and axes (annotations hidden)      |
| \< 50 px     | Plot area only (axes and annotations hidden) |

This graceful degradation is especially useful in dashboards where chart tiles can be resized to very small dimensions.
