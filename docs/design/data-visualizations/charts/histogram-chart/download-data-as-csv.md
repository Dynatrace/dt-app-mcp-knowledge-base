## Download data as CSV

The `HistogramChart` component supports downloading data in CSV format. A download button is always shown in the toolbar — no slot configuration is needed. On click of the download button, raw data will be downloaded as a CSV file.

The CSV file contains the following columns:

- `name` - the name of the series
- `unit` - the unit of the series
- `from` - the start of the bin range
- `to` - the end of the bin range
- `value` - the value of the bin

> **Note**
>
> `HistogramChart.DownloadCSV` is deprecated and no longer required. The download button is enabled by default.

It's also possible to programmatically trigger the download of the CSV file by calling the `downloadData` method on the `HistogramChart` instance reference.

**DownloadCSVProgrammatic**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  HistogramChart,
  HistogramChartRef,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { DownloadIcon } from '@dynatrace/strato-icons';

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

const DownloadCSVProgrammatic = () => {
  const chartRef = useRef<HistogramChartRef>(null);
  const downloadData = () => {
    // highlight-next-line
    chartRef.current?.downloadData();
  };

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="center">
        <Button onClick={downloadData}>
          <Button.Prefix>
            <DownloadIcon />
          </Button.Prefix>
          Download Data
        </Button>
      </Flex>
      <Flex>
        <HistogramChart
          // highlight-next-line
          ref={chartRef}
          data={normalDistribution}
        />
      </Flex>
    </Flex>
  );
};
```
