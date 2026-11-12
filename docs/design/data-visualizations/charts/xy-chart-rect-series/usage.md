## Usage

To display a `RectSeries`, add the `XYChart.RectSeries` subcomponent within the `XYChart` component.

This series requires five essential properties that will function as data accessors:

- `x0Accessor`: indicates what data should be used as the start point for the x-axis baseline.
- `x1Accessor`: indicates what data should be used as the end point for the x-axis baseline. Not required for categorical-type axes.
- `y0Accessor`: indicates what data should be used as the start point for the y-axis baseline.
- `y1Accessor`: indicates what data should be used as the end point for the y-axis baseline. Not required for categorical-type axes.
- `valueAccessor`: indicates what data should be used as the tile value, which represents the intensity of the tile color.

These accessors will extract the specified data from the provided object array via the `data` property. It’s crucial to note that the accessors are used to construct each cell’s dimensions; incorrect specification of any accessor will result in an inability to generate the correct rect series.

Additionally, a `XYChart.RectSeries` will need to be assigned to at least one x-axis and one y-axis via valid `xAxisId` and `yAxisId` properties. For a more detailed explanation of the axis configuration, please refer to the [XYChart docs](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md).

**RectSimple**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const standardData = [
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 20000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 65000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 35000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 35000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 30000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 55000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 20000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 45000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal: { start: 150, end: 200 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 150, end: 200 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-03', end: '2023-01-04' },
    value: 35000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-04', end: '2023-01-05' },
    value: 20000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-05', end: '2023-01-06' },
    value: 45000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-01', end: '2023-01-02' },
    value: 55000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-02', end: '2023-01-03' },
    value: 35000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-03', end: '2023-01-04' },
    value: 65000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-04', end: '2023-01-05' },
    value: 20000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-05', end: '2023-01-06' },
    value: 75000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-06', end: '2023-01-07' },
    value: 45000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-01', end: '2023-01-02' },
    value: 30000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-03', end: '2023-01-04' },
    value: 65000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-04', end: '2023-01-05' },
    value: 20000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-05', end: '2023-01-06' },
    value: 20000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-06', end: '2023-01-07' },
    value: 30000,
  },
];

