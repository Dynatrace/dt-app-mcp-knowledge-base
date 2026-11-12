## States

If the app experiences any issue like an error or an empty dataset, two mechanisms exist to deal with those situations in a graceful way.

### Error state

#### Default

In case of an error thrown inside the chart, a predefined error message will be shown.

**DefaultErrorState**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const DefaultErrorState = () => {
  const data = { test: 34 } as unknown as ChartData;

  return <HoneycombChart data={data} colorPalette="log-level" />;
};
```

#### Custom

If you prefer to create your own error screen to preserve styles and information shown, you can create your own error state presenter.

**CustomErrorState**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const CustomErrorState = () => {
  const data = { test: 34 } as unknown as ChartData;

  return (
    <HoneycombChart data={data}>
      {/* highlight-start */}
      <HoneycombChart.ErrorState>
        <b>DATA</b> doesn't have the expected shape
      </HoneycombChart.ErrorState>
      {/* highlight-end */}
    </HoneycombChart>
  );
};
```

### Empty state

#### Default

When no data is provided to the chart, a predefined empty state message will be displayed.

**DefaultEmptyState**

```tsx
import { HoneycombChart } from '@dynatrace/strato-components/charts';

const DefaultEmptyState = () => {
  return <HoneycombChart data={[]} />;
};
```

#### Custom

An error message can be customized using `HoneycombChart.ErrorState` subcomponent.

**CustomEmptyState**

```tsx
import { HoneycombChart } from '@dynatrace/strato-components/charts';

const CustomEmptyState = () => {
  return (
    <HoneycombChart data={[]}>
      {/* highlight-start */}
      <HoneycombChart.EmptyState>
        Missing some <b>DATA</b> to chart.
      </HoneycombChart.EmptyState>
      {/* highlight-end */}
    </HoneycombChart>
  );
};
```
