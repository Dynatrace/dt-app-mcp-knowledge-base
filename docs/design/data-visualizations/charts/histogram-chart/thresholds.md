## Thresholds

Thresholds are used to mark meaningful ranges or values on a `HistogramChart` and they add contextual information to a numerical axis. There are two variants of thresholds:

- a specific point represented on the Y-axis and a line across.
- a range - or filled area - represented by a pill on the Y-axis and a band across.

### Point and range

**ThresholdsPointAndRange**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const ThresholdsPointAndRange = () => {
  return (
    <HistogramChart data={normalDistribution}>
      {/* highlight-start */}
      <HistogramChart.ThresholdIndicator
        data={{
          min: 300,
          max: 400,
        }}
        color={Colors.Charts.Threshold.Good.Default}
        label="ThresholdIndicator 1"
      />
      <HistogramChart.ThresholdIndicator
        data={{ value: 650 }}
        color={Colors.Charts.Threshold.Bad.Default}
        label="ThresholdIndicator 2"
      />
      {/* highlight-end */}
      <HistogramChart.Legend hidden={true} />
    </HistogramChart>
  );
};
```

Both point and range can be represented by static or dynamic data sources. A static data source has a single value representing a point or a single key-value pair representing a fixed range. A dynamic data source has a data array containing more than one value or various key-value pairs.

There are three different types of threshold markers:

- Range filled, where the value range is defined in order to display the threshold band. The upper and lower lines are not drawn unless the pill is hovered.

- Range stroke-only variant, where a value range is defined in order to display the threshold band represented by upper and lower dashed lines. The upper and lower lines become continuous lines when the pill is hovered.

- Point, where only one value is required to display the threshold. It's represented by a dashed line and when the point is hovered the line becomes a continuous line.

### Dynamic point

**ThresholdsDynamicPoint**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const ThresholdsDynamicPoint = () => {
  return (
    <HistogramChart data={normalDistribution}>
      {/* highlight-start */}
      <HistogramChart.ThresholdIndicator
        data={[
          { value: 200, point: 50 },
          { value: 250, point: 100 },
          { value: 400, point: 120 },
          { value: 300, point: 200 },
        ]}
        color={Colors.Charts.Threshold.Warning.Default}
        label="ThresholdIndicator 1"
      />
      {/* highlight-end */}
      <HistogramChart.Legend hidden={true} />
    </HistogramChart>
  );
};
```

### Dynamic range

**ThresholdsDynamicRange**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const ThresholdsDynamicRange = () => {
  return (
    <HistogramChart data={normalDistribution}>
      {/* highlight-start */}
      <HistogramChart.ThresholdIndicator
        data={[
          {
            min: 200,
            max: 300,
            point: 50,
          },
          {
            min: 300,
            max: 500,
            point: 100,
          },
        ]}
        color={Colors.Charts.Threshold.Bad.Default}
        label="ThresholdIndicator 1"
      />
      {/* highlight-end */}
      <HistogramChart.Legend hidden={true} />
    </HistogramChart>
  );
};
```

### Dynamic range stroke only

**ThresholdsDynamicRangeStrokeOnly**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const ThresholdsDynamicRangeStrokeOnly = () => {
  return (
    <HistogramChart data={normalDistribution}>
      <HistogramChart.ThresholdIndicator
        data={[
          {
            min: 200,
            max: 300,
            point: 50,
          },
          {
            min: 300,
            max: 500,
            point: 100,
          },
        ]}
        color={Colors.Charts.Threshold.Good.Default}
        label="ThresholdIndicator 1"
        // highlight-next-line
        strokeOnly
      />
      <HistogramChart.Legend hidden={true} />
    </HistogramChart>
  );
};
```

There is no limit defined for the number of threshold ranges or points that can be used in a single `HistogramChart`.

By default, thresholds are positioned on the left axis and with the use of the `position` prop, we can place thresholds on the right axis or on both, as depicted below.

### Left axis

