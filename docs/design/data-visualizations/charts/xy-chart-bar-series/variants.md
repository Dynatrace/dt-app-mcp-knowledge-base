## Variants

### Single

This type refers to independent bars, which support all valid accessor patterns. Specific details for the accessors structure can be found below:

- Automatic direction:
  - Vertical bars: `x0Accessor + y1Accessor`
  - Horizontal bars: `y0Accessor + x1Accessor`
- Waterfall-like rectangles:
  - Use `variant="single"` with `x0Accessor + x1Accessor + y0Accessor + y1Accessor` to manually position rectangles. Stacking and grouping are not supported for full rectangles.
- Note:
  - Multiple floating range bars per category can overlap in `variant="single"`. Use `variant="group"` with `x0Accessor + y0Accessor + y1Accessor` to show them side-by-side.

Examples:

**BarSeriesVerticalSingle**

```tsx
import {
  XYChart,
  type BarDatapoint,
} from '@dynatrace/strato-components/charts';

const generateNormalDistributionData = (centerpoint: number = 100) => {
  const data: BarDatapoint[] = [];
  const mean = centerpoint;
  const stdDev = 30;

  const normalDist = (x: number) => {
    return Math.exp(-((x - mean) ** 2) / (2 * stdDev ** 2));
  };

  for (let x0 = 0; x0 < 200; x0 += 5) {
    const x1 = x0 + 5;
    const midpoint = (x0 + x1) / 2;
    const y1 = Math.round(normalDist(midpoint) * 100);

    data.push({
      x0,
      x1,
      y1,
      seriesId: 'centered on ' + centerpoint,
      name: 'Normal Distribution centered on ' + centerpoint,
    });
  }

  return data;
};

// One floating bar per category to avoid overlap in variant="single"
const floatingBarsSingle: BarDatapoint[] = [
  {
    x0: 'sales',
    y0: new Date('2023-01-02'),
    y1: new Date('2023-01-06'),
    seriesId: 'Task',
    name: 'Task',
  },
  {
    x0: 'marketing',
    y0: new Date('2023-01-07'),
    y1: new Date('2023-01-11'),
    seriesId: 'Task',
    name: 'Task',
  },
  {
    x0: 'law',
    y0: new Date('2023-01-04'),
    y1: new Date('2023-01-08'),
    seriesId: 'Task',
    name: 'Task',
  },
];

const BarSeriesVerticalSingle = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Normal Distribution</h3>
        <XYChart data={[]}>
          <XYChart.BarSeries
            data={[
              ...generateNormalDistributionData(40),
              ...generateNormalDistributionData(100),
              ...generateNormalDistributionData(160),
            ]}
            // highlight-next-line
            variant="single"
            x0Accessor="x0"
            x1Accessor="x1"
            y1Accessor="y1"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            yAxisId="y-axis"
            xAxisId="x-axis"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>

      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Floating Bars</h3>
        <XYChart data={[{}]} colorPalette="categorical">
          <XYChart.BarSeries
            data={floatingBarsSingle}
            // highlight-next-line
            variant="single"
            x0Accessor="x0"
            y0Accessor="y0"
            y1Accessor="y1"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="time" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
    </div>
  );
};
```

**BarSeriesHorizontalSingle**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const categoricalData = [
  { y0: 'Alpha', x1: 40, seriesId: 'series-1', name: 'Alpha' },
  { y0: 'Beta', x1: 25, seriesId: 'series-1', name: 'Beta' },
  { y0: 'Gamma', x1: 65, seriesId: 'series-1', name: 'Gamma' },
  { y0: 'Delta', x1: 15, seriesId: 'series-1', name: 'Delta' },
];

const rangeBarsData = [
  { y0: 'Alpha', x0: 10, x1: 30, seriesId: 'range', name: 'Alpha range' },
  { y0: 'Beta', x0: 5, x1: 20, seriesId: 'range', name: 'Beta range' },
  { y0: 'Gamma', x0: 25, x1: 50, seriesId: 'range', name: 'Gamma range' },
  { y0: 'Delta', x0: 0, x1: 15, seriesId: 'range', name: 'Delta range' },
];

