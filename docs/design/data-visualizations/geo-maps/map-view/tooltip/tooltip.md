### Tooltip

The `MapView` component displays a tooltip by default when hovering over data points from any of the data layers. Every data layer has its own default tooltip due to differences in data shape.

To customize the tooltip, add a `Tooltip` subcomponent inside the data layer (e.g. `DotLayer.Tooltip`, `BubbleLayer.Tooltip`, etc.) and provide a custom template as children. When a `Tooltip` subcomponent is provided without children, the default tooltip is used.

To hide the tooltip entirely, set the `hidden` prop on the layer's `Tooltip` subcomponent:

```tsx
<DotLayer.Tooltip hidden />
```
