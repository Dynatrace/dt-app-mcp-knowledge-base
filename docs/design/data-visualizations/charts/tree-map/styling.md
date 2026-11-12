## Styling

The `TreeMap` also accepts custom styling, which could be set using the props `className` and/or `style`, as a regular html element

**Styling**

```tsx
import { TreeMap, type TreeMapData } from '@dynatrace/strato-components/charts';

const population: TreeMapData = {
  tree: {
    name: '',
    value: 0,
    nodes: [
      {
        name: 'India',
        value: 117200000,
        nodes: [
          {
            name: 'Delhi',
            value: 27000000,
          },
          {
            name: 'Mumbai',
            value: 21600000,
          },
          {
            name: 'Kolkata',
            value: 15600000,
          },
          {
            name: 'Chennai',
            value: 11100000,
          },
          {
            name: 'Bangalore',
            value: 10800000,
          },
          {
            name: 'Hyderabad',
            value: 9900000,
          },
          {
            name: 'Ahmedabad',
            value: 8100000,
          },
          {
            name: 'Pune',
            value: 6600000,
          },
          {
            name: 'Surat',
            value: 6500000,
          },
        ],
      },
      {
        name: 'China',
        value: 166200000,
        nodes: [
          {
            name: 'Shanghai',
            value: 25600000,
          },
          {
            name: 'Beijing',
            value: 22000000,
          },
          {
            name: 'Chongqing',
            value: 16300000,
          },
          {
            name: 'Tianjin',
            value: 13600000,
          },
          {
            name: 'Guangzhou',
            value: 13100000,
          },
          {
            name: 'Shenzhen',
            value: 12400000,
          },
          {
            name: 'Chengdu',
            value: 10200000,
          },
          {
            name: 'Nanjing',
            value: 9300000,
          },
          {
            name: 'Wuhan',
            value: 8500000,
          },
          {
            name: 'Hangzhou',
            value: 7800000,
          },
          {
            name: 'Xi\u2019an',
            value: 7100000,
          },
          {
            name: 'Changsha',
            value: 6900000,
          },
          {
            name: 'Harbin',
            value: 6800000,
          },
          {
            name: 'Zhengzhou',
            value: 6600000,
          },
        ],
      },
      {
        name: 'United States',
        value: 68600000,
        nodes: [
          {
            name: 'New York City',
            value: 18800000,
          },
          {
            name: 'Los Angeles',
            value: 13100000,
          },
          {
            name: 'Chicago',
            value: 9500000,
          },
          {
            name: 'Dallas-Fort Worth',
            value: 7600000,
          },
          {
            name: 'Houston',
            value: 7100000,
          },
          {
            name: 'Washington DC',
            value: 6300000,
          },
          {
            name: 'Miami',
            value: 6200000,
          },
        ],
      },
      {
        name: 'Indonesia',
        value: 17300000,
        nodes: [
          {
            name: 'Jakarta',
            value: 10800000,
          },
          {
            name: 'Surabaya',
            value: 6500000,
          },
        ],
      },
      {
        name: 'Pakistan',
        value: 29000000,
        nodes: [
          {
            name: 'Karachi',
            value: 16600000,
          },
          {
            name: 'Lahore',
            value: 12400000,
          },
        ],
      },
      {
        name: 'Nigeria',
        value: 14800000,
        nodes: [
          {
            name: 'Lagos',
            value: 14800000,
          },
        ],
      },
      {
        name: 'Brazil',
        value: 35200000,
        nodes: [
          {
            name: 'Sao Paulo',
            value: 21900000,
          },
          {
            name: 'Rio de Janeiro',
            value: 13300000,
          },
        ],
      },
      {
        name: 'Bangladesh',
        value: 21100000,
        nodes: [
          {
            name: 'Dhaka',
            value: 21100000,
          },
        ],
      },
      {
        name: 'Russia',
        value: 18700000,
        nodes: [
          {
            name: 'Moscow',
            value: 13100000,
          },
          {
            name: 'Saint Petersburg',
            value: 5600000,
          },
        ],
      },
      {
        name: 'Mexico',
        value: 21700000,
        nodes: [
          {
            name: 'Mexico City',
            value: 21700000,
          },
        ],
      },
    ],
  },
  unit: 'inhabitants',
};

const Styling = () => {
  const classes = `
    .opaque {
      opacity: 50%;
    }
  `;
  return (
    <div style={{ width: '800px' }}>
      <style>{classes}</style>
      <p>Default Styling</p>
      <TreeMap data={population} />

      <p>
        <pre>{'.opaque { opacity: 50%; }'}</pre>
      </p>
      <TreeMap data={population} className="opaque" />

      <p>
        <pre>{"style={{ width: '25%' }}"}</pre>
      </p>
      <TreeMap data={population} style={{ width: '25%' }} />
    </div>
  );
};
```
