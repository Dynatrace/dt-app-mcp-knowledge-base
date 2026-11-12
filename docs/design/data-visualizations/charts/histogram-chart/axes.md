## Axes

To configure the axes of the `HistogramChart`, the `HistogramChart.XAxis` and `HistogramChart.YAxis` subcomponents can be added. The `label` property sets the axis label. Axis scale boundaries can be set with the `min` and `max` props. Both `XAxis` and `YAxis` supports `linear` and `log` scales.

**Axes**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const nightPriceDistribution: HistogramSeries[] = [
  {
    name: 'Price',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 75,
      },
      {
        from: 20,
        to: 30,
        value: 300,
      },
      {
        from: 30,
        to: 40,
        value: 450,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 870,
      },
      {
        from: 60,
        to: 70,
        value: 890,
      },
      {
        from: 70,
        to: 80,
        value: 480,
      },
      {
        from: 80,
        to: 90,
        value: 520,
      },
      {
        from: 90,
        to: 100,
        value: 850,
      },
      {
        from: 100,
        to: 110,
        value: 730,
      },
      {
        from: 110,
        to: 120,
        value: 630,
      },
      {
        from: 120,
        to: 130,
        value: 270,
      },
      {
        from: 130,
        to: 140,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 170,
        to: 180,
        value: 130,
      },
      {
        from: 180,
        to: 190,
        value: 430,
      },
      {
        from: 190,
        to: 200,
        value: 75,
      },
      {
        from: 200,
        to: 210,
        value: 89,
      },
      {
        from: 210,
        to: 220,
        value: 94,
      },
      {
        from: 220,
        to: 230,
        value: 63,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 60,
      },
      {
        from: 250,
        to: 260,
        value: 80,
      },
      {
        from: 260,
        to: 270,
        value: 70,
      },
      {
        from: 270,
        to: 280,
        value: 98,
      },
      {
        from: 280,
        to: 290,
        value: 89,
      },
      {
        from: 290,
        to: 300,
        value: 88,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 46,
      },
      {
        from: 320,
        to: 330,
        value: 55,
      },
    ],
  },
];

const Axes = () => {
  return (
    <HistogramChart data={nightPriceDistribution}>
      {/* highlight-start */}
      <HistogramChart.XAxis min={0} max={350} label="Bottom label" />
      <HistogramChart.YAxis min={0} max={900} label="Left label" />
      {/* highlight-end */}
    </HistogramChart>
  );
};
```

Both `HistogramChart.XAxis` and `HistogramChart.YAxis` subcomponents also support `data-max` in the `max` property and `data-min` in the `min` property. These special values allow for granular control over the Y-axis scale boundaries. By default, the `auto` value is used for both `min` and `max` properties. The `auto` mode automatically determines both the minimum and maximum values of the Y-axis scale based on the data in the chart (similar to `data-min` and `data-max`) and sets the Y-axis baseline to zero.

### Multiple Y-axes

The `HistogramChart` supports multiple Y-axes. `HistogramChart.YAxis` provides a `position` property which can be set to either `left` or `right`.

When you specify multiple Y-axes, the chart automatically assigns data series to Y-axes based on the unique units of the data. The first unique unit is assigned to the left Y-axis, and the second unique unit to the right Y-axis. Note that any additional data series with different units from those already used will not be displayed.

Currently, it's not possible to assign data series to specific Y-axes, nor is it possible to use the same unit for both Y-axes.

**MultipleYAxes**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const multipleSeriesOverlapped: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: -40,
        to: -30,
        value: 0,
      },
      {
        from: -30,
        to: -20,
        value: 20,
      },
      {
        from: -20,
        to: -10,
        value: 50,
      },
      {
        from: -10,
        to: 0,
        value: 120,
      },
      {
        from: 0,
        to: 10,
        value: 200,
      },
      {
        from: 10,
        to: 20,
        value: 300,
      },
      {
        from: 20,
        to: 30,
        value: 400,
      },
      {
        from: 30,
        to: 40,
        value: 600,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 700,
      },
      {
        from: 60,
        to: 70,
        value: 600,
      },
      {
        from: 70,
        to: 80,
        value: 500,
      },
      {
        from: 80,
        to: 90,
        value: 360,
      },
      {
        from: 90,
        to: 100,
        value: 340,
      },
      {
        from: 100,
        to: 110,
        value: 300,
      },
      {
        from: 110,
        to: 120,
        value: 280,
      },
      {
        from: 120,
        to: 130,
        value: 200,
      },
      {
        from: 130,
        to: 140,
        value: 150,
      },
      {
        from: 140,
        to: 150,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 160,
        to: 170,
        value: 30,
      },
      {
        from: 170,
        to: 180,
        value: 15,
      },
      {
        from: 180,
        to: 190,
        value: 0,
      },
    ],
  },
  {
    name: 'Series 2',
    bins: [
      {
        from: 55,
        to: 65,
        value: 0,
      },
      {
        from: 65,
        to: 75,
        value: 20,
      },
      {
        from: 75,
        to: 85,
        value: 50,
      },
      {
        from: 85,
        to: 95,
        value: 120,
      },
      {
        from: 95,
        to: 105,
        value: 200,
      },
      {
        from: 105,
        to: 115,
        value: 300,
      },
      {
        from: 115,
        to: 125,
        value: 400,
      },
      {
        from: 125,
        to: 135,
        value: 600,
      },
      {
        from: 135,
        to: 145,
        value: 900,
      },
      {
        from: 145,
        to: 155,
        value: 700,
      },
      {
        from: 155,
        to: 165,
        value: 600,
      },
      {
        from: 165,
        to: 175,
        value: 500,
      },
      {
        from: 175,
        to: 185,
        value: 360,
      },
      {
        from: 185,
        to: 195,
        value: 340,
      },
      {
        from: 195,
        to: 205,
        value: 300,
      },
      {
        from: 205,
        to: 215,
        value: 280,
      },
      {
        from: 215,
        to: 225,
        value: 200,
      },
      {
        from: 225,
        to: 235,
        value: 150,
      },
      {
        from: 235,
        to: 245,
        value: 80,
      },
      {
        from: 245,
        to: 255,
        value: 50,
      },
      {
        from: 255,
        to: 265,
        value: 30,
      },
      {
        from: 265,
        to: 275,
        value: 10,
      },
      {
        from: 275,
        to: 285,
        value: 0,
      },
    ],
  },
];
const multipleSeriesOverlappedWithUnit: HistogramSeries[] = [
  { ...multipleSeriesOverlapped[0], unit: 'kb/s' },
  { ...multipleSeriesOverlapped[1], unit: 'ops' },
];

const MultipleYAxes = () => {
  return (
    <HistogramChart data={multipleSeriesOverlappedWithUnit}>
      {/* highlight-start */}
      <HistogramChart.YAxis position="left" label="Disk usage (Bytes)" />
      <HistogramChart.YAxis position="right" label="I/O ops (ops)" />
      {/* highlight-end */}
    </HistogramChart>
  );
};
```
