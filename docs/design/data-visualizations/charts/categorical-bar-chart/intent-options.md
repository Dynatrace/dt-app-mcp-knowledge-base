## Intent options

The `CategoricalBarChart` supports intent options in the toolbar. The intents appear in the toolbar's dropdown menu, allowing users to perform actions such as sharing a chart or viewing data in another application.

When a single intent is configured and no download button is shown, the intent appears directly in the toolbar. When multiple intents are configured, or when both an intent and a download button are present, they are grouped under a **More options** submenu.

To add intent options to a `CategoricalBarChart`, use the `CategoricalBarChart.Intent` subcomponent:

### Intent properties

- `payload`: An object containing the data to be passed to the target app. The structure depends on the target application's requirements.
- `options`: Configuration options for the intent.
- `keyProperties`: Array of properties that should be included as keys in the intent.
- `recommendedAppId`: Suggested target application ID.
- `recommendedIntentId`: Suggested intent ID.
- `responseProperties`: Array of properties to be included in the response.
- `icon`: Optional custom icon to be displayed next to the intent option.
- `onResponse`: Optional callback function that is called when a response is received from the target app.

### Examples

The following examples demonstrates different intent options in CategoricalBarChart:

**IntentOptions**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Heading, Text } from '@dynatrace/strato-components/typography';
import { LineChartIcon, UfoIcon } from '@dynatrace/strato-icons';

const serviceResponse: CategoricalBarChartData[] = [
  { category: 'WebServer', value: 200, unit: 'ms' },
  { category: 'CreditCardVerification', value: 700, unit: 'ms' },
  { category: 'Payment', value: 439, unit: 'ms' },
  { category: 'API', value: 147, unit: 'ms' },
  { category: 'AddToCart', value: 84, unit: 'ms' },
];

const sampleQuery =
  'data record(timestamp = now() - 1h, cpu_usage = random() * 100), record(timestamp = now() - 45m, cpu_usage = random() * 100), record(timestamp = now() - 30m, cpu_usage = random() * 100), record(timestamp = now() - 15m, cpu_usage = random() * 100), record(timestamp = now(), cpu_usage = random() * 100) | makeTimeseries interval:15m, cpu_usage = avg(cpu_usage)';

const IntentOptions = () => {
  return (
    <Flex gap={32} flexDirection="column">
      <Flex flexDirection="column" gap={8}>
        <Heading>Multiple Intent Options</Heading>
        <Text>
          You can add multiple intent options to a chart to provide users with
          different ways to interact with the data.
        </Text>
        <CategoricalBarChart data={serviceResponse}>
          {/* highlight-start */}
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
          <CategoricalBarChart.Intent
            payload={{
              'dt.query': sampleQuery,
            }}
            options={{
              recommendedAppId: 'dynatrace.notebooks',
              recommendedIntentId: 'view-query',
            }}
            icon={<UfoIcon />}
          >
            Edit in notebook
          </CategoricalBarChart.Intent>
          <CategoricalBarChart.Intent
            payload={{
              'dt.query': sampleQuery,
            }}
            options={{
              recommendedAppId: 'dynatrace.dashboards',
              recommendedIntentId: 'add-query-to-dashboard',
            }}
          >
            Pin to dashboard
          </CategoricalBarChart.Intent>
          <CategoricalBarChart.Intent
            payload={{ 'dt.query': sampleQuery }}
            options={{
              keyProperties: [],
            }}
          >
            Open with ...
          </CategoricalBarChart.Intent>
          {/* highlight-end */}
        </CategoricalBarChart>
      </Flex>
    </Flex>
  );
};
```
