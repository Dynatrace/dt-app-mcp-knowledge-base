## AnnotationsChart.Tooltip

It's possible to customize the tooltip by providing a custom HTML template.

To define the template, use a callback handler that receives the relevant marker data. This data includes both the current hovered marker and any overlapping markers that are close by, allowing the creation of a detailed and informative tooltip.

If no tooltip template is provided, then the default tooltip will be shown instead. Optionally, tooltip can be opted out by setting `hidden` prop to true.

**Tooltip**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { DatabaseIcon, HttpIcon, LineChartIcon } from '@dynatrace/strato-icons';

const jsLoadingTimes = [
  {
    title: 'Loading Main JS File',
    description: '📄 Time taken to load the main JavaScript file.',
    start: 2,
    end: 3,
    color: '#CC4C3B', // slightly darker tomato
    priority: 1,
  },
  {
    title: 'Loading Analytics JS',
    description: 'Time taken to load analytics JavaScript.',
    symbol: <LineChartIcon />,
    start: 1,
    end: 2,
    color: '#6C8EC6', // slightly darker light sky blue
    priority: 3,
  },
];

const httpRequestTimes = [
  {
    title: 'Initial HTML Request',
    description: 'Time taken to load the initial HTML document.',
    symbol: <HttpIcon />,
    start: 0.5,
    end: 1,
    color: '#D48338', // slightly darker orange
    priority: 1,
  },
  {
    title: 'API Data Request',
    description: 'Time taken to load data from API requests.',
    symbol: <DatabaseIcon />,
    start: 2,
    end: 3,
    color: '#B04740', // slightly darker indian red
    priority: 2,
  },
];

const loadingTimes = [
  { label: 'JavaScript', markers: jsLoadingTimes },
  { label: 'HTTP Requests', markers: httpRequestTimes },
];

const Tooltip = () => {
  return (
    <Flex>
      <div style={{ width: '40%' }}>
        <AnnotationsChart showLabels={true}>
          {loadingTimes.map((track) => {
            return (
              <AnnotationsChart.Track key={track.label} label={track.label}>
                {track.markers.map((marker, index) => {
                  return <AnnotationsChart.Marker key={index} {...marker} />;
                })}
              </AnnotationsChart.Track>
            );
          })}
        </AnnotationsChart>
      </div>
      <div style={{ width: '40%' }}>
        <AnnotationsChart showLabels={true}>
          {loadingTimes.map((track) => {
            return (
              <AnnotationsChart.Track key={track.label} label={track.label}>
                {track.markers.map((marker, index) => {
                  return <AnnotationsChart.Marker key={index} {...marker} />;
                })}
              </AnnotationsChart.Track>
            );
          })}
          {/* highlight-next-line */}
          <AnnotationsChart.Tooltip hidden={true}></AnnotationsChart.Tooltip>
        </AnnotationsChart>
      </div>
    </Flex>
  );
};
```

#### Custom tooltip

Pass a render function as the `AnnotationsChart.Tooltip` slot children to take full control over what is displayed when a marker is hovered or pinned. The render function receives two arguments:

1. `hoveredMarkers` — an array of `AnnotationsTooltipItem` entries that represent markers occupying the hovered position (multiple entries when markers overlap at the same time/range).
2. `closeMarkers` — an array of marker groups whose ranges overlap the hovered group but sit at different time positions (one group per neighbouring collision).

Each `AnnotationsTooltipItem` exposes `start`, `end?` (set on range markers), `color`, `title?`, `description?`, `symbol?`, and any extra metadata you forwarded on the `AnnotationsChart.Marker` slot.

You can compose the tooltip using `ChartTooltip` primitives (or any custom markup) — exactly the same building blocks used by other Strato charts.

**CustomTooltip**

```tsx
import {
  AnnotationsChart,
  _ChartTooltip as ChartTooltip,
} from '@dynatrace/strato-components/charts';
import { DatabaseIcon, HttpIcon, LineChartIcon } from '@dynatrace/strato-icons';

const jsLoadingTimes = [
  {
    title: 'Loading Main JS File',
    description: '📄 Time taken to load the main JavaScript file.',
    start: 2,
    end: 3,
    color: '#CC4C3B', // slightly darker tomato
    priority: 1,
  },
  {
    title: 'Loading Analytics JS',
    description: 'Time taken to load analytics JavaScript.',
    symbol: <LineChartIcon />,
    start: 1,
    end: 2,
    color: '#6C8EC6',
    priority: 3,
  },
];

const httpRequestTimes = [
  {
    title: 'Initial HTML Request',
    description: 'Time taken to load the initial HTML document.',
    symbol: <HttpIcon />,
    start: 0.5,
    end: 1,
    color: '#D48338',
    priority: 1,
  },
  {
    title: 'API Data Request',
    description: 'Time taken to load data from API requests.',
    symbol: <DatabaseIcon />,
    start: 2,
    end: 3,
    color: '#B04740',
    priority: 2,
  },
];

const loadingTimes = [
  { label: 'JavaScript', markers: jsLoadingTimes },
  { label: 'HTTP Requests', markers: httpRequestTimes },
];

const CustomTooltip = () => {
  return (
    <AnnotationsChart showLabels={true}>
      {loadingTimes.map((track) => (
        <AnnotationsChart.Track key={track.label} label={track.label}>
          {track.markers.map((marker, index) => (
            <AnnotationsChart.Marker key={index} {...marker} />
          ))}
        </AnnotationsChart.Track>
      ))}
      {/* highlight-start */}
      <AnnotationsChart.Tooltip>
        {(hoveredMarkers) => {
          const [marker] = hoveredMarkers;
          if (!marker) {
            return null;
          }
          const range =
            marker.end !== undefined
              ? `${marker.start} – ${marker.end}s`
              : `${marker.start}s`;
          return (
            <>
              {/* Free-form HTML title — demonstrates that the tooltip body
                  accepts any ReactNode, not just ChartTooltip atoms. */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {marker.symbol}
                {marker.title ?? 'Untitled marker'}
              </div>
              {marker.description ? (
                <p style={{ margin: '0 0 8px', opacity: 0.85 }}>
                  {marker.description}
                </p>
              ) : null}
              {/* ChartTooltip atoms for structured, color-coded rows. */}
              <ChartTooltip.SeriesItem
                color={marker.color}
                name="Range"
                value={range}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 4,
                }}
              >
                <span style={{ fontWeight: 500 }}>Starts at</span>
                <ChartTooltip.Chip>{`${marker.start}s`}</ChartTooltip.Chip>
              </div>
            </>
          );
        }}
      </AnnotationsChart.Tooltip>
      {/* highlight-end */}
    </AnnotationsChart>
  );
};
```