const BarSeriesHorizontalSingle = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Horizontal Bars</h3>
        <XYChart data={[]}>
          <XYChart.BarSeries
            data={categoricalData}
            // highlight-next-line
            variant="single"
            y0Accessor="y0" // primary position (categorical)
            x1Accessor="x1" // growth (numerical)
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="categorical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>

      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Horizontal Range Bars</h3>
        <XYChart data={rangeBarsData}>
          <XYChart.BarSeries
            // highlight-next-line
            variant="single"
            y0Accessor="y0" // primary position (categorical)
            x0Accessor="x0" // start
            x1Accessor="x1" // end
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="categorical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
    </div>
  );
};
```

**BarSeriesWaterfall**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const data = [
  { x0: 'January', y0: 100000, y1: 150000 },
  { x0: 'February', y0: 150000, y1: 185000 },
  { x0: 'March', y0: 185000, y1: 155000 },
  { x0: 'April', y0: 155000, y1: 205000 },
  { x0: 'May', y0: 205000, y1: 165000 },
  { x0: 'June', y0: 165000, y1: 220000 },
  { x0: 'July', y0: 220000, y1: 265000 },
  { x0: 'August', y0: 265000, y1: 210000 },
  { x0: 'September', y0: 210000, y1: 275000 },
  { x0: 'October', y0: 275000, y1: 225000 },
  { x0: 'November', y0: 225000, y1: 295000 },
  { x0: 'December', y0: 295000, y1: 350000 },
].map((d) => ({
  ...d,
  seriesId: d.y0 <= d.y1 ? 'increase' : 'decrease',
  name: 'Revenue',
}));

const BarSeriesWaterfall = () => {
  return (
    <>
      <h3>Waterfall bar</h3>
      <XYChart data={data}>
        <XYChart.ColorRule
          valueAccessor="seriesId"
          matchValue="increase"
          comparator="equals"
          color="#179d1bff"
        />
        <XYChart.ColorRule
          valueAccessor="seriesId"
          matchValue="decrease"
          comparator="equals"
          color="#c31f14ff"
        />
        <XYChart.BarSeries
          // highlight-next-line
          variant="single"
          x0Accessor="x0"
          y0Accessor="y0"
          y1Accessor="y1"
          seriesIdAccessor="seriesId"
          nameAccessor="name"
          xAxisId="x-axis"
          yAxisId="y-axis"
        />
        <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
        <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        <XYChart.Legend hidden />
      </XYChart>
    </>
  );
};
```

### Stack

Data can be displayed stacked by setting the BarSeries `variant` to `stack`. Bars stack at the same primary accessor by using the `seriesIdAccessor` to group the data. Stack behaviour is supported for all axes except categorical-type if they belong to a growth axis.

These accessors patterns are valid for stacking:

- Vertical stacked bars: `x0Accessor + y1Accessor`
- Horizontal stacked bars: `y0Accessor + x1Accessor`
- Stacked bars with X-range span: `x0Accessor + x1Accessor + y1Accessor` (stacks vertically, grouped by the X range)
- Stacked bars with Y-range span: `y0Accessor + y1Accessor + x1Accessor` (stacks horizontally, grouped by the Y range)

The following accessor patterns are not supported for stacking:

- Floating range bars (Y-range only: `y0Accessor + y1Accessor`)
- Full rectangles (`x0Accessor + x1Accessor + y0Accessor + y1Accessor`)

Examples:

**BarSeriesStackVertical**

