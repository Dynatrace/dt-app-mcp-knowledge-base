## Annotations component

In the `Annotations` component, we'll visualize the CPU and memory used by a specific host. On top of that, we'll add chart annotations with events from the same host. We'll use DQL to fetch the CPU, memory, and events data via the `useDql` hook. Finally, we'll use the `TimeseriesChart` component for the visualization.

The DQL queries for CPU and memory usage use the DQL `timeseries` command. After we have the results, we need to convert them to the appropriate type for the `TimeseriesChart` using the `convertToTimeseries` function. Additionally, we'll merge both converted outputs to have one time series for each metric.

For the events, the DQL query uses the record type `events` and filters by `event.kind`, so we only get what interests us. Similarly to the earlier queries, we need to convert the results to the appropriate type for the `TimeseriesChart.Annotations` component.

> **Note**
>
> "Davis" is the former brand name for Dynatrace AI, now called "Dynatrace Intelligence." Legacy strings and files may still use "Davis" and these references remain valid.

```tsx title="ui/app/components/Annotations.tsx"
import React from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import {
  convertToTimeseries,
  TimeseriesAnnotations,
  TimeseriesAnnotationsMarkerProps,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import { ResultRecord } from '@dynatrace-sdk/client-query';
import { TypedQueryResult, useDql } from '@dynatrace-sdk/react-hooks';

type EventAnnotation = TimeseriesAnnotationsMarkerProps & {
  eventId: string;
  color: string;
};

const hostId = 'HOST-ED51E6E3ECA7BA67';
const from = 'now() - 3d';

const EVENTS_QUERY = `fetch events, from: ${from}
| filter event.kind == "DAVIS_EVENT"
| filter dt.entity.host == "${hostId}"
| sort timestamp desc
| summarize {
    event.name = takeFirst(event.name),
    event.description = takeFirst(event.description),
    event.start = takeFirst(event.start),
    event.end = takeFirst(event.end),
    event.status = takeFirst(event.status)
  }, by:{event.id}`;
const HOST_CPU_QUERY = `timeseries from: ${from}, \`CPU Usage\` = avg(dt.host.cpu.usage),
  filter:dt.entity.host == "${hostId}"`;
const HOST_RAM_QUERY = `timeseries from: ${from}, \`RAM Usage \` = avg(dt.host.memory.usage),
  filter:dt.entity.host == "${hostId}"`;

const buildAnnotations = (data: TypedQueryResult): EventAnnotation[] =>
  data.records
    .filter((record) => record !== null)
    .map((event: ResultRecord) => {
      const rawStart = event['event.start'] as string;
      const rawEnd = event['event.end'] as string | undefined;

      const start = new Date(rawStart);
      const end = rawEnd ? new Date(rawEnd) : start;

      const color =
        event['event.status'] === 'ACTIVE'
          ? Colors.Charts.Loglevel.Warning.Default
          : Colors.Charts.Loglevel.Debug.Default;

      return {
        start,
        end,
        color,
        title: event['event.name'] as string,
        description: event['event.description'] as string,
        eventId: event['event.id'] as string,
      };
    });

const buildTimeseries = (...queryResults: (TypedQueryResult | undefined)[]) =>
  queryResults.flatMap((res) => (res ? convertToTimeseries(res.records, res.types, undefined, res.metadata) : []));

export const Annotations = () => {
  const hostCpuSeries = useDql({
    query: HOST_CPU_QUERY,
    enrich: 'metric-metadata',
  });
  const hostRamSeries = useDql({
    query: HOST_RAM_QUERY,
    enrich: 'metric-metadata',
  });
  const events = useDql({ query: EVENTS_QUERY });
  const isLoading = hostCpuSeries.isLoading || hostRamSeries.isLoading || events.isLoading;

  return (
    <Flex flexDirection="column" padding={32}>
      <Surface>
        {isLoading && <ProgressCircle />}
        {hostCpuSeries.data && hostRamSeries.data && (
          <TimeseriesChart data={buildTimeseries(hostCpuSeries.data, hostRamSeries.data)}>
            {events.data && events.data.records.length > 0 && (
              <TimeseriesChart.Annotations>
                <TimeseriesAnnotations.Track>
                  {buildAnnotations(events.data).map((event) => (
                    <TimeseriesAnnotations.Marker key={event.eventId} {...event} />
                  ))}
                </TimeseriesAnnotations.Track>
              </TimeseriesChart.Annotations>
            )}
          </TimeseriesChart>
        )}
      </Surface>
    </Flex>
  );
};
```

This operation requires the following scopes:

- `storage:buckets:read`
- `storage:events:read`
- `storage:metrics:read`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
