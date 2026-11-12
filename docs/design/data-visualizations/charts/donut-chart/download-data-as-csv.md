## Download data as CSV

The `DonutChart` component allows data to be downloaded in CSV format via a toolbar button. To enable this feature, add the `DonutChart.DownloadCSV` subcomponent to the `DonutChart`. Clicking the button will download the raw data as a CSV file.

The CSV file contains the following columns:

- `category` - the name of the category
- `value` - the value of the category
- `unit` - the unit of the category

**DownloadCSV**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';

const conversions = [
  {
    category: 'EMEA',
    value: 66,
  },
  {
    category: 'APAC',
    value: 25,
  },
  {
    category: 'LATAM',
    value: 33,
  },
  {
    category: 'NA',
    value: 5,
  },
];

const DownloadCSV = () => {
  return (
    <DonutChart
      data={conversions}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
    >
      {/* highlight-next-line */}
      <DonutChart.DownloadCSV />
    </DonutChart>
  );
};
```

It's also possible to programmatically trigger the download of the CSV file by calling the `downloadData` method on the `DonutChart` instance reference.

**DownloadCSVProgrammatic**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { DonutChart, DonutChartRef } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { DownloadIcon } from '@dynatrace/strato-icons';

const conversions = [
  {
    category: 'EMEA',
    value: 66,
  },
  {
    category: 'APAC',
    value: 25,
  },
  {
    category: 'LATAM',
    value: 33,
  },
  {
    category: 'NA',
    value: 5,
  },
];

const DownloadCSVProgrammatic = () => {
  const donutRef = useRef<DonutChartRef>(null);
  const downloadData = () => {
    // highlight-next-line
    donutRef.current?.downloadData();
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
        <DonutChart
          data={conversions}
          labelAccessor="category"
          valueAccessor="value"
          unit="$"
          ref={donutRef}
        />
      </Flex>
    </Flex>
  );
};
```