```tsx
import {
  XYChart,
  type BarDatapoint,
} from '@dynatrace/strato-components/charts';

const generateNormalDistributionData = (centerpoint: number = 100) => {
  const data: BarDatapoint[] = [];
  const mean = centerpoint;
  const stdDev = 30;

  const normalDist = (x: number) => {
    return Math.exp(-((x - mean) ** 2) / (2 * stdDev ** 2));
  };

  for (let x0 = 0; x0 < 200; x0 += 5) {
    const x1 = x0 + 5;
    const midpoint = (x0 + x1) / 2;
    const y1 = Math.round(normalDist(midpoint) * 100);

    data.push({
      x0,
      x1,
      y1,
      seriesId: 'centered on ' + centerpoint,
      name: 'Normal Distribution centered on ' + centerpoint,
    });
  }

  return data;
};

const multipleAppRatingPositiveFlat = [
  { x0: 'mobile-app', series: 'Unacceptable', y1: 8 },
  { x0: 'mobile-app', series: 'Poor', y1: 21 },
  { x0: 'mobile-app', series: 'Fair', y1: 45 },
  { x0: 'mobile-app', series: 'Good', y1: 212 },
  { x0: 'mobile-app', series: 'Excellent', y1: 32 },
  {
    x0: 'marketing-web-app-dynatrace-cool-app-here',
    series: 'Unacceptable',
    y1: 3,
  },
  { x0: 'marketing-web-app-dynatrace-cool-app-here', series: 'Poor', y1: 0 },
  { x0: 'marketing-web-app-dynatrace-cool-app-here', series: 'Fair', y1: 25 },
  { x0: 'marketing-web-app-dynatrace-cool-app-here', series: 'Good', y1: 154 },
  {
    x0: 'marketing-web-app-dynatrace-cool-app-here',
    series: 'Excellent',
    y1: 78,
  },
  { x0: 'social-media-app', series: 'Unacceptable', y1: 11 },
  { x0: 'social-media-app', series: 'Poor', y1: 32 },
  { x0: 'social-media-app', series: 'Fair', y1: 45 },
  { x0: 'social-media-app', series: 'Good', y1: 212 },
  { x0: 'social-media-app', series: 'Excellent', y1: 57 },
  { x0: 'ecommerce-web-app', series: 'Unacceptable', y1: 0 },
  { x0: 'ecommerce-web-app', series: 'Poor', y1: 12 },
  { x0: 'ecommerce-web-app', series: 'Fair', y1: 4 },
  { x0: 'ecommerce-web-app', series: 'Good', y1: 26 },
  { x0: 'ecommerce-web-app', series: 'Excellent', y1: 253 },
];

const BarSeriesStackVertical = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Normal Distribution</h3>
        <XYChart data={[]}>
          <XYChart.BarSeries
            data={[
              ...generateNormalDistributionData(40),
              ...generateNormalDistributionData(100),
              ...generateNormalDistributionData(160),
            ]}
            // highlight-next-line
            variant="stack"
            x0Accessor="x0"
            x1Accessor="x1"
            y1Accessor="y1"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            yAxisId="y-axis"
            xAxisId="x-axis"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Vertical Stacked Bars</h3>
        <XYChart data={multipleAppRatingPositiveFlat} colorPalette="fireplace">
          <XYChart.BarSeries
            // highlight-next-line
            variant="stack"
            x0Accessor="x0"
            y1Accessor="y1"
            seriesIdAccessor="series"
            nameAccessor="series"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
    </div>
  );
};
```

**BarSeriesStackHorizontal**

