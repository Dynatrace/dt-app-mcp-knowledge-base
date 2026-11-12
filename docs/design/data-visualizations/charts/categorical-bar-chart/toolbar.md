## Toolbar

The toolbar is where you can download data and use added Intents. It is displayed by default, but to customize it, you can add the `CategoricalBarChart.Toolbar` subcomponent, which supports the optional `hidden` and `placement` props.

**Toolbar**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { LineChartIcon } from '@dynatrace/strato-icons';

const serviceResponse: CategoricalBarChartData[] = [
  { category: 'WebServer', value: 200, unit: 'ms' },
  { category: 'CreditCardVerification', value: 700, unit: 'ms' },
  { category: 'Payment', value: 439, unit: 'ms' },
  { category: 'API', value: 147, unit: 'ms' },
  { category: 'AddToCart', value: 84, unit: 'ms' },
];

const Toolbar = () => {
  return (
    <Flex gap={32} flexDirection="column">
      <Flex flexDirection="column" gap={8}>
        <CategoricalBarChart data={serviceResponse}>
          <CategoricalBarChart.Intent
            payload={{
              'dt.query': 'fetch logs',
            }}
            options={{
              keyProperties: [],
            }}
            icon={<LineChartIcon />}
          >
            View logs
          </CategoricalBarChart.Intent>
          {/* highlight-start */}
          <CategoricalBarChart.Toolbar placement="bottom-left" />
          {/* highlight-end */}
        </CategoricalBarChart>
      </Flex>
    </Flex>
  );
};
```

### Behavioral tracking

The `CategoricalBarChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `CategoricalBarChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const serviceResponse: CategoricalBarChartData[] = [
  { category: 'WebServer', value: 200, unit: 'ms' },
  { category: 'CreditCardVerification', value: 700, unit: 'ms' },
  { category: 'Payment', value: 439, unit: 'ms' },
  { category: 'API', value: 147, unit: 'ms' },
  { category: 'AddToCart', value: 84, unit: 'ms' },
];

const ToolbarBehaviorTracking = () => {
  return (
    <CategoricalBarChart data={serviceResponse}>
      {/* highlight-start */}
      <CategoricalBarChart.Toolbar
        data-dt-name="categorical-bar-toolbar"
        data-dt-features="chart-toolbar"
        data-dt-properties='{"chart-type": "categorical-bar"}'
      />
      {/* highlight-end */}
    </CategoricalBarChart>
  );
};
```
