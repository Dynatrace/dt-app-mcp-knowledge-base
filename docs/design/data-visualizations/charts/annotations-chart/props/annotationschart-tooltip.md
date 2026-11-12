## AnnotationsChart.Tooltip

`AnnotationsChart.Tooltip` provides a slot to configure the Tooltip of the chart.

**`AnnotationsTooltipProps`**

| Prop       | Type                        | Default | Description                                   |
| ---------- | --------------------------- | ------- | --------------------------------------------- |
| `hidden`   | `boolean`                   | `false` | Defines whether tooltip show be hidden or not |
| `children` | `AnnotationsTooltipHandler` |         | The ChoroplethLayer tooltip handler template  |

**`AnnotationsTooltipHandler`**

```ts
export declare type AnnotationsTooltipHandler = (hoveredMarkers: AnnotationsTooltipItem[], closeMarkers: AnnotationsTooltipItem[][]) => ReactNode;
```

**`AnnotationsTooltipItem`**

| Prop               | Type             | Default | Description                                                                                  |
| ------------------ | ---------------- | ------- | -------------------------------------------------------------------------------------------- |
| `start` (required) | `Date \| number` |         | Starting point of the marker                                                                 |
| `end`              | `Date \| number` |         | Ending point of the marker. If not set, the marker will represent a value instead of a range |
| `color` (required) | `string`         |         | The marker background color                                                                  |
| `title`            | `string`         |         | The marker title                                                                             |
| `description`      | `string`         |         | The marker description                                                                       |
| `symbol`           | `ReactNode`      |         | The marker symbol                                                                            |
