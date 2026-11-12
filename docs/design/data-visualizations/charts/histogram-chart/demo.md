## Demo

The `HistogramChart` expects a data structure composed of an array of `bins`, a `name` as a string, an optional `unit` as a string or Unit and optional `color` as a string.

Each `bin` represents a continuous range of values. A bin is defined by two key parameters: the range (from and to), which determines its width, and the count or frequency (value), which determines its height.

```typescript
 {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      }
    ]
 }
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/HistogramChart/props.md).

**NormalDistribution**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

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

const NormalDistribution = () => {
  return <HistogramChart data={normalDistribution} />;
};
```

### Uneven bin widths

The `HistogramChart` accommodates uneven bin widths, providing a clearer representation of the data. Each bin corresponds to a specific range of values and these ranges can vary from one bin to another.

**UnevenBinWidths**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const normalDistributionWithUnevenWidths: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 5,
        value: 0,
      },
      {
        from: 5,
        to: 15,
        value: 10,
      },
      {
        from: 15,
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
        to: 55,
        value: 100,
      },
      {
        from: 55,
        to: 90,
        value: 200,
      },
      {
        from: 90,
        to: 100,
        value: 120,
      },
      {
        from: 100,
        to: 120,
        value: 220,
      },
      {
        from: 120,
        to: 123,
        value: 300,
      },
      {
        from: 123,
        to: 130,
        value: 320,
      },
      {
        from: 130,
        to: 160,
        value: 400,
      },
      {
        from: 160,
        to: 200,
        value: 470,
      },
      {
        from: 200,
        to: 210,
        value: 570,
      },
      {
        from: 210,
        to: 225,
        value: 810,
      },
      {
        from: 225,
        to: 255,
        value: 720,
      },
      {
        from: 255,
        to: 265,
        value: 810,
      },
      {
        from: 265,
        to: 285,
        value: 750,
      },
      {
        from: 285,
        to: 295,
        value: 810,
      },
      {
        from: 295,
        to: 310,
        value: 120,
      },
      {
        from: 310,
        to: 330,
        value: 70,
      },
    ],
  },
];

const UnevenBinWidths = () => {
  return <HistogramChart data={normalDistributionWithUnevenWidths} />;
};
```

### Overlapped and stacked bins

In some instances of the `HistogramChart`, when bins are not perfectly aligned along the x-axis, the resulting bars may overlap. Conversely, if a bar aligns perfectly, it will be stacked.

**OverlappedBins**

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

const OverlappedBins = () => {
  return <HistogramChart data={multipleSeriesOverlapped} />;
};
```

**StackedBins**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const multipleSeriesStacked: HistogramSeries[] = [
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
        from: 100,
        to: 110,
        value: 10,
      },
      {
        from: 110,
        to: 120,
        value: 20,
      },
      {
        from: 120,
        to: 130,
        value: 40,
      },
      {
        from: 130,
        to: 140,
        value: 50,
      },
      {
        from: 140,
        to: 150,
        value: 60,
      },
      {
        from: 150,
        to: 160,
        value: 80,
      },
      {
        from: 160,
        to: 170,
        value: 150,
      },
      {
        from: 170,
        to: 180,
        value: 200,
      },
      {
        from: 180,
        to: 190,
        value: 250,
      },
      {
        from: 190,
        to: 200,
        value: 300,
      },
      {
        from: 200,
        to: 210,
        value: 360,
      },
      {
        from: 210,
        to: 220,
        value: 590,
      },
      {
        from: 220,
        to: 230,
        value: 890,
      },
      {
        from: 230,
        to: 240,
        value: 670,
      },
      {
        from: 240,
        to: 250,
        value: 600,
      },
      {
        from: 250,
        to: 260,
        value: 500,
      },
      {
        from: 260,
        to: 270,
        value: 450,
      },
      {
        from: 270,
        to: 280,
        value: 340,
      },
      {
        from: 280,
        to: 290,
        value: 300,
      },
      {
        from: 290,
        to: 300,
        value: 180,
      },
      {
        from: 300,
        to: 310,
        value: 80,
      },
      {
        from: 310,
        to: 320,
        value: 50,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const StackedBins = () => {
  return <HistogramChart data={multipleSeriesStacked} />;
};
```

> ℹ️ If you are interested in how to prepare your data for passing it to the [this article](https://developer.dynatrace.com/develop/guides/visualize-data-in-apps/prepare-histogram-data.md) might