```tsx
import {
  XYChart,
  type BarDatapoint,
} from '@dynatrace/strato-components/charts';

const generateNormalDistributionDataYRange = (centerpoint: number = 100) => {
  const data: BarDatapoint[] = [];
  const mean = centerpoint;
  const stdDev = 30;

  const normalDist = (y: number) => {
    return Math.exp(-((y - mean) ** 2) / (2 * stdDev ** 2));
  };

  for (let y0 = 0; y0 < 200; y0 += 5) {
    const y1 = y0 + 5;
    const midpoint = (y0 + y1) / 2;
    const x1 = Math.round(normalDist(midpoint) * 100);

    data.push({
      y0,
      y1,
      x1,
      seriesId: 'centered on ' + centerpoint,
      name: 'Normal Distribution centered on ' + centerpoint,
    });
  }

  return data;
};

const categoricalHorizontalStack = [
  { y0: 'Mobile App', seriesId: 'Unacceptable', x1: 8, name: 'Unacceptable' },
  { y0: 'Mobile App', seriesId: 'Poor', x1: 21, name: 'Poor' },
  { y0: 'Mobile App', seriesId: 'Fair', x1: 45, name: 'Fair' },
  { y0: 'Mobile App', seriesId: 'Good', x1: 212, name: 'Good' },
  { y0: 'Mobile App', seriesId: 'Excellent', x1: 32, name: 'Excellent' },

  {
    y0: 'Marketing Web',
    seriesId: 'Unacceptable',
    x1: 3,
    name: 'Unacceptable',
  },
  { y0: 'Marketing Web', seriesId: 'Poor', x1: 0, name: 'Poor' },
  { y0: 'Marketing Web', seriesId: 'Fair', x1: 25, name: 'Fair' },
  { y0: 'Marketing Web', seriesId: 'Good', x1: 154, name: 'Good' },
  { y0: 'Marketing Web', seriesId: 'Excellent', x1: 78, name: 'Excellent' },

  {
    y0: 'Social Media',
    seriesId: 'Unacceptable',
    x1: 11,
    name: 'Unacceptable',
  },
  { y0: 'Social Media', seriesId: 'Poor', x1: 32, name: 'Poor' },
  { y0: 'Social Media', seriesId: 'Fair', x1: 45, name: 'Fair' },
  { y0: 'Social Media', seriesId: 'Good', x1: 212, name: 'Good' },
  { y0: 'Social Media', seriesId: 'Excellent', x1: 57, name: 'Excellent' },

  { y0: 'E-commerce', seriesId: 'Unacceptable', x1: 0, name: 'Unacceptable' },
  { y0: 'E-commerce', seriesId: 'Poor', x1: 12, name: 'Poor' },
  { y0: 'E-commerce', seriesId: 'Fair', x1: 4, name: 'Fair' },
  { y0: 'E-commerce', seriesId: 'Good', x1: 26, name: 'Good' },
  { y0: 'E-commerce', seriesId: 'Excellent', x1: 253, name: 'Excellent' },
];

const BarSeriesStackHorizontal = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Horizontal Stacked Bars (Categorical)</h3>
        <XYChart data={categoricalHorizontalStack} colorPalette="fireplace">
          <XYChart.BarSeries
            // highlight-next-line
            variant="stack"
            y0Accessor="y0" // primary position (categorical)
            x1Accessor="x1" // growth (numerical)
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="categorical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>

      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Horizontal Stack with Y-range span</h3>
        <XYChart data={[]}>
          <XYChart.BarSeries
            data={[
              ...generateNormalDistributionDataYRange(40),
              ...generateNormalDistributionDataYRange(100),
              ...generateNormalDistributionDataYRange(160),
            ]}
            // highlight-next-line
            variant="stack"
            y0Accessor="y0" // start of Y range (numerical)
            y1Accessor="y1" // end of Y range (numerical)
            x1Accessor="x1" // growth along X (numerical)
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
    </div>
  );
};
```

### Group

Data can also be displayed grouped by setting the BarSeries `variant` to `group`, where the bars will be positioned side-by-side within the same bucket. In order to group, a categorical primary axis is required (the axis used for `x0Accessor` in vertical bars or `y0Accessor` in horizontal bars). If the primary axis is numerical, time, or log (i.e., not categorical), the series will fall back to `variant="single"`.

These accessors patterns are valid for grouping:

- Vertical grouped bars: `x0Accessor + y1Accessor`
- Vertical grouped range bars: `x0Accessor + y0Accessor + y1Accessor`
- Horizontal grouped bars: `y0Accessor + x1Accessor`
- Horizontal grouped range bars: `y0Accessor + x0Accessor + x1Accessor`

The following accessor patterns are not supported for grouping:

- X-range with growth (`x0Accessor + x1Accessor + y1Accessor`)
- Y-range with growth (`y0Accessor + y1Accessor + x1Accessor`)
- Full rectangles (`x0Accessor + x1Accessor + y0Accessor + y1Accessor`)

Examples:

