## Tooltip

**`DotLayerTooltipData`**

| Prop                 | Type     | Default | Description                              |
| -------------------- | -------- | ------- | ---------------------------------------- |
| `color` (required)   | `string` |         | The hovered dot color                    |
| `bearing` (required) | `number` |         | The hovered dot bearing                  |
| `data` (required)    | `T`      |         | The hovered dot custom data and location |

**`DotLayerTooltipHandler`**

```ts
export declare type DotLayerTooltipHandler = (dotData: DotLayerTooltipData) => ReactNode | null;
```

**`DotLayerTooltipHandlerProps`**

| Prop              | Type                                        | Default | Description                                          |
| ----------------- | ------------------------------------------- | ------- | ---------------------------------------------------- |
| `children`        | `DotLayerTooltipHandler \| null`            |         | The DotLayer tooltip handler template                |
| `seriesActions`   | `(data: Location) => SeriesActionsTemplate` |         | Series actions callback for the default tooltip      |
| `hidden`          | `boolean`                                   |         | Whether the tooltip is hidden                        |
| `symbolAlignment` | `'left' \| 'right'`                         |         | Overrides the horizontal alignment of series symbols |
