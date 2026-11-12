## User actions

A user action is a creator-defined interaction with a given node in the hive. Basic interactions include copying the node name and inspecting the underlying data of it. In order to enable user actions, the `ChartSeriesAction` subcomponent needs to be appended within the `AnnotationsChart`. More subcomponents can be added within this component, for instance the `ChartSeriesAction.Item`, where custom logic can be applied. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**CustomActions**

```tsx
import {
  AnnotationsChart,
  ChartSeriesAction,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  MagnifyingGlassIcon,
  OpenWithIcon,
  ViewIcon,
} from '@dynatrace/strato-icons';

const loadBalancerEvents = [
  {
    title: 'Marked for termination',
    description: 'AuthenticationService',
    symbol: <ViewIcon />,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
  },
  {
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
  },
];

const CustomActions = () => {
  return (
    <AnnotationsChart
      // highlight-next-line
      annotationsActions={(data) => {
        return (
          <ChartSeriesAction>
            <ChartSeriesAction.Item
              key="notebooks-button"
              onSelect={() => {
                // apply custom logic
              }}
            >
              <ChartSeriesAction.ItemIcon>
                <OpenWithIcon />
              </ChartSeriesAction.ItemIcon>
              Open in Notebooks
            </ChartSeriesAction.Item>
            <ChartSeriesAction.Item
              key="details-button"
              onSelect={() => {
                // apply custom logic
              }}
            >
              <ChartSeriesAction.ItemIcon>
                <MagnifyingGlassIcon />
              </ChartSeriesAction.ItemIcon>
              Inspect entity details
            </ChartSeriesAction.Item>
          </ChartSeriesAction>
        );
      }}
    >
      <AnnotationsChart.Track>
        {loadBalancerEvents.map((marker, markerIndex) => (
          <AnnotationsChart.Marker key={markerIndex} {...marker} />
        ))}
      </AnnotationsChart.Track>
      ))
    </AnnotationsChart>
  );
};
```
