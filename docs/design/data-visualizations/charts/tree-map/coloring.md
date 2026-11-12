## Coloring

The `TreeMap` component provides a set of predefined color palettes that can be used out of the box to provide more appealing visualisations. See [Charts Colors](https://developer.dynatrace.com/design/design-tokens/Colors.md#colorscharts) for more info.

**Coloring**

```tsx
import {
  type ChartData,
  TreeMap,
  type ColoredRange,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const population: ChartData = [
  { category: '', country: 'India', city: 'Delhi', population: 27000000 },
  { category: '', country: 'India', city: 'Mumbai', population: 21600000 },
  { category: '', country: 'India', city: 'Kolkata', population: 15600000 },
  { category: '', country: 'India', city: 'Chennai', population: 11100000 },
  { category: '', country: 'India', city: 'Bangalore', population: 10800000 },
  { category: '', country: 'India', city: 'Hyderabad', population: 9900000 },
  { category: '', country: 'India', city: 'Ahmedabad', population: 8100000 },
  { category: '', country: 'India', city: 'Pune', population: 6600000 },
  { category: '', country: 'India', city: 'Surat', population: 6500000 },
  { category: '', country: 'China', city: 'Shanghai', population: 25600000 },
  { category: '', country: 'China', city: 'Beijing', population: 22000000 },
  { category: '', country: 'China', city: 'Chongqing', population: 16300000 },
  { category: '', country: 'China', city: 'Tianjin', population: 13600000 },
  { category: '', country: 'China', city: 'Guangzhou', population: 13100000 },
  { category: '', country: 'China', city: 'Shenzhen', population: 12400000 },
  { category: '', country: 'China', city: 'Chengdu', population: 10200000 },
  {
    category: '',
    country: 'United States',
    city: 'New York City',
    population: 18800000,
  },
  {
    category: '',
    country: 'United States',
    city: 'Los Angeles',
    population: 13100000,
  },
  {
    category: '',
    country: 'United States',
    city: 'Chicago',
    population: 9500000,
  },
  {
    category: '',
    country: 'United States',
    city: 'Houston',
    population: 7100000,
  },
  { category: '', country: 'Indonesia', city: 'Jakarta', population: 10800000 },
  { category: '', country: 'Pakistan', city: 'Karachi', population: 16600000 },
  { category: '', country: 'Brazil', city: 'Sao Paulo', population: 21900000 },
  { category: '', country: 'Bangladesh', city: 'Dhaka', population: 21100000 },
  { category: '', country: 'Russia', city: 'Moscow', population: 13100000 },
  {
    category: '',
    country: 'Mexico',
    city: 'Mexico City',
    population: 21700000,
  },
];

const populationGroupBy = ['category', 'country', 'city'];
const populationValueAccessor = 'population';

const servers: ChartData = [
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-0',
    logLevel: 'Error',
    value: 100,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-1',
    logLevel: 'None',
    value: 53,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-1',
    logLevel: 'Warning',
    value: 70,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-2',
    logLevel: 'Notice',
    value: 94,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-2',
    logLevel: 'Critical',
    value: 35,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-3',
    logLevel: 'Critical',
    value: 81,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-4',
    logLevel: 'None',
    value: 97,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-5',
    logLevel: 'Debug',
    value: 38,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-7',
    logLevel: 'Warning',
    value: 39,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-7',
    logLevel: 'Error',
    value: 88,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-8',
    logLevel: 'Emergency',
    value: 86,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-9',
    logLevel: 'Debug',
    value: 55,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-10',
    logLevel: 'Error',
    value: 52,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-12',
    logLevel: 'Warning',
    value: 93,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-14',
    logLevel: 'Emergency',
    value: 46,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-15',
    logLevel: 'Critical',
    value: 32,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-18',
    logLevel: 'Critical',
    value: 56,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-21',
    logLevel: 'Error',
    value: 77,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-27',
    logLevel: 'Warning',
    value: 98,
  },
  {
    category: 'Servers',
    server: 'dts-eu-zone1-server-31',
    logLevel: 'None',
    value: 75,
  },
];

const serversGroupBy = ['category', 'server', 'logLevel'];
const serversValueAccessor = 'value';

const userSessions: ChartData = [
  { category: '', region: 'Europe', city: 'Rome', count: 25 },
  { category: '', region: 'Europe', city: 'London', count: 200 },
  { category: '', region: 'Europe', city: 'Paris', count: 30 },
  { category: '', region: 'Europe', city: 'Madrid', count: 145 },
  { category: '', region: 'Europe', city: 'Berlin', count: 20 },
  { category: '', region: 'US', city: 'New York', count: 220 },
  { category: '', region: 'US', city: 'San Francisco', count: 180 },
  { category: '', region: 'US', city: 'Los Angeles', count: 200 },
  { category: '', region: 'US', city: 'Miami', count: 120 },
  { category: '', region: 'Asia', city: 'Hong kong', count: 90 },
  { category: '', region: 'Asia', city: 'Tokyo', count: 100 },
  { category: '', region: 'Asia', city: 'Bangkok', count: 25 },
  { category: '', region: 'Asia', city: 'Singapore', count: 60 },
];

const userSessionsGroupBy = ['category', 'region', 'city'];
const userSessionsValueAccessor = 'count';

const customRanges: ColoredRange[] = [
  {
    from: 0,
    to: 30,
    color: 'rgba(235, 84, 89, 1)',
  },
  {
    from: 30,
    to: 80,
    color: Colors.Charts.Rainbow.Orange.Default,
  },
  {
    from: 80,
    to: 150,
    color: Colors.Charts.Rainbow.Yellow.Default,
  },
  {
    from: 150,
    to: 200,
    color: 'rgba(147, 220, 184, 1)',
  },
  {
    from: 200,
    to: 350,
    color: Colors.Charts.Rainbow.Moss.Default,
  },
];

const Coloring = () => {
  return (
    <Flex gap={12} flexDirection="column">
      <Flex flexDirection="column">
        <h2>Coloring by Cluster</h2>
        <TreeMap
          data={population}
          groupBy={populationGroupBy}
          valueAccessor={populationValueAccessor}
          unit="inhabitants"
          labelsDisplay="clusters"
          // highlight-next-line
          colorPalette="blue-steel"
        />
      </Flex>

      <Flex flexDirection="column">
        <h2>Coloring by nameAccessor + log-level </h2>
        <TreeMap
          data={servers}
          groupBy={serversGroupBy}
          valueAccessor={serversValueAccessor}
          nameAccessor="logLevel"
          unit="cpu"
          // highlight-next-line
          colorPalette="log-level"
        />
      </Flex>

      <Flex flexDirection="column">
        <h2>Coloring by nameAccessor + random palette (unmatched nodes)</h2>
        <TreeMap
          data={servers}
          groupBy={serversGroupBy}
          valueAccessor={serversValueAccessor}
          nameAccessor="product"
          unit="cpu"
          // highlight-next-line
          colorPalette="blue-steel"
        />
      </Flex>

      <Flex flexDirection="column">
        <h2>Coloring by node names</h2>
        <TreeMap
          data={population}
          groupBy={populationGroupBy}
          valueAccessor={populationValueAccessor}
          nameAccessor="city"
          unit="inhabitants"
          labelsDisplay="clusters"
          // highlight-next-line
          colorPalette="categorical"
        />
      </Flex>

      <Flex flexDirection="column">
        <h2>Coloring by node values</h2>
        <TreeMap
          data={population}
          groupBy={populationGroupBy}
          valueAccessor={populationValueAccessor}
          nameAccessor="population"
          unit="inhabitants"
          labelsDisplay="clusters"
          // highlight-next-line
          colorPalette="turquoise"
        />
      </Flex>

      <Flex flexDirection="column">
        <h2>Coloring by custom node value ranges</h2>
        <TreeMap
          data={userSessions}
          groupBy={userSessionsGroupBy}
          valueAccessor={userSessionsValueAccessor}
          labelsDisplay="clusters"
          nameAccessor="count"
          // highlight-next-line
          colorPalette={customRanges}
        />
      </Flex>
    </Flex>
  );
};
```

### Color rules

The `TreeMap` component supports conditional coloring based on custom rules using the `TreeMap.ColorRule` slot. Color rules allow you to apply specific colors to nodes based on their properties, such as value comparisons or string matching.

Each `TreeMap.ColorRule` accepts the following properties:

- `comparator`: The comparison operator (e.g., 'greater-than', 'equals', 'starts-with', 'contains').
- `matchValue`: The value to compare against.
- `valueAccessor`: Optional, specifies which property of the node to evaluate. When omitted, the default target depends on the chart's `nameAccessor` prop: if `nameAccessor="value"` the rule evaluates `node.value`; otherwise it evaluates `node.name`. For explicit numerical comparisons on node values, always set `valueAccessor="value"`.
- `color` and `colorPalette` are mutually exclusive.
  - `color`: A specific color string (e.g., 'red', '#ff0000').
  - `colorPalette`: A predefined color palette name.

Rules are evaluated in the order they are defined, and the last matching rule applies.

**Slot Usage Examples:**

```tsx
<TreeMap data={data} colorPalette="fireplace">
  {/* Numerical comparison with single color */}
  <TreeMap.ColorRule comparator="greater-than" matchValue={100} color="red" />

  {/* String matching with color palette */}
  <TreeMap.ColorRule
    comparator="starts-with"
    matchValue="Error"
    colorPalette="log-level"
  />

  {/* Custom property access */}
  <TreeMap.ColorRule
    comparator="greater-than"
    matchValue={50}
    color="blue"
    valueAccessor="temperature"
  />
</TreeMap>
```

**ColorRules**

```tsx
import { TreeMap, type TreeMapData } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

// Sample data for testing color rules
const sampleTreeMapData: TreeMapData = {
  tree: {
    name: 'Root',
    value: 200,
    nodes: [
      {
        name: 'Category A',
        value: 40,
        nodes: [
          { name: 'Item A1', value: 20 },
          { name: 'Item A2', value: 8, temperature: 15 },
        ],
      },
      {
        name: 'Category B',
        value: 100,
        nodes: [
          { name: 'Item B1', value: 40 },
          { name: 'Item B2', value: 30 },
          { name: 'Item B3', value: 30 },
        ],
      },
      {
        name: 'Category C',
        value: 60,
        nodes: [
          { name: 'Item C1', value: 10 },
          { name: 'Item C2', value: 10 },
          { name: 'Item C3', value: 10 },
          { name: 'Item C4', value: 10 },
          { name: 'Item C5', value: 10 },
          { name: 'Item C6', value: 10 },
        ],
      },
    ],
  },
  unit: 'count',
};

// Data with different comparators
const comparatorData: TreeMapData = {
  tree: {
    name: 'Servers',
    value: 100,
    nodes: [
      {
        name: 'cluster',
        value: 100,
        nodes: [
          { name: 'Error Server', value: 25, status: 'error' },
          { name: 'Warning Server', value: 30, status: 'warning' },
          { name: 'Normal Server', value: 35, status: 'normal' },
          { name: 'Critical Server', value: 10, status: 'critical' },
        ],
      },
    ],
  },
  unit: 'cpu',
};

// Data with custom properties
const customPropertyData: TreeMapData = {
  tree: {
    name: 'Devices',
    value: 100,
    nodes: [
      {
        name: 'cluster',
        value: 100,
        nodes: [
          { name: 'Device 1', value: 20, battery: 95, location: 'US' },
          { name: 'Device 2', value: 25, battery: 75, location: 'EU' },
          { name: 'Device 3', value: 30, battery: 45, location: 'US' },
          { name: 'Device 4', value: 25, battery: 20, location: 'ASIA' },
        ],
      },
    ],
  },
  unit: 'usage',
};

const ColorRules = () => {
  return (
    <Flex gap={12} flexDirection="column">
      <Flex flexDirection="column">
        <h2>Numerical Color Rules</h2>
        <TreeMap
          data={sampleTreeMapData}
          labelsDisplay="all"
          nameAccessor="value"
          colorPalette="fireplace"
        >
          {/* highlight-start */}
          <TreeMap.ColorRule
            comparator="greater-than"
            matchValue={19}
            color="#a1e076"
          />
          <TreeMap.ColorRule
            comparator="greater-or-equal"
            matchValue={40}
            color="rebeccapurple"
          />
          <TreeMap.ColorRule
            comparator="greater-than"
            matchValue={10}
            color="blue"
            valueAccessor="temperature"
          />
          {/* highlight-end */}
        </TreeMap>
      </Flex>

      <Flex flexDirection="column">
        <h2>Categorical Color Rules</h2>
        <TreeMap
          data={sampleTreeMapData}
          nameAccessor="name"
          colorPalette="swamps"
          labelsDisplay="all"
        >
          <TreeMap.ColorRule
            comparator="starts-with"
            matchValue="Item B"
            color="red"
          />
          <TreeMap.ColorRule
            comparator="contains"
            matchValue="A"
            color="rebeccapurple"
          />
          <TreeMap.ColorRule
            comparator="ends-with"
            matchValue="1"
            color="blue"
          />
        </TreeMap>
      </Flex>

      <Flex flexDirection="column">
        <h2>Different Comparators</h2>
        <TreeMap
          data={comparatorData}
          nameAccessor="name"
          colorPalette="categorical"
          labelsDisplay="all"
        >
          <TreeMap.ColorRule
            comparator="equals"
            matchValue="error"
            color="red"
            valueAccessor="status"
          />
          <TreeMap.ColorRule
            comparator="starts-with"
            matchValue="Warning"
            color="orange"
            valueAccessor="status"
          />
          <TreeMap.ColorRule
            comparator="greater-than"
            matchValue={20}
            color="green"
          />
          <TreeMap.ColorRule
            comparator="less-or-equal"
            matchValue={15}
            color="purple"
          />
        </TreeMap>
      </Flex>

      <Flex flexDirection="column">
        <h2>Custom Properties (valueAccessor)</h2>
        <TreeMap
          data={customPropertyData}
          nameAccessor="name"
          colorPalette="turquoise"
          labelsDisplay="all"
        >
          <TreeMap.ColorRule
            comparator="greater-than"
            matchValue={80}
            color="green"
            valueAccessor="battery"
          />
          <TreeMap.ColorRule
            comparator="less-or-equal"
            matchValue={50}
            color="red"
            valueAccessor="battery"
          />
          <TreeMap.ColorRule
            comparator="equals"
            matchValue="US"
            color="blue"
            valueAccessor="location"
          />
        </TreeMap>
      </Flex>

      <Flex flexDirection="column">
        <h2>Rule Precedence (Order Matters)</h2>
        <TreeMap
          data={sampleTreeMapData}
          nameAccessor="value"
          colorPalette="fireplace"
          labelsDisplay="all"
        >
          {/* This rule would color values >= 10, but the next rule takes precedence for >= 40 */}
          <TreeMap.ColorRule
            comparator="greater-or-equal"
            matchValue={10}
            color="yellow"
          />
          <TreeMap.ColorRule
            comparator="greater-or-equal"
            matchValue={40}
            color="red"
          />
          <TreeMap.ColorRule
            comparator="greater-than"
            matchValue={19}
            color="green"
          />
        </TreeMap>
      </Flex>

      <Flex flexDirection="column">
        <h2>Single Colors vs Color Palettes</h2>
        <TreeMap
          data={sampleTreeMapData}
          nameAccessor="name"
          colorPalette="categorical"
          labelsDisplay="all"
        >
          {/* Single color */}
          <TreeMap.ColorRule
            comparator="starts-with"
            matchValue="Item A"
            color="#ff6b6b"
          />
          {/* Color palette */}
          <TreeMap.ColorRule
            comparator="starts-with"
            matchValue="Item B"
            colorPalette="rainbow"
          />
          {/* Another single color */}
          <TreeMap.ColorRule
            comparator="starts-with"
            matchValue="Item C"
            color="steelblue"
          />
        </TreeMap>
      </Flex>
    </Flex>
  );
};
```
