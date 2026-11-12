## AnnotationsChart.Marker

**`AnnotationsMarkerProps`**

```ts
export declare type AnnotationsMarkerProps = BaseMarkerProps & (TimeMarkerProps | NumericalMarkerProps);
```

**`BaseMarkerProps`**

| Prop          | Type        | Default                                     | Description                                                                                                                                                                                                                      |
| ------------- | ----------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `string`    |                                             | The marker title                                                                                                                                                                                                                 |
| `symbol`      | `ReactNode` |                                             | The marker symbol, which can be a letter, an emoji, an icon or a Unicode character                                                                                                                                               |
| `description` | `string`    |                                             | The marker description                                                                                                                                                                                                           |
| `color`       | `string`    | `Colors.Charts.Categorical.Color01.Default` | The marker background, supporting any valid CSS color                                                                                                                                                                            |
| `symbolColor` | `string`    |                                             | The color applied to the marker symbol (text or SVG icon). When not set, the color is determined automatically using WCAG contrast logic based on the marker background color.                                                   |
| `priority`    | `number`    | `0`                                         | The priority of the marker, which can be used to specify which marker will be rendered on top of the other, in case of overlapping, and also will specify the order of the tooltip items in case of having the same range/value. |
| `hidden`      | `boolean`   | `false`                                     | Specify whether a particular marker should hide.                                                                                                                                                                                 |

**`TimeMarkerProps`**

| Prop               | Type   | Default | Description                                                                                   |
| ------------------ | ------ | ------- | --------------------------------------------------------------------------------------------- |
| `start` (required) | `Date` |         | Starting point of the marker                                                                  |
| `end`              | `Date` |         | Ending point of the marker. If not set, the marker will be a timestamp instead of a timeframe |

**`NumericalMarkerProps`**

| Prop               | Type     | Default | Description                                                                                  |
| ------------------ | -------- | ------- | -------------------------------------------------------------------------------------------- |
| `start` (required) | `number` |         | Starting point of the marker                                                                 |
| `end`              | `number` |         | Ending point of the marker. If not set, the marker will represent a value instead of a range |
