## Grouping

The grouping defines a way to aggregate multiple slices into a single one.

The slices are grouped depending on a given `threshold` prop. All the slices with a value that match the input threshold will be part of the group.

It is possible to specify three different types of thresholds:

- `relative`: The threshold is the relative value of the slices (distribution in percentage). All values lower than the threshold will be part of the group.
- `absolute`: The threshold is the absolute value of the slices. All values lower than the threshold will be part of the group.
- `number-of-slices`: The threshold is the ordinal number of the slices. Once the number of slices specified in the threshold is reached, all the others will be grouped.

By default, the group name is `Other`. This value can be changed by providing it in the configuration via the `name` prop.

To configure custom groups, use the subcomponent configuration `<DonutChart.Grouping />`. If the group configuration is not provided, the grouping is relative: 2% as default.

**Grouping**

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

const Grouping = () => {
  return (
    <>
      <p>Grouping with `relative` threshold</p>

      <DonutChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      >
        {/* highlight-start */}
        <DonutChart.Grouping
          threshold={{ type: 'relative', value: 20 }}
          name="Rest of the world"
        />
        {/* highlight-end */}
      </DonutChart>

      <p>Grouping with `absolute` threshold</p>

      <DonutChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      >
        {/* highlight-start */}
        <DonutChart.Grouping
          threshold={{ type: 'absolute', value: 26 }}
          name="Rest of the world"
        />
        {/* highlight-end */}
      </DonutChart>

      <p>Grouping with `number-of-slices` threshold</p>

      <DonutChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      >
        {/* highlight-start */}
        <DonutChart.Grouping
          threshold={{ type: 'number-of-slices', value: 2 }}
          name="Rest of the world"
        />
        {/* highlight-end */}
      </DonutChart>
    </>
  );
};
```
