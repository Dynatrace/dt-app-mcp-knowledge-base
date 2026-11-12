## Download data as CSV

The `PieChart` component allows data to be downloaded in CSV format via a toolbar button. To enable this feature, add the `PieChart.DownloadCSV` subcomponent to the `PieChart`. Clicking the button will download the raw data as a CSV file.

The CSV file contains the following columns:

- `category` - the name of the category
- `value` - the value of the category
- `unit` - the unit of the category

**DownloadCSV**

```tsx
import { PieChart } from '@dynatrace/strato-components/charts';

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
    <PieChart
      data={conversions}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
    >
      {/* highlight-next-line */}
      <PieChart.DownloadCSV />
    </PieChart>
  );
};
```

It's also possible to programmatically trigger the download of the CSV file by calling the `downloadData` method on the `PieChart` instance reference.

**DownloadCSVProgrammatic**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { PieChart, PieChartRef } from '@dynatrace/strato-components/charts';
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
  const pieRef = useRef<PieChartRef>(null);
  const downloadData = () => {
    // highlight-next-line
    pieRef.current?.downloadData();
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
        <PieChart
          data={conversions}
          labelAccessor="category"
          valueAccessor="value"
          unit="$"
          ref={pieRef}
        />
      </Flex>
    </Flex>
  );
};
```
