## Time series forecast analysis

At this point, we know which analyzer we want to use and we understand its input parameters and its output definition. Now, we get to use it. Let's look at a complete example of how you would use the `dt.statistics.GenericForecastAnalyzer` analyzer to get a forecast of any time series metric.

The following sections use the client SDK directly. If you're building a React UI, skip to [Run the analysis from a React component](#run-the-analysis-from-a-react-component).

### Execute analyzer

This operation requires the scope `davis:analyzers:execute` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

Let's begin by creating a function that will request the forecast analysis:

```ts title="loadForecast.ts" testable
import { analyzersClient } from '@dynatrace-sdk/client-davis-analyzers';

export const loadForecast = async (query: string) => {
  const analyzerName = 'dt.statistics.GenericForecastAnalyzer';
  const response = await analyzersClient.executeAnalyzer({
    analyzerName,
    body: {
      timeSeriesData: {
        expression: query,
      },
    },
  });

  // ...
};
```

> **Note**
>
> Depending on the chosen analyzer and the analyzer input, additional scopes might be required, for example, `storage:buckets:read` and `storage:metrics:read` to enable the analyzer to read time series data from Grail™.

This function receives a DQL query as a parameter and triggers an async forecast analysis on the results of running said query via the `executeAnalyzer` function from the `analyzersClient`. If the analysis takes more than two seconds to finish, the response will contain a `requestToken` that will allow you to poll until the results are available.

### Poll analyzer execution

Let's create a new `pollExecution` function to handle the polling logic.

```ts title="pollExecution.ts" testable
import { AnalyzerResult, analyzersClient } from '@dynatrace-sdk/client-davis-analyzers';

export const pollExecution = async (analyzerName: string, requestToken: string): Promise<AnalyzerResult> => {
  const MAX_ATTEMPTS = 10;
  const INTERVAL_MS = 1000;
  let attempts = 0;

  while (attempts < MAX_ATTEMPTS) {
    await new Promise((resolve) => setTimeout(resolve, INTERVAL_MS));

    const { result } = await analyzersClient.pollAnalyzerExecution({
      analyzerName,
      requestToken,
    });

    if (result.executionStatus === 'COMPLETED') {
      return result;
    }

    if (result.executionStatus === 'ABORTED') {
      throw new Error('The analyzer execution was aborted');
    }

    attempts++;
  }

  const cancelResponse = await analyzersClient.cancelAnalyzerExecution({
    analyzerName,
    requestToken,
  });

  if (cancelResponse && cancelResponse.result.executionStatus === 'COMPLETED') {
    return cancelResponse.result;
  }

  throw new Error('Max polling retries reached');
};
```

Aside from the simple polling implementation, we've introduced two new functions:

- `pollAnalyzerExecution`: This function allows you to check the analysis execution status with the analyzer name and the request token you got in the initial request.
- `cancelAnalyzerExecution`: Once we've reached the max polling attempts, we recommend canceling the analysis execution. If the analysis finishes between the last poll and the cancellation, this function will return the analysis results. Otherwise, the response will be `undefined`.

### Handle analyzer output

We can now use `pollExecution` in our main function and extract the forecasting information as a `TimeseriesBand` from the analysis output:

```ts title="loadForecast.ts" skip-testing
import { analyzersClient } from '@dynatrace-sdk/client-davis-analyzers';
// highlight-start
import { convertToTimeseriesBand, TimeseriesBand } from '@dynatrace/strato-components/charts';
import { pollExecution } from './pollExecution';
// highlight-end

export const loadForecast = async (query: string): Promise<TimeseriesBand> => {
  const analyzerName = 'dt.statistics.GenericForecastAnalyzer';
  const response = await analyzersClient.executeAnalyzer({
    analyzerName,
    body: {
      timeSeriesData: {
        expression: query,
      },
    },
  });

  // highlight-start
  const analysisResult = response.requestToken
    ? await pollExecution(analyzerName, response.requestToken)
    : response.result;

  if (analysisResult.executionStatus === 'COMPLETED') {
    const analyzerOutput = analysisResult.output[0];
    const timeseriesBandData = convertToTimeseriesBand(
      analyzerOutput.timeSeriesDataWithPredictions.records[0],
      analyzerOutput.timeSeriesDataWithPredictions.types[0],
    );

    if (timeseriesBandData) {
      return timeseriesBandData.timeseriesBand;
    }

    throw new Error('Unexpected error');
  }

  throw new Error('The analyzer execution was aborted');
  // highlight-end
};
```

Your `loadForecast` function is now ready. You can provide any time series DQL query to this function, and it will handle the forecast analysis and return it in `TimeseriesBand` format, which you can use to visualize it.

> **Tip**
>
> You can learn more about visualizing a `TimeseriesBand` from the `TimeseriesChart` [reference page](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#band-chart).

### Run the analysis from a React component

This operation requires the following scopes:

- `davis:analyzers:execute`
- `storage:buckets:read`
- `storage:metrics:read`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

If you're calling the analyzer from React, the `useAnalyzer` hook from `@dynatrace-sdk/react-hooks` takes over the first two steps: it calls `executeAnalyzer`, polls the execution once per second for as long as it reports `RUNNING`, and exposes the resulting `AnalyzerResult` as `data`. You don't need your own `pollExecution`. You still handle the output yourself.

By default, the hook runs the analysis as soon as the component mounts. Pass `autoFetch: false` and `autoFetchOnUpdate: false` to defer it until a user action, and trigger it with `refetch`:

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useAnalyzer } from '@dynatrace-sdk/react-hooks';
import type { QueryResult } from '@dynatrace-sdk/client-query';
import { convertToTimeseriesBand, TimeseriesChart } from '@dynatrace/strato-components/charts';
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const forecastQuery = 'timeseries avg(dt.host.cpu.usage), from:-2h, interval:1m';

export const App = () => {
  const { data, error, isLoading, refetch } = useAnalyzer(
    {
      analyzerName: 'dt.statistics.GenericForecastAnalyzer',
      body: {
        timeSeriesData: {
          expression: forecastQuery,
        },
      },
    },
    { autoFetch: false, autoFetchOnUpdate: false },
  );

  const predictions = data?.output[0]?.timeSeriesDataWithPredictions as QueryResult | undefined;
  const record = predictions?.records[0];
  const band = predictions && record ? convertToTimeseriesBand(record, predictions.types[0]) : undefined;

  return (
    <Flex flexDirection="column" gap={16}>
      <Button onClick={() => void refetch()} loading={isLoading}>
        Run forecast
      </Button>
      {error && <Text>{error.message}</Text>}
      {band && (
        <TimeseriesChart data={band.timeseries}>
          <TimeseriesChart.Band data={band.timeseriesBand} />
        </TimeseriesChart>
      )}
    </Flex>
  );
};
```

The `data` of the hook is the same `AnalyzerResult` that `pollExecution` returns, so the conversion in [Handle analyzer output](#handle-analyzer-output) applies unchanged. A completed execution can still report `resultStatus: 'FAILED'` with an empty `output` array, which is why the example checks `output[0]` before converting the band.

The hook's polling differs in two ways from the `pollExecution` implementation in [Poll analyzer execution](#poll-analyzer-execution):

- It has no maximum number of attempts. It keeps polling for as long as the execution reports `RUNNING`, and only cancels the execution when the request is aborted, for example when the component unmounts or you call `cancel`.
- An `ABORTED` execution ends the polling and is returned as `data` instead of raising an error. If you need to distinguish it from a successful analysis, check `data.executionStatus` yourself.