const RectSimple = () => {
  return (
    <XYChart data={standardData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal2.start"
        x1Accessor="horizontal2.end"
        y0Accessor="vertical2.start"
        y1Accessor="vertical2.end"
        valueAccessor="value"
        colorPalette="pink"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="time" position="left" />
    </XYChart>
  );
};
```

The `XYChart.RectSeries` subcomponent includes some other optional properties: `data`, `colorPalette`, `valueAccessorLabel`, `valueUnit`, `valueFormatter`, `valueMin`, `valueMax` and `actions`.

The `data` and `colorPalette` properties can be used to overwrite the `XYChart` component for a specific series.

### Data

The data provided to the `RectSeries` component via the `data` property will be used in combination with the accessors of each series.

### Coloring

By using the `colorPalette` property in the `RectSeries` you can overwrite the coloring from the `XYChart` component. For more information about how to use coloring in the chart you can refer to the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

#### Color rules

`ColorRules` are advanced coloring tools for the chart, allowing you to apply conditional coloring based on data values. See more details in the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

#### Overlapping tiles

The sides of the tiles can be defined freely, in case of overlapping amongst two or more tiles, these will transparent through one another and show a mixed color.

**OverlappingTiles**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const standardData = [
  {
    horizontal: { start: 0, end: 3 },
    vertical: { start: '2023-01-01', end: '2023-01-03' },
    value: 4,
  },
  {
    horizontal: { start: 0, end: 3 },
    vertical: { start: '2023-01-03', end: '2023-01-05' },
    value: 2,
  },
  {
    horizontal: { start: 2, end: 6 },
    vertical: { start: '2023-01-02', end: '2023-01-04' },
    value: 1,
  },
];

const OverlappingTiles = () => {
  return (
    <XYChart data={standardData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="time" position="left" />
    </XYChart>
  );
};
```

#### Min and max values

By setting the `valueMin` and `valueMax` properties, you can establish boundaries for all values. Values outside these boundaries will display a default color. Note that string values are not affected by these boundaries and will display their original color.

**MinMaxValue**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const standardData = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const MinMaxValue = () => {
  return (
    <XYChart data={standardData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
        // highlight-start
        valueMin={35000}
        valueMax={60000}
        // highlight-end
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Value label

Given the `valueAccessor` depends on how the data is named and structured, the final result can be complicated to understand for the user. By using the property `valueAccessorLabel` any name can be set in order to identify the value.

**ValueAccessorLabel**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const standardData = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const ValueAccessorLabel = () => {
  return (
    <XYChart data={standardData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
        // highlight-next-line
        valueAccessorLabel="Custom value label"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Unit and formatter

You can apply a unit and formatter to the data extracted by the `valueAccessor` via `valueUnit` and `valueFormatter` as long as it is of type number. If the data is of type string then these properties will be disregarded.

**ValueAccessorFormatter**

```tsx
import { units } from '@dynatrace-sdk/units';
import { XYChart } from '@dynatrace/strato-components/charts';

const standardData = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const ValueAccessorFormatter = () => {
  return (
    <XYChart data={standardData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
        // highlight-start
        valueFormatter={{
          input: units.length.centimeter,
          output: units.length.meter,
        }}
        // highlight-end
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

**ValueAccessorUnit**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const standardData = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const ValueAccessorUnit = () => {
  return (
    <XYChart data={standardData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
        // highlight-next-line
        valueUnit="people/h"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `XYChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useMemo, useState } from 'react';

import {
  XYChart,
  XYChartRectSeriesActionItem,
  ChartSeriesAction,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { DatabaseIcon, MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const categoricalDataset = [
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person1' },
    events: 'Error',
  },
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person2' },
    events: 'Info',
  },
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person3' },
    events: 'Warning',
  },
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person4' },
    events: 'Warning',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person1' },
    events: 'Error',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person2' },
    events: 'Error',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person3' },
    events: 'Warning',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person4' },
    events: 'Info',
  },
];

const SeriesActions = () => {
  const [selectedTile, setSelectedTile] =
    useState<XYChartRectSeriesActionItem>();

  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];

  const data = useMemo(() => {
    if (selectedTile) {
      const { value, x0, x1, y0, y1, ...rest } = selectedTile;
      const tableData = [
        { key: 'x0', value: x0 },
        { key: 'x1', value: x1 },
        { key: 'y0', value: y0 },
        { key: 'y1', value: y1 },
        { key: 'Value', value: value },
        { key: 'Rest', value: JSON.stringify(rest) },
      ];

      return [...tableData];
    }
    return [];
  }, [selectedTile]);

  return (
    <>
      <XYChart data={categoricalDataset} colorPalette="categorical">
        <XYChart.RectSeries
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="amountRange.start"
          x1Accessor="amountRange.end"
          y0Accessor="peopleRange.start"
          valueAccessor="events"
          // highlight-start
          actions={(selectedCell) => {
            return (
              <ChartSeriesAction>
                <ChartSeriesAction.Item
                  onSelect={() => {
                    setSelectedTile(selectedCell);
                  }}
                >
                  <ChartSeriesAction.ItemIcon>
                    <MagnifyingGlassIcon />
                  </ChartSeriesAction.ItemIcon>
                  Inspect the tile
                </ChartSeriesAction.Item>
                <ChartSeriesAction.Item disabled onSelect={() => void 0}>
                  <ChartSeriesAction.ItemIcon>
                    <DatabaseIcon />
                  </ChartSeriesAction.ItemIcon>
                  A disabled action
                </ChartSeriesAction.Item>
              </ChartSeriesAction>
            );
          }}
          // highlight-end
        />
        <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-axis" type="categorical" position="left" />
      </XYChart>
      {selectedTile && (
        <>
          <h4>Selected Series</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```

**SeriesActionsAsync**

```tsx
import { useMemo, useState } from 'react';

import {
  XYChart,
  XYChartRectSeriesActionItem,
  ChartSeriesAction,
  type SeriesActionsTemplate,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { DatabaseIcon, MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const categoricalDataset = [
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person1' },
    events: 'Error',
  },
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person2' },
    events: 'Info',
  },
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person3' },
    events: 'Warning',
  },
  {
    amountRange: { start: 0, end: -10 },
    peopleRange: { start: 'Person4' },
    events: 'Warning',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person1' },
    events: 'Error',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person2' },
    events: 'Error',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person3' },
    events: 'Warning',
  },
  {
    amountRange: { start: -10, end: -20 },
    peopleRange: { start: 'Person4' },
    events: 'Info',
  },
];

const SeriesActionsAsync = () => {
  const [selectedTile, setSelectedTile] =
    useState<XYChartRectSeriesActionItem>();

  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];

  const data = useMemo(() => {
    if (selectedTile) {
      const { value, x0, x1, y0, y1, ...rest } = selectedTile;
      const tableData = [
        { key: 'x0', value: x0 },
        { key: 'x1', value: x1 },
        { key: 'y0', value: y0 },
        { key: 'y1', value: y1 },
        { key: 'Value', value: value },
        { key: 'Rest', value: JSON.stringify(rest) },
      ];

      return [...tableData];
    }
    return [];
  }, [selectedTile]);

  const seriesActions = (selectedCell: XYChartRectSeriesActionItem) => {
    return (
      <ChartSeriesAction>
        <ChartSeriesAction.Item
          onSelect={() => {
            setSelectedTile(selectedCell);
          }}
        >
          <ChartSeriesAction.ItemIcon>
            <MagnifyingGlassIcon />
          </ChartSeriesAction.ItemIcon>
          Inspect the tile (async)
        </ChartSeriesAction.Item>
        <ChartSeriesAction.Item disabled onSelect={() => void 0}>
          <ChartSeriesAction.ItemIcon>
            <DatabaseIcon />
          </ChartSeriesAction.ItemIcon>
          A disabled action
        </ChartSeriesAction.Item>
      </ChartSeriesAction>
    );
  };

  const handleSeriesActions = (
    selectedCell: XYChartRectSeriesActionItem,
  ): SeriesActionsTemplate => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(seriesActions(selectedCell));
      }, 500);
    });
  };

  return (
    <>
      <XYChart data={categoricalDataset} colorPalette="categorical">
        <XYChart.RectSeries
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="amountRange.start"
          x1Accessor="amountRange.end"
          y0Accessor="peopleRange.start"
          valueAccessor="events"
          // highlight-next-line
          actions={handleSeriesActions}
        />
        <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-axis" type="categorical" position="left" />
      </XYChart>
      {selectedTile && (
        <>
          <h4>Selected Series</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```

### Custom tooltip

Pass a render function as the `XYChart.Tooltip` slot children to take full control over what is displayed when a data point is hovered. The render function receives a payload object whose `rectPayload` key is set when a `RectSeries` point is active. `rectPayload` exposes:

- `seriesName` — the name of the hovered series.
- `color` — the resolved color of the series.
- `datapoint` — the original data record (with accessor values such as `x0`, `y0`, etc.).

Return any JSX to render a custom tooltip, `null` to hide it for a specific series, or `undefined` to fall back to the default tooltip. You can also set `hidden` on `XYChart.Tooltip` to suppress the tooltip entirely.

**Tooltip**

```tsx
import {
  ChartTooltip,
  XYChart,
  type XYChartTooltipPayload,
} from '@dynatrace/strato-components/charts';

const standardData = [
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 20000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 65000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 35000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 35000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 30000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
];

const tooltipRenderer = (payload: XYChartTooltipPayload) => {
  if (payload.rectPayload && payload.rectPayload.seriesName === 'Series 2') {
    const { color, seriesName } = payload.rectPayload;
    const { x0, x1, y0, y1, value } = payload.rectPayload.datapoint;
    return (
      <>
        <ChartTooltip.SeriesItem
          color={color}
          name={seriesName}
          value={String(value)}
        />
        <ChartTooltip.SeriesItem
          color="var(--dt-colors-charts-categorical-default-08)"
          name="Range"
          value={`[${String(x0)} – ${String(x1)}] × [${String(y0)} – ${String(
            y1,
          )}]`}
        />
      </>
    );
  }
  return null;
};

const Tooltip = () => {
  return (
    <XYChart data={standardData}>
      {/* highlight-start */}
      <XYChart.Tooltip>{tooltipRenderer}</XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="time" position="left" />
    </XYChart>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data = [
  { x: { start: 0, end: 50 }, y: { start: 'Pipeline 1' }, value: 75 },
  { x: { start: 0, end: 50 }, y: { start: 'Pipeline 2' }, value: 20 },
  { x: { start: 0, end: 50 }, y: { start: 'Pipeline 3' }, value: 45 },
  { x: { start: 50, end: 100 }, y: { start: 'Pipeline 1' }, value: 60 },
  { x: { start: 50, end: 100 }, y: { start: 'Pipeline 2' }, value: 35 },
  { x: { start: 50, end: 100 }, y: { start: 'Pipeline 3' }, value: 80 },
];

const GlobalActions = () => {
  return (
    <XYChart data={data} height="300px">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (!payload.rectPayload) {
            return undefined;
          }
          return (
            <>
              <ChartTooltip.SeriesItem
                color={payload.rectPayload.color}
                name={payload.rectPayload.seriesName}
                value={String(payload.rectPayload.datapoint.value)}
              />
              <ChartTooltip.Footer
                actions={[
                  <ChartTooltip.Action
                    key="inspect"
                    label="Inspect entity"
                    icon={<MagnifyingGlassIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                  <ChartTooltip.Action
                    key="open"
                    label="Open in Notebooks"
                    icon={<OpenWithIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                ]}
                unpinnedPlaceholderText={undefined}
              />
            </>
          );
        }}
      </XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x.start"
        x1Accessor="x.end"
        y0Accessor="y.start"
        valueAccessor="value"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="categorical" position="left" />
    </XYChart>
  );
};
```
