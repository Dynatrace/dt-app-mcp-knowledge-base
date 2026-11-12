The `AnnotationsChart` is a visualization tool designed to highlight significant events or data points on a timeline or other graph types. It allows you to annotate specific moments with labels or markers, providing additional context or insights directly within the chart. This chart can be used standalone or integrated with other chart types, such `HistogramChart` or `TimeseriesChart`, to enrich the data presentation by drawing attention to each event.

**`AnnotationsChartProps`**

| Prop           | Type                  | Default  | Description                                                                                                                                                                                                                                                                            |
| -------------- | --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labelWidth`   | `number`              | `60`     | Custom width of the tracks labels.                                                                                                                                                                                                                                                     |
| `loading`      | `boolean`             | `false`  | Show the loading indicator when truly.                                                                                                                                                                                                                                                 |
| `height`       | `number \| string`    | `300px`  | The height of the chart. If a number is passed, it will be treated as px.                                                                                                                                                                                                              |
| `width`        | `number \| string`    | `"100%"` | The width of the chart. If a number is passed, it will be treated as px.                                                                                                                                                                                                               |
| `textOverflow` | `TextOverflowOptions` |          | Truncate will keep markers width                                                                                                                                                                                                                                                       |
| `truncateMode` | `TruncationMode`      |          | Where to truncate the text                                                                                                                                                                                                                                                             |
| `maxLines`     | `number`              | `1`      | Maximum number of lines used to clamp the default tooltip content (header text, series name, and series description). Values greater than \`1\` enable multi-line wrapping before truncation is applied. Combine with \`truncateMode\` to control where the overflow ellipsis appears. |

**`AnnotationsActionsHandler`**

```ts
export declare type AnnotationsActionsHandler = (data?: AnnotationsActionsPayload) => (() => SeriesActionsTemplate) | SeriesActionsTemplate | undefined;
```

**`AnnotationsActionsPayload`**

| Prop               | Type             | Default | Description                 |
| ------------------ | ---------------- | ------- | --------------------------- |
| `start` (required) | `number \| Date` |         | Selected marker start       |
| `end`              | `number \| Date` |         | Selected marker end         |
| `title`            | `string`         |         | Selected marker title       |
| `description`      | `string`         |         | Selected marker description |
| `symbol`           | `ReactNode`      |         | Selected marker symbol      |
