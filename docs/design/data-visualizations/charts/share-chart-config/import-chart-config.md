## Import chart config

The configuration provider for each chart also accepts a `string` as an input for importing a serialized configuration. When a string is provided, it is internally parsed and applied as the chart configuration.

> **Note**
>
> If the configuration provided does not match the properties of the chart configuration, any unknown properties will be ignored. Additionally, if required properties are not provided, or the given configuration is invalid, default values will be applied.

> **Note**
>
> Due to potential version mismatches in chart packages used in different applications, importing a configuration from another application may not result in a perfect match.

**ImportConfig**

```tsx
import { useState } from 'react';

import {
  CategoricalBarChart,
  CategoricalBarChartConfig,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';
import { TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const investment: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000, HR: 20000, Sales: 520000, Support: 380000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000, HR: 37000, Sales: 510000, Support: 427000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000, HR: 45000, Sales: 540000, Support: 489300 },
    unit: '$',
  },
];

const ImportConfig = () => {
  const [serializedConfig, setSerializedConfig] = useState(
    '{"colorPalette":"swamps","layout":"horizontal"}',
  );

  return (
    <Flex gap={8} flexDirection="column">
      <TextInput value={serializedConfig} onChange={setSerializedConfig} />
      {/* highlight-start */}
      <CategoricalBarChartConfig value={serializedConfig}>
        <CategoricalBarChart data={investment}>
          <CategoricalBarChart.ValueAxis label="Response time" />
        </CategoricalBarChart>
      </CategoricalBarChartConfig>
      {/* highlight-end */}
    </Flex>
  );
};
```
