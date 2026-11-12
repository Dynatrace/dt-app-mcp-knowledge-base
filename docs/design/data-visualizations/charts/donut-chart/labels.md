## Labels

By default, slice labels are enabled. In order to hide all the labels in the chart, add the subcomponent configuration `<DonutChart.Labels hidden/>`.

Labels that don't fit a specific slice will be automatically hidden independent of the configuration value setting.

The default values for the labels will be `relative` but you can also set it to the `absolute` value, using the `valueType` prop

**Labels**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

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

const Labels = () => {
  return (
    <Flex flexDirection="column">
      <p>Chart with displayed labels (default - relative value)</p>
      <DonutChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        width={300}
      >
        <DonutChart.Legend hidden />
      </DonutChart>

      <p>Chart with displayed labels (absolute value)</p>
      <DonutChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        width={300}
      >
        {/* highlight-next-line */}
        <DonutChart.Labels valueType="absolute" />
        <DonutChart.Legend hidden />
      </DonutChart>

      <p>Chart with hidden labels</p>
      <DonutChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        width={300}
      >
        {/* highlight-next-line */}
        <DonutChart.Labels hidden />
        <DonutChart.Legend hidden />
      </DonutChart>
    </Flex>
  );
};
```
