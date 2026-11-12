## Intent options

The `MultiMeterBarChart` supports intent options in the toolbar. The intents appear in the toolbar's dropdown menu, allowing users to perform actions such as sharing a chart or viewing data in another application.

When a single intent is configured and no download button is shown, the intent appears directly in the toolbar. When multiple intents are configured, or when both an intent and a download button are present, they are grouped under a **More options** submenu.

To add intent options to a `MultiMeterBarChart`, use the `MultiMeterBarChart.Intent` subcomponent:

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

The following examples demonstrate different intent options in MultiMeterBarChart:

**IntentOptions**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Heading, Text } from '@dynatrace/strato-components/typography';
import { LineChartIcon, UfoIcon } from '@dynatrace/strato-icons';

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
        <div style={{ width: '400px' }}>
          <MultiMeterBarChart colorPalette="blue-moss">
            <MultiMeterBarChart.Segment value={50} name="Rent" />
            <MultiMeterBarChart.Segment value={20} name="University" />
            <MultiMeterBarChart.Min />
            <MultiMeterBarChart.Max />
            <MultiMeterBarChart.Value />
            {/* highlight-start */}
            <MultiMeterBarChart.Intent
              payload={{ 'dt.query': sampleQuery }}
              options={{
                recommendedAppId: 'dynatrace.notebooks',
                recommendedIntentId: 'view-query',
              }}
              icon={<UfoIcon />}
            >
              Edit in notebook
            </MultiMeterBarChart.Intent>
            <MultiMeterBarChart.Intent
              payload={{ 'dt.query': sampleQuery }}
              options={{
                recommendedAppId: 'dynatrace.dashboards',
                recommendedIntentId: 'add-query-to-dashboard',
              }}
              icon={<LineChartIcon />}
            >
              Pin to dashboard
            </MultiMeterBarChart.Intent>
            <MultiMeterBarChart.Intent
              payload={{ 'dt.query': sampleQuery }}
              options={{ keyProperties: [] }}
            >
              Open with ...
            </MultiMeterBarChart.Intent>
            {/* highlight-end */}
          </MultiMeterBarChart>
        </div>
      </Flex>
    </Flex>
  );
};
```
