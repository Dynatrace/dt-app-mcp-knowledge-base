## Toolbar

The toolbar is where you can download data and use added Intents. It is displayed by default, but to customize it, you can add the `TreeMap.Toolbar` subcomponent, which supports the optional `hidden` and `placement` props.

**Toolbar**

```tsx
import { TreeMap, TreeMapData } from '@dynatrace/strato-components/charts';

const data: TreeMapData = {
  tree: {
    name: 'Products',
    value: 49829490152,
    nodes: [
      {
        name: 'Electronics',
        value: 14514935852,
        nodes: [
          {
            name: 'Laptop',
            value: 753198634,
          },
          {
            name: 'Smartphone',
            value: 451994563,
          },
          {
            name: 'Tablet',
            value: 904609560,
          },
          {
            name: 'Headphone',
            value: 96251227,
          },
          {
            name: 'Camera',
            value: 915941,
          },
        ],
      },
      {
        name: 'Clothing',
        value: 2782578138,
        nodes: [
          {
            name: 'Shirt',
            value: 357341335,
          },
          {
            name: 'Jeans',
            value: 413329215,
          },
          {
            name: 'Jacket',
            value: 915314258,
          },
        ],
      },
      {
        name: 'Books',
        value: 2212496555,
        nodes: [
          {
            name: 'Fiction',
            value: 265831248,
          },
          {
            name: 'Non-fiction',
            value: 755363149,
          },
        ],
      },
      {
        name: 'Food',
        value: 2758749398,
        nodes: [
          {
            name: 'Pizza',
            value: 665491136,
          },
          {
            name: 'Burger',
            value: 237486948,
          },
          {
            name: 'Salad',
            value: 223351515,
          },
          {
            name: 'Sushi',
            value: 854585672,
          },
          {
            name: 'Cake',
            value: 343538825,
          },
          {
            name: 'Ice cream',
            value: 434295302,
          },
        ],
      },
    ],
  },
  unit: 'USD',
};

const Toolbar = () => {
  return (
    <TreeMap data={data} height={500}>
      {/* highlight-next-line */}
      <TreeMap.Toolbar placement="bottom-left" />
    </TreeMap>
  );
};
```

### Behavioral tracking

The `TreeMap.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `TreeMap.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import { TreeMap, TreeMapData } from '@dynatrace/strato-components/charts';

const data: TreeMapData = {
  tree: {
    name: 'Products',
    value: 49829490152,
    nodes: [
      {
        name: 'Electronics',
        value: 14514935852,
        nodes: [
          { name: 'Laptop', value: 753198634 },
          { name: 'Smartphone', value: 451994563 },
          { name: 'Tablet', value: 904609560 },
        ],
      },
      {
        name: 'Clothing',
        value: 2782578138,
        nodes: [
          { name: 'Shirt', value: 357341335 },
          { name: 'Jeans', value: 413329215 },
        ],
      },
      {
        name: 'Books',
        value: 2212496555,
        nodes: [
          { name: 'Fiction', value: 265831248 },
          { name: 'Non-fiction', value: 755363149 },
        ],
      },
    ],
  },
  unit: 'USD',
};

const ToolbarBehaviorTracking = () => {
  return (
    <TreeMap data={data} height={350}>
      <TreeMap.Toolbar
        // highlight-start
        data-dt-name="treemap-toolbar"
        data-dt-features="chart-toolbar"
        data-dt-properties='{"chart-type": "treemap"}'
        // highlight-end
      />
      <TreeMap.DownloadCSV />
    </TreeMap>
  );
};
```
