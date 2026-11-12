## Intent options

The `HistogramChart` supports intent options in the toolbar. The intents appear in the toolbar's dropdown menu, allowing users to perform actions such as sharing a chart or viewing data in another application.

When a single intent is configured and no download button is shown, the intent appears directly in the toolbar. When multiple intents are configured, or when both an intent and a download button are present, they are grouped under a **More options** submenu.

To add intent options to a `HistogramChart`, use the `HistogramChart.Intent` subcomponent:

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

The following examples demonstrate different intent options in HistogramChart:

**IntentOptions**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Heading, Text } from '@dynatrace/strato-components/typography';
import { LineChartIcon, UfoIcon } from '@dynatrace/strato-icons';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
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
        <HistogramChart data={normalDistribution}>
          {/* highlight-start */}
          <HistogramChart.Intent
            payload={{
              'dt.query': 'fetch logs',
            }}
            options={{
              keyProperties: [],
            }}
            icon={<LineChartIcon />}
          >
            View logs
          </HistogramChart.Intent>
          <HistogramChart.Intent
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
          </HistogramChart.Intent>
          <HistogramChart.Intent
            payload={{
              'dt.query': sampleQuery,
            }}
            options={{
              recommendedAppId: 'dynatrace.dashboards',
              recommendedIntentId: 'add-query-to-dashboard',
            }}
          >
            Pin to dashboard
          </HistogramChart.Intent>
          <HistogramChart.Intent
            payload={{ 'dt.query': sampleQuery }}
            options={{
              keyProperties: [],
            }}
          >
            Open with ...
          </HistogramChart.Intent>
          {/* highlight-end */}
        </HistogramChart>
      </Flex>
    </Flex>
  );
};
```
