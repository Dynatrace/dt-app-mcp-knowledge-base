## XYChartAnnotations.Track

`XYChartAnnotations.Track` provides a slot for defining a track in the `XYChart.Annotations`.

**`XYChartAnnotationsMarkerProps`**

| Prop                         | Type                                                       | Default                                     | Description                                                                                                                             |
| ---------------------------- | ---------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `startAccessor` (required)   | `string`                                                   |                                             | Indicates what data field from the data object should be used as the start point for the markers                                        |
| `endAccessor` (required)     | `string`                                                   |                                             | Indicates what data field from the data object should be used as the end point of the markers                                           |
| `trackByAccessor` (required) | `string`                                                   |                                             | Indicates what data field from the data object should be used to link this marker to a track. It must contain the unique id of a track. |
| `descriptionAccessor`        | `string`                                                   |                                             | Indicates what data field from the data object should be used as the description of each marker                                         |
| `colorAccessor`              | `string`                                                   | `Colors.Charts.Categorical.Color01.Default` | Indicates what data field from the data object should be used as the color of each marker                                               |
| `symbolColorAccessor`        | `string`                                                   |                                             | Indicates what data field from the data object should be used as the symbol color of each marker                                        |
| `titleAccessor`              | `string`                                                   |                                             | Indicates what data field from the data object should be used as the title of each marker                                               |
| `symbol`                     | `ReactNode \| ((t: unknown) => ReactNode)`                 |                                             | letter/emoji/icon/glyph or Unicode character                                                                                            |
| `indicatorsDisplay`          | `IndicatorsDisplay \| ((t: unknown) => IndicatorsDisplay)` |                                             | Defines the display behaviour of marker's indicators of a particular track                                                              |
| `hidden`                     | `boolean \| ((t: unknown) => boolean)`                     |                                             | Flag to hide a marker                                                                                                                   |
| `priority`                   | `number \| ((t: unknown) => number)`                       |                                             | Priority of annotation in case of overlapping. The higher the number, the higher priority                                               |
