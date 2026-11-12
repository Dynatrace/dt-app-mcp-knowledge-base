## Intent options

The `XYChart` supports intent options in the toolbar. The intents appear in the toolbar's dropdown menu, allowing users to perform actions such as sharing a chart or viewing data in another application. When a single intent is configured and no download button is shown, the intent appears directly in the toolbar. When multiple intents are configured, or when both an intent and a download button are present, they are grouped under a **More options** submenu. To add intent options to a `XYChart`, use the `XYChart.Intent` subcomponent:

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

The following examples demonstrate different intent options in XYChart:

**IntentOptions**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { LineChartIcon, UfoIcon } from '@dynatrace/strato-icons';

const rectData = [
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 10,
  },

  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 30,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 50,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 100,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 20,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 50,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 40,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 20,
  },
];

const sampleQuery =
  'data record(timestamp = now() - 1h, cpu_usage = random() * 100), record(timestamp = now() - 45m, cpu_usage = random() * 100), record(timestamp = now() - 30m, cpu_usage = random() * 100), record(timestamp = now() - 15m, cpu_usage = random() * 100), record(timestamp = now(), cpu_usage = random() * 100) | makeTimeseries interval:15m, cpu_usage = avg(cpu_usage)';

const IntentOptions = () => {
  return (
    <XYChart data={rectData}>
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="numerical"
        position="bottom"
        min="data-min"
        max="data-max"
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        min="data-min"
        max="data-max"
      />
      <XYChart.Legend hidden />
      {/* highlight-start */}
      <XYChart.Intent
        payload={{
          'dt.query': 'fetch logs',
        }}
        options={{
          keyProperties: [],
        }}
        icon={<LineChartIcon />}
      >
        View logs
      </XYChart.Intent>
      <XYChart.Intent
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
      </XYChart.Intent>
      <XYChart.Intent
        payload={{
          'dt.query': sampleQuery,
        }}
        options={{
          recommendedAppId: 'dynatrace.dashboards',
          recommendedIntentId: 'add-query-to-dashboard',
        }}
      >
        Pin to dashboard
      </XYChart.Intent>
      <XYChart.Intent
        payload={{ 'dt.query': sampleQuery }}
        options={{
          keyProperties: [],
        }}
      >
        Open with ...
      </XYChart.Intent>
      {/* highlight-end */}
    </XYChart>
  );
};
```