**BarSeriesGroupVertical**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const multipleAppRatingPositiveFlat = [
  { x0: 'mobile-app', series: 'Unacceptable', y1: 8 },
  { x0: 'mobile-app', series: 'Poor', y1: 21 },
  { x0: 'mobile-app', series: 'Fair', y1: 45 },
  { x0: 'mobile-app', series: 'Good', y1: 212 },
  { x0: 'mobile-app', series: 'Excellent', y1: 32 },
  {
    x0: 'marketing-web-app-dynatrace-cool-app-here',
    series: 'Unacceptable',
    y1: 3,
  },
  { x0: 'marketing-web-app-dynatrace-cool-app-here', series: 'Poor', y1: 0 },
  { x0: 'marketing-web-app-dynatrace-cool-app-here', series: 'Fair', y1: 25 },
  { x0: 'marketing-web-app-dynatrace-cool-app-here', series: 'Good', y1: 154 },
  {
    x0: 'marketing-web-app-dynatrace-cool-app-here',
    series: 'Excellent',
    y1: 78,
  },
  { x0: 'social-media-app', series: 'Unacceptable', y1: 11 },
  { x0: 'social-media-app', series: 'Poor', y1: 32 },
  { x0: 'social-media-app', series: 'Fair', y1: 45 },
  { x0: 'social-media-app', series: 'Good', y1: 212 },
  { x0: 'social-media-app', series: 'Excellent', y1: 57 },
  { x0: 'ecommerce-web-app', series: 'Unacceptable', y1: 0 },
  { x0: 'ecommerce-web-app', series: 'Poor', y1: 12 },
  { x0: 'ecommerce-web-app', series: 'Fair', y1: 4 },
  { x0: 'ecommerce-web-app', series: 'Good', y1: 26 },
  { x0: 'ecommerce-web-app', series: 'Excellent', y1: 253 },
];

const stackTime = [
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-01'),
      end: new Date('2023-01-05'),
    },
    seriesId: 'First Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-03'),
      end: new Date('2023-01-05'),
    },
    seriesId: 'Second Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-04'),
      end: new Date('2023-01-06'),
    },
    seriesId: 'Third Employee',
  },
  {
    d: {
      host: 'marketing',
      start: new Date('2023-01-07'),
      end: new Date('2023-01-10'),
    },
    seriesId: 'First Employee',
  },
  {
    d: {
      host: 'law',
      start: new Date('2023-01-03'),
      end: new Date('2023-01-06'),
    },
    seriesId: 'First Employee',
  },
  {
    d: {
      host: 'law',
      start: new Date('2023-01-01'),
      end: new Date('2023-01-05'),
    },
    seriesId: 'Third Employee',
  },
  {
    d: {
      host: 'law',
      start: new Date('2023-01-05'),
      end: new Date('2023-01-09'),
    },
    seriesId: 'Forth Employee',
  },
  {
    d: {
      host: 'marketing',
      start: new Date('2023-01-09'),
      end: new Date('2023-01-13'),
    },
    seriesId: 'Second Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-06'),
      end: new Date('2023-01-11'),
    },
    seriesId: 'Forth Employee',
  },
  {
    d: {
      host: 'marketing',
      start: new Date('2023-01-10'),
      end: new Date('2023-01-13'),
    },
    seriesId: 'Third Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-08'),
      end: new Date('2023-01-09'),
    },
    seriesId: 'Fifth Employee',
  },
];

