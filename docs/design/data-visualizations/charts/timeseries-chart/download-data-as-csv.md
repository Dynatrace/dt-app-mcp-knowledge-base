## Download data as CSV

The `TimeseriesChart` component supports downloading data in CSV format. A download button is always shown in the toolbar — no slot configuration is needed. On click of the download button, raw data will be downloaded as a CSV file.

The CSV file contains the following columns:

- `dimension-(n)` - the name of the dimension, where `n` is the index of the dimension
- `series` - the full name of the series (all dimensions concatenated using `•` symbol)
- `unit` - the unit of the series
- `start` - the start timestamp of the data point
- `end` - the end timestamp of the data point
- `value` - the value of the data point

It's also possible to programmatically trigger the download of the CSV file by calling the `downloadData` method on the `TimeseriesChart` instance reference.

**DownloadCSVProgrammatic**

```tsx
import { mockTimeseriesDiskUsage } from '@design-system/mock-data';
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  TimeseriesChart,
  TimeseriesChartRef,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { DownloadIcon } from '@dynatrace/strato-icons';

const DownloadCSVProgrammatic = () => {
  // highlight-next-line
  const chartRef = useRef<TimeseriesChartRef>(null);
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
        {/* highlight-next-line */}
        <TimeseriesChart ref={chartRef} data={mockTimeseriesDiskUsage} />
      </Flex>
    </Flex>
  );
};
```
