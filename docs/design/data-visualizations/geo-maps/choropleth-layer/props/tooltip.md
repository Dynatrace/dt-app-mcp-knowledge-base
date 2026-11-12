## Tooltip

**`ChoroplethLayerTooltipData`**

| Prop               | Type                                                             | Default | Description                                     |
| ------------------ | ---------------------------------------------------------------- | ------- | ----------------------------------------------- |
| `color` (required) | `string`                                                         |         | The hovered region color                        |
| `name` (required)  | `string`                                                         |         | The hovered region name                         |
| `data` (required)  | `T`                                                              |         | The hovered region custom data                  |
| `seriesActions`    | `(data: ChoroplethLayerTooltipData<T>) => SeriesActionsTemplate` |         | Series actions callback for the default tooltip |

**`ChoroplethLayerTooltipHandler`**

```ts
export declare type ChoroplethLayerTooltipHandler = (regionData: ChoroplethLayerTooltipData) => ReactNode;
```

**`ChoroplethLayerTooltipHandlerProps`**

| Prop              | Type                                                          | Default | Description                                          |
| ----------------- | ------------------------------------------------------------- | ------- | ---------------------------------------------------- |
| `children`        | `ChoroplethLayerTooltipHandler \| null`                       |         | The ChoroplethLayer tooltip handler template         |
| `seriesActions`   | `(data: ChoroplethLayerTooltipData) => SeriesActionsTemplate` |         | Series actions callback for the default tooltip      |
| `hidden`          | `boolean`                                                     |         | Whether the tooltip is hidden                        |
| `symbolAlignment` | `'left' \| 'right'`                                           |         | Overrides the horizontal alignment of series symbols |