const BarSeriesGroupVertical = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <XYChart data={[]}>
          <XYChart.BarSeries
            data={multipleAppRatingPositiveFlat}
            // highlight-next-line
            variant="group"
            x0Accessor="x0"
            y1Accessor="y1"
            seriesIdAccessor="series"
            nameAccessor="series"
            yAxisId="y-axis"
            xAxisId="x-axis"
          />
          <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <XYChart data={stackTime} colorPalette="fireplace">
          <XYChart.BarSeries
            // highlight-next-line
            variant="group"
            x0Accessor="d.host"
            y0Accessor="d.start"
            y1Accessor="d.end"
            seriesIdAccessor="seriesId"
            nameAccessor="seriesId"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="time" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
    </div>
  );
};
```

**BarSeriesGroupHorizontal**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const categoricalHorizontalGroup = [
  { y0: 'Mobile App', series: 'Unacceptable', x1: 8 },
  { y0: 'Mobile App', series: 'Poor', x1: 21 },
  { y0: 'Mobile App', series: 'Fair', x1: 45 },
  { y0: 'Mobile App', series: 'Good', x1: 212 },
  { y0: 'Mobile App', series: 'Excellent', x1: 32 },

  { y0: 'Marketing Web', series: 'Unacceptable', x1: 3 },
  { y0: 'Marketing Web', series: 'Poor', x1: 0 },
  { y0: 'Marketing Web', series: 'Fair', x1: 25 },
  { y0: 'Marketing Web', series: 'Good', x1: 154 },
  { y0: 'Marketing Web', series: 'Excellent', x1: 78 },

  { y0: 'Social Media', series: 'Unacceptable', x1: 11 },
  { y0: 'Social Media', series: 'Poor', x1: 32 },
  { y0: 'Social Media', series: 'Fair', x1: 45 },
  { y0: 'Social Media', series: 'Good', x1: 212 },
  { y0: 'Social Media', series: 'Excellent', x1: 57 },

  { y0: 'E-commerce', series: 'Unacceptable', x1: 0 },
  { y0: 'E-commerce', series: 'Poor', x1: 12 },
  { y0: 'E-commerce', series: 'Fair', x1: 4 },
  { y0: 'E-commerce', series: 'Good', x1: 26 },
  { y0: 'E-commerce', series: 'Excellent', x1: 253 },
];

const groupRangeTimeHorizontal = [
  {
    y0: 'sales',
    seriesId: 'Series A',
    name: 'Series A',
    x0: new Date('2023-01-01'),
    x1: new Date('2023-01-05'),
  },
  {
    y0: 'sales',
    seriesId: 'Series B',
    name: 'Series B',
    x0: new Date('2023-01-03'),
    x1: new Date('2023-01-08'),
  },
  {
    y0: 'marketing',
    seriesId: 'Series A',
    name: 'Series A',
    x0: new Date('2023-01-02'),
    x1: new Date('2023-01-06'),
  },
  {
    y0: 'marketing',
    seriesId: 'Series C',
    name: 'Series C',
    x0: new Date('2023-01-07'),
    x1: new Date('2023-01-10'),
  },
  {
    y0: 'law',
    seriesId: 'Series B',
    name: 'Series B',
    x0: new Date('2023-01-04'),
    x1: new Date('2023-01-09'),
  },
  {
    y0: 'law',
    seriesId: 'Series C',
    name: 'Series C',
    x0: new Date('2023-01-01'),
    x1: new Date('2023-01-03'),
  },
];

const BarSeriesGroupHorizontal = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Horizontal Grouped Bars (Categorical)</h3>
        <XYChart data={[]}>
          <XYChart.BarSeries
            data={categoricalHorizontalGroup}
            // highlight-next-line
            variant="group"
            y0Accessor="y0" // primary position (categorical)
            x1Accessor="x1" // growth (numerical)
            seriesIdAccessor="series"
            nameAccessor="series"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="categorical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>

      <div style={{ flex: '1', minWidth: '400px' }}>
        <h3>Horizontal Grouped Range Bars (Time)</h3>
        <XYChart data={groupRangeTimeHorizontal} colorPalette="fireplace">
          <XYChart.BarSeries
            // highlight-next-line
            variant="group"
            y0Accessor="y0" // primary position (categorical)
            x0Accessor="x0" // start (time)
            x1Accessor="x1" // end (time)
            seriesIdAccessor="seriesId"
            nameAccessor="name"
            xAxisId="x-axis"
            yAxisId="y-axis"
          />
          <XYChart.XAxis id="x-axis" type="time" position="bottom" />
          <XYChart.YAxis id="y-axis" type="categorical" position="left" />
          <XYChart.Legend hidden />
        </XYChart>
      </div>
    </div>
  );
};
```
