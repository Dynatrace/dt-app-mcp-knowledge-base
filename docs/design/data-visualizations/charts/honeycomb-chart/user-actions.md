## User actions

A user action is a creator-defined interaction with a given node in the hive. Basic interactions include copying the node name and inspecting the underlying data of it. In order to enable user actions, the `ChartSeriesAction` subcomponent needs to be appended within the `HoneycombChart`. More subcomponents can be added within this component, for instance the `ChartSeriesAction.Item`, where custom logic can be applied. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**TooltipActions**

```tsx
import { useState } from 'react';

import {
  type ChartData,
  ChartSeriesAction,
  HoneycombChart,
  HoneycombTileData,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const honeycombTileNumericData: ChartData = [
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
  { value: 10958, name: 'Alert' },
  { value: 7095, name: 'Error' },
  { value: 6935, name: 'Emergency' },
  { value: 1273, name: 'None' },
  { value: 2368, name: 'Warning' },
  { value: 10321, name: 'Alert' },
  { value: 3638, name: 'Notice' },
];

const TooltipActions = () => {
  const [selectedSeries, setSelectedSeries] = useState<HoneycombTileData>();

  return (
    <>
      <HoneycombChart
        width={400}
        height={200}
        data={honeycombTileNumericData}
        // highlight-next-line
        seriesActions={(s: HoneycombTileData) => (
          <ChartSeriesAction>
            <ChartSeriesAction.Item
              key={s?.name}
              onSelect={() => {
                setSelectedSeries(s);
              }}
            >
              <ChartSeriesAction.ItemIcon>
                <MagnifyingGlassIcon />
              </ChartSeriesAction.ItemIcon>
              Select tile
            </ChartSeriesAction.Item>
          </ChartSeriesAction>
        )}
      />

      {selectedSeries && (
        <>
          <h4>Selected Tile: {selectedSeries.name}</h4>
          <div>{selectedSeries.value}</div>
        </>
      )}
    </>
  );
};
```
