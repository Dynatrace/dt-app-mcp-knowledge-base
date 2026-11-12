## Demo

The `TreeMap` component accepts a flat array of data records (`ChartData`) together with `groupBy`, `valueAccessor`, and an optional `nameAccessor` to define the chart structure.

### Data format

**`data`**: A flat array of records (`ChartData`), where each record represents one data point.

**`groupBy`**: A field name (`string`) or an ordered array of field names (`string[]`) that groups records into clusters. Up to three levels are supported — with three keys the first becomes the root label, the second becomes clusters, and the third becomes leaf tiles.

**`valueAccessor`**: The field whose value controls the relative size of each tile. Dot-notation is supported for nested fields (e.g. `"metadata.value"`).

**`nameAccessor`**: An optional field name that controls how tiles are coloured in the legend. When the referenced field holds numeric values, coloring is value-based; otherwise it is name-based.

```typescript
const data: ChartData = [
  { region: 'Asia', country: 'India', city: 'Delhi', population: 27000000 },
  { region: 'Asia', country: 'India', city: 'Mumbai', population: 21600000 },
  { region: 'Asia', country: 'China', city: 'Shanghai', population: 25600000 },
  { region: 'Americas', country: 'Brazil', city: 'Sao Paulo', population: 21900000 },
];

<TreeMap
  data={data}
  groupBy={['country', 'city']}
  valueAccessor="population"
  unit="inhabitants"
/>

<TreeMap
  data={data}
  groupBy={['region', 'country', 'city']}
  valueAccessor="population"
  unit="inhabitants"
/>
```

The displayed data can be adjusted by setting limits using the `min` and `max` props. This is particularly useful when displaying numerical values in the legend via `nameAccessor`. Both props accept a numeric value, or the special strings `'data-min'` and `'data-max'` to use the minimum and maximum values present in the data.

Learn more about the available props [here](https://developer.dynatrace.com/design/data-visualizations/charts/TreeMap/props.md).

**Data**

```tsx
import { ChartData, TreeMap } from '@dynatrace/strato-components/charts';

const population: ChartData = [
  {
    country: 'India',
    city: 'Delhi',
    population: 27000000,
  },
  {
    country: 'India',
    city: 'Mumbai',
    population: 21600000,
  },
  {
    country: 'India',
    city: 'Kolkata',
    population: 15600000,
  },
  {
    country: 'India',
    city: 'Chennai',
    population: 11100000,
  },
  {
    country: 'India',
    city: 'Bangalore',
    population: 10800000,
  },
  {
    country: 'India',
    city: 'Hyderabad',
    population: 9900000,
  },
  {
    country: 'India',
    city: 'Ahmedabad',
    population: 8100000,
  },
  {
    country: 'India',
    city: 'Pune',
    population: 6600000,
  },
  {
    country: 'India',
    city: 'Surat',
    population: 6500000,
  },
  {
    country: 'China',
    city: 'Shanghai',
    population: 25600000,
  },
  {
    country: 'China',
    city: 'Beijing',
    population: 22000000,
  },
  {
    country: 'China',
    city: 'Chongqing',
    population: 16300000,
  },
  {
    country: 'China',
    city: 'Tianjin',
    population: 13600000,
  },
  {
    country: 'China',
    city: 'Guangzhou',
    population: 13100000,
  },
  {
    country: 'China',
    city: 'Shenzhen',
    population: 12400000,
  },
  {
    country: 'China',
    city: 'Chengdu',
    population: 10200000,
  },
  {
    country: 'China',
    city: 'Nanjing',
    population: 9300000,
  },
  {
    country: 'China',
    city: 'Wuhan',
    population: 8500000,
  },
  {
    country: 'China',
    city: 'Hangzhou',
    population: 7800000,
  },
  {
    country: 'United States',
    city: 'New York City',
    population: 18800000,
  },
  {
    country: 'United States',
    city: 'Los Angeles',
    population: 13100000,
  },
  {
    country: 'United States',
    city: 'Chicago',
    population: 9500000,
  },
  {
    country: 'United States',
    city: 'Dallas-Fort Worth',
    population: 7600000,
  },
  {
    country: 'United States',
    city: 'Houston',
    population: 7100000,
  },
  {
    country: 'United States',
    city: 'Washington DC',
    population: 6300000,
  },
  {
    country: 'United States',
    city: 'Miami',
    population: 6200000,
  },
  {
    country: 'Indonesia',
    city: 'Jakarta',
    population: 10800000,
  },
  {
    country: 'Indonesia',
    city: 'Surabaya',
    population: 6500000,
  },
  {
    country: 'Pakistan',
    city: 'Karachi',
    population: 16600000,
  },
  {
    country: 'Pakistan',
    city: 'Lahore',
    population: 12400000,
  },
  {
    country: 'Nigeria',
    city: 'Lagos',
    population: 14800000,
  },
  {
    country: 'Brazil',
    city: 'Sao Paulo',
    population: 21900000,
  },
  {
    country: 'Brazil',
    city: 'Rio de Janeiro',
    population: 13300000,
  },
  {
    country: 'Bangladesh',
    city: 'Dhaka',
    population: 21100000,
  },
  {
    country: 'Russia',
    city: 'Moscow',
    population: 13100000,
  },
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    population: 5600000,
  },
  {
    country: 'Mexico',
    city: 'Mexico City',
    population: 21700000,
  },
];

const Data = () => {
  return (
    <>
      <TreeMap
        data={population}
        groupBy={['country', 'city']}
        valueAccessor="population"
        unit="inhabitants"
      />
      <TreeMap
        data={population}
        groupBy={['country', 'city']}
        valueAccessor="population"
        unit="inhabitants"
        labelsDisplay="clusters"
      />
    </>
  );
};
```
