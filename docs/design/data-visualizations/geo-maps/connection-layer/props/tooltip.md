## Tooltip

**`ConnectionLayerTooltipData`**

| Prop                   | Type     | Default | Description                                           |
| ---------------------- | -------- | ------- | ----------------------------------------------------- |
| `color` (required)     | `string` |         | The hovered connection color                          |
| `thickness` (required) | `number` |         | The hovered connection thickness                      |
| `data` (required)      | `T`      |         | The hovered connection custom data and path locations |

**`ConnectionLayerTooltipHandler`**

```ts
export declare type ConnectionLayerTooltipHandler = (connectionData: ConnectionLayerTooltipData) => ReactNode;
```

**`ConnectionLayerTooltipHandlerProps`**

| Prop              | Type                                        | Default | Description                                          |
| ----------------- | ------------------------------------------- | ------- | ---------------------------------------------------- |
| `children`        | `ConnectionLayerTooltipHandler \| null`     |         | The ConnectionLayer tooltip handler template         |
| `seriesActions`   | `(data: Location) => SeriesActionsTemplate` |         | Series actions callback for the default tooltip      |
| `hidden`          | `boolean`                                   |         | Whether the tooltip is hidden                        |
| `symbolAlignment` | `'left' \| 'right'`                         |         | Overrides the horizontal alignment of series symbols |
