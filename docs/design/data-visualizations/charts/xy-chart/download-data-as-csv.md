## Download data as CSV

The `XYChart` component supports download data in CSV format using a toolbar button; this is enabled by default in the toolbar.

Each series that derives from `XYChart` have their own accessors. There are accessors with the same names and accessors exclusive to a variant. When downloading the data in a CSV, the columns will be the `series` followed by all the accessors of all series variants, even if they are not included in the chart itself.

The values of accessors in series that are not used in are null.

The accessors and their meanings are:

- `series` - the type and number of the series.
- `x0` - the value corresponding to the data from the x0 accessor.
- `x1` - the value corresponding to the data from the x1 accessor.
- `y0` - the value corresponding to the data from the y0 accessor.
- `y1` - the value corresponding to the data from the y1 accessor.
- `value` - `Rect exclusive` - the value corresponding to the data from the valueAccessor.

**DownloadCsv**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const rectData = [
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 10,
  },

  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 30,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 50,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 100,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 20,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 50,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 40,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 20,
  },
];

const DownloadCsv = () => {
  return (
    <XYChart data={[]}>
      <XYChart.RectSeries
        data={rectData}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
      <XYChart.Legend hidden />
    </XYChart>
  );
};
```

It's also possible to programmatically trigger the download of the CSV file via the `downloadData` function in the `XYChartRef`.

**DownloadCsvProgrammatically**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { XYChart, XYChartRef } from '@dynatrace/strato-components/charts';
import { DownloadIcon } from '@dynatrace/strato-icons';

const rectData = [
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 10,
  },

  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 30,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 50,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 100,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 20,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 50,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 40,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 20,
  },
];

const DownloadCsvProgrammatically = () => {
  const chartRef = useRef<XYChartRef>(null);

  const downloadData = () => {
    chartRef.current?.downloadData();
  };

  return (
    <>
      <Button onClick={downloadData}>
        <Button.Prefix>
          <DownloadIcon />
        </Button.Prefix>
        Download Data
      </Button>

      <XYChart
        // highlight-next-line
        ref={chartRef}
        data={[]}
      >
        <XYChart.RectSeries
          data={rectData}
          xAxisId="x-first-axis"
          yAxisId="y-first-axis"
          x0Accessor="horizontal.start"
          x1Accessor="horizontal.end"
          y0Accessor="vertical.start"
          y1Accessor="vertical.end"
          valueAccessor="value"
        />
        <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
        <XYChart.Legend hidden />
      </XYChart>
    </>
  );
};
```
