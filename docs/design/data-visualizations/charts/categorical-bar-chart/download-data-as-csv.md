## Download data as CSV

The `CategoricalBarChart` component supports downloading data in CSV format using a toolbar button. Until this chart's download button is enabled by default, provide the `CategoricalBarChart.DownloadCSV` subcomponent to show it. On click of the download button, raw data will be downloaded as a CSV file.

The CSV file contains the following columns:

- `category` - the name of the category (dimension)
- `value` - the value of the category
- `key` - the name of the second dimension (in case of multiple dimensions)

> **Note**
>
> `CategoricalBarChart.DownloadCSV` is deprecated. Do not remove it yet — the download button is not shown by default for this chart until it adopts the always-on XYChart-based download button.

It's also possible to programmatically trigger the download of the CSV file by calling the `downloadData` method on the `CategoricalBarChart` instance reference.

**DownloadCSVProgrammatic**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  CategoricalBarChart,
  CategoricalBarChartData,
  CategoricalBarChartRef,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { DownloadIcon } from '@dynatrace/strato-icons';

const appRating: CategoricalBarChartData[] = [
  { category: 'Unacceptable', value: 5, unit: 'votes' },
  { category: 'Poor', value: 56, unit: 'votes' },
  { category: 'Fair', value: 280, unit: 'votes' },
  { category: 'Good', value: 129, unit: 'votes' },
  { category: 'Excellent', value: 17, unit: 'votes' },
];
const multipleAppRating = [
  {
    category: 'mobile-app',
    value: { Unacceptable: 8, Poor: 21, Fair: 45, Good: 212, Excellent: 32 },
  },
  {
    category: 'marketing-web-app-dynatrace-cool-app-here',
    value: { Unacceptable: 3, Poor: 0, Fair: 25, Good: 154, Excellent: 78 },
  },
  {
    category: 'social-media-app',
    value: { Unacceptable: 11, Poor: 32, Fair: 45, Good: 212, Excellent: 57 },
  },
  {
    category: 'ecommerce-web-app',
    value: { Unacceptable: 0, Poor: 12, Fair: 4, Good: 26, Excellent: 253 },
  },
];

const DownloadCSVProgrammatic = () => {
  const chartRefSingleDimension = useRef<CategoricalBarChartRef>(null);
  const chartRefMultipleDimension = useRef<CategoricalBarChartRef>(null);
  const downloadDataSingleDimension = () => {
    chartRefSingleDimension.current?.downloadData();
  };
  const downloadDataMultipleDimensions = () => {
    chartRefMultipleDimension.current?.downloadData();
  };

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="center">
        <Button onClick={downloadDataSingleDimension}>
          <Button.Prefix>
            <DownloadIcon />
          </Button.Prefix>
          Download Data
        </Button>
      </Flex>
      <Flex>
        <CategoricalBarChart
          // highlight-next-line
          ref={chartRefSingleDimension}
          data={appRating}
        />
      </Flex>
      <Flex justifyContent="center">
        <Button onClick={downloadDataMultipleDimensions}>
          <Button.Prefix>
            <DownloadIcon />
          </Button.Prefix>
          Download Data
        </Button>
      </Flex>
      <Flex>
        <CategoricalBarChart
          // highlight-next-line
          ref={chartRefMultipleDimension}
          data={multipleAppRating}
        />
      </Flex>
    </Flex>
  );
};
```