**ThresholdsLeftAxis**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const ThresholdsLeftAxis = () => {
  return (
    <HistogramChart data={normalDistribution}>
      <HistogramChart.ThresholdIndicator
        data={{
          min: 0,
          max: 200,
        }}
        color={Colors.Charts.Threshold.Good.Default}
        label="ThresholdIndicator 1"
        strokeOnly={false}
      />
      <HistogramChart.ThresholdIndicator
        data={{
          value: 500,
        }}
        color={Colors.Charts.Threshold.Good.Default}
        label="ThresholdIndicator 2"
      />
      <HistogramChart.ThresholdIndicator
        data={{
          value: 350,
        }}
        color={Colors.Charts.Threshold.Warning.Default}
        label="ThresholdIndicator 3"
      />
      <HistogramChart.ThresholdIndicator
        data={{
          min: 500,
          max: 550,
        }}
        color={Colors.Charts.Threshold.Bad.Default}
        label="ThresholdIndicator 4"
        strokeOnly
      />
      <HistogramChart.Legend hidden={true} />
    </HistogramChart>
  );
};
```

### Right axis

**ThresholdsRightAxis**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

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

const ThresholdsRightAxis = () => {
  return (
    <HistogramChart data={multipleSeriesOverlappedWithUnit}>
      <HistogramChart.YAxis label="Disk usage (Bytes)" />
      <HistogramChart.YAxis position="right" label="CPU usage (Percent)" />

      <HistogramChart.ThresholdIndicator
        data={{ min: 100, max: 200 }}
        color={Colors.Charts.Threshold.Good.Default}
        // highlight-next-line
        position="right"
        label="ThresholdIndicator 1"
      />
      <HistogramChart.ThresholdIndicator
        data={{ value: 500 }}
        color={Colors.Charts.Threshold.Good.Default}
        // highlight-next-line
        position="right"
        label="ThresholdIndicator 2"
      />
      <HistogramChart.ThresholdIndicator
        data={{ value: 400 }}
        color={Colors.Charts.Threshold.Warning.Default}
        // highlight-next-line
        position="right"
        label="ThresholdIndicator 3"
      />
      <HistogramChart.ThresholdIndicator
        data={{ min: 100, max: 150 }}
        color={Colors.Charts.Threshold.Bad.Default}
        // highlight-next-line
        position="right"
        label="ThresholdIndicator 4"
        strokeOnly
      />
      <HistogramChart.Legend hidden={true} />
    </HistogramChart>
  );
};
```

### Dual axis

**ThresholdsDualAxis**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

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

const ThresholdsDualAxis = () => {
  return (
    <HistogramChart data={multipleSeriesOverlappedWithUnit}>
      <HistogramChart.YAxis label="Disk usage (Bytes)" />
      <HistogramChart.YAxis position="right" label="CPU usage (Percent)" />

      {/* Left */}
      <HistogramChart.ThresholdIndicator
        data={{ value: 340 }}
        color={Colors.Charts.Threshold.Warning.Default}
        strokeOnly
        label="ThresholdIndicator 1"
      />
      <HistogramChart.ThresholdIndicator
        data={[
          {
            min: 200,
            max: 400,
            point: 30,
          },
          {
            min: 300,
            max: 500,
            point: 80,
          },
          {
            min: 200,
            max: 250,
            point: 100,
          },
        ]}
        color={Colors.Charts.Threshold.Good.Default}
        label="ThresholdIndicator 2"
      />

      {/* Right */}
      <HistogramChart.ThresholdIndicator
        data={{ min: 600, max: 700 }}
        color={Colors.Charts.Threshold.Bad.Default}
        // highlight-next-line
        position="right"
        label="ThresholdIndicator 3"
      />
      <HistogramChart.ThresholdIndicator
        data={{ value: 450 }}
        color={Colors.Charts.Threshold.Good.Default}
        // highlight-next-line
        position="right"
        label="ThresholdIndicator 4"
      />
      <HistogramChart.Legend hidden={true} />
    </HistogramChart>
  );
};
```
