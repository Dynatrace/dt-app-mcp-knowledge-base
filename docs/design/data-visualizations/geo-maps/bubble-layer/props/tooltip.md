## Tooltip

**`BubbleLayerTooltipData`**

| Prop                | Type     | Default | Description                                 |
| ------------------- | -------- | ------- | ------------------------------------------- |
| `color` (required)  | `string` |         | The hovered bubble color                    |
| `radius` (required) | `number` |         | The hovered bubble radius                   |
| `data` (required)   | `T`      |         | The hovered bubble custom data and location |

**`BubbleLayerTooltipHandler`**

```ts
export declare type BubbleLayerTooltipHandler = (closestDot: BubbleLayerTooltipData, dotsData: BubbleLayerTooltipData[]) => ReactNode | null;
```

**`BubbleLayerTooltipHandlerProps`**

| Prop              | Type                                            | Default | Description                                          |
| ----------------- | ----------------------------------------------- | ------- | ---------------------------------------------------- |
| `children`        | `BubbleLayerTooltipHandler \| null`             |         | The BubbleLayer tooltip handler template             |
| `seriesActions`   | `(location: Location) => SeriesActionsTemplate` |         | Series actions callback for the default tooltip      |
| `hidden`          | `boolean`                                       |         | Whether the tooltip is hidden                        |
| `symbolAlignment` | `'left' \| 'right'`                             |         | Overrides the horizontal alignment of series symbols |
