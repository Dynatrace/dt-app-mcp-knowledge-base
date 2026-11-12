## XYChartAnnotations.Marker

`XYChartAnnotations.Marker` provides a slot for defining a marker in the `XYChart.Annotations`.

**`XYChartAnnotationsTrackProps`**

| Prop                         | Type                                                       | Default | Description                                                                               |
| ---------------------------- | ---------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| `trackIdAccessor` (required) | `string`                                                   |         | track Unique ID                                                                           |
| `labelAccessor`              | `string`                                                   |         | Indicates what data field from the data object should be used as the label for each track |
| `colorAccessor`              | `string`                                                   |         | Indicates what data field from the data object should be used as the color of each track  |
| `symbol`                     | `ReactNode \| ((t: unknown) => ReactNode)`                 |         | letter/emoji/icon/glyph or Unicode character                                              |
| `indicatorsDisplay`          | `IndicatorsDisplay \| ((t: unknown) => IndicatorsDisplay)` |         | Defines the display behaviour of marker's indicators of the entire track                  |
| `hidden`                     | `boolean \| ((t: unknown) => boolean)`                     |         | Flag to hide a track                                                                      |
