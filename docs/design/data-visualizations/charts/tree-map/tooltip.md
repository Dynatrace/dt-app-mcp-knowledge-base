## Tooltip

By default, the `TreeMap` shows a tooltip on hover with the node name and value. Pass a render function as the `TreeMap.Tooltip` slot children to take full control over the tooltip content. The render function receives a single `TreeMapTooltipPayload` argument with the following properties:

- `hierarchyPath` — an array of node names from the root down to the hovered node (e.g. `['Root', 'Frontend', 'React']`).
- `value` — the numerical value of the node.
- `childrenCount` — an array of direct children names, or `undefined` for leaf nodes.

Set `hidden` to `true` on `TreeMap.Tooltip` to opt out of the tooltip entirely.

**Tooltip**

```tsx
import {
  TreeMap,
  type TreeMapData,
  type TreeMapTooltipPayload,
} from '@dynatrace/strato-components/charts';

const data: TreeMapData = {
  tree: {
    name: '',
    value: 0,
    nodes: [
      {
        name: 'Frontend',
        value: 650,
        nodes: [
          { name: 'React', value: 450 },
          { name: 'CSS', value: 120 },
          { name: 'HTML', value: 80 },
        ],
      },
      {
        name: 'Backend',
        value: 500,
        nodes: [
          { name: 'Node.js', value: 300 },
          { name: 'Go', value: 200 },
        ],
      },
      {
        name: 'Infrastructure',
        value: 350,
        nodes: [
          { name: 'Kubernetes', value: 250 },
          { name: 'Terraform', value: 100 },
        ],
      },
    ],
  },
};

const customTooltip = (payload: TreeMapTooltipPayload) => {
  return (
    <div style={{ padding: '8px 12px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        {payload.hierarchyPath.join(' > ')}
      </div>
      <div style={{ fontSize: '12px' }}>Value: {payload.value}</div>
      {payload.childrenCount && (
        <div style={{ fontSize: '12px', marginTop: '4px' }}>
          Children: {payload.childrenCount.join(', ')}
        </div>
      )}
    </div>
  );
};

const Tooltip = () => {
  return (
    <TreeMap data={data}>
      {/* highlight-start */}
      <TreeMap.Tooltip>{customTooltip}</TreeMap.Tooltip>
      {/* highlight-end */}
    </TreeMap>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import {
  ChartTooltip,
  TreeMap,
  type TreeMapData,
  type TreeMapTooltipPayload,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data: TreeMapData = {
  tree: {
    name: '',
    value: 0,
    nodes: [
      {
        name: 'Frontend',
        value: 650,
        nodes: [
          { name: 'React', value: 450 },
          { name: 'CSS', value: 200 },
        ],
      },
      {
        name: 'Backend',
        value: 500,
        nodes: [
          { name: 'Node.js', value: 300 },
          { name: 'Go', value: 200 },
        ],
      },
    ],
  },
};

const GlobalActions = () => {
  return (
    <TreeMap data={data}>
      <TreeMap.Tooltip>
        {(payload: TreeMapTooltipPayload) => (
          <>
            <ChartTooltip.SeriesItem
              name={
                payload.hierarchyPath[payload.hierarchyPath.length - 1] ?? ''
              }
              value={String(payload.value)}
              color=""
            />
            {/* highlight-start */}
            <ChartTooltip.Footer
              actions={[
                <ChartTooltip.Action
                  key="inspect"
                  label="Inspect entity"
                  icon={<MagnifyingGlassIcon />}
                  onSelect={() => {
                    // apply custom logic
                  }}
                />,
                <ChartTooltip.Action
                  key="open"
                  label="Open in Notebooks"
                  icon={<OpenWithIcon />}
                  onSelect={() => {
                    // apply custom logic
                  }}
                />,
              ]}
              unpinnedPlaceholderText={undefined}
            />
            {/* highlight-end */}
          </>
        )}
      </TreeMap.Tooltip>
    </TreeMap>
  );
};
```
