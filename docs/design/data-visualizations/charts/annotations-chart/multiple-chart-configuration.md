## Multiple chart configuration

Given certain situations it can be helpful to share a common chart configuration across several `AnnotationsChart` instances. To avoid repeating the same configuration in all instances, the `AnnotationsChartConfig` provider can be used. It accepts an object where the keys are either props of the `AnnotationsChart` component, or the corresponding object representation of each one of the `AnnotationsChart` subcomponents props. (`AnnotationsChart.XAxis` and `AnnotationsChart.Tooltip`).

A specific configuration of a `AnnotationsChart` instance will take precedence over the one specified in the `AnnotationsChartConfig`.

**MultipleChartsConfiguration**

```tsx
import { units } from '@dynatrace-sdk/units';
import {
  AnnotationsChart,
  AnnotationsChartConfig,
} from '@dynatrace/strato-components/charts';
import {
  DatabaseIcon,
  DynatraceSignetIcon,
  HttpIcon,
  LineChartIcon,
} from '@dynatrace/strato-icons';

const jsLoadingTimes = [
  {
    data: {
      description: '📄 Time taken to load the main JavaScript file.',
    },
    start: 2,
    end: 3,
    color: '#CC4C3B', // slightly darker tomato
    priority: 1,
  },
  {
    data: {
      title: '📂 Loading Vendor JS',
      description: 'Time taken to load vendor JavaScript libraries.',
    },
    start: 3,
    end: 5,
    color: '#B04740', // slightly darker indian red
    priority: 2,
  },
  {
    data: {
      title: 'Loading Analytics JS',
      description: 'Time taken to load analytics JavaScript.',
      symbol: <LineChartIcon />,
    },
    start: 1,
    end: 2,
    color: '#6C8EC6', // slightly darker light sky blue
    priority: 3,
  },
];

const cssLoadingTimes = [
  {
    data: {
      title: '📑 Loading Main CSS',
      description: 'Time taken to load the main CSS file.',
    },
    start: 1,
    end: 2,
    color: '#D4A538', // slightly darker gold
    priority: 1,
  },
  {
    data: {
      title: '🎨 Loading Theme CSS',
      description: 'Time taken to load theme-related CSS.',
    },
    start: 1.5,
    end: 3,
    color: '#D29068', // slightly darker light salmon
    priority: 2,
  },
];

const imgLoadingTimes = [
  {
    data: {
      title: 'Loading Logo Image',
      description: 'Time taken to load the logo image.',
      symbol: <DynatraceSignetIcon />,
    },
    start: 0.5,
    end: 1,
    color: '#D1508F', // slightly darker hot pink
    priority: 1,
  },
  {
    data: {
      title: 'Loading Hero Image',
      description: 'Time taken to load the hero image.',
    },
    start: 2,
    end: 4,
    color: '#187168', // slightly darker light sea green
    priority: 2,
  },
  {
    data: {
      title: 'Loading Thumbnail Images',
      description: 'Time taken to load all thumbnail images.',
    },
    start: 3,
    end: 5,
    color: '#CDA33B', // slightly darker gold
    priority: 3,
  },
];

const httpRequestTimes = [
  {
    data: {
      title: 'Initial HTML Request',
      description: 'Time taken to load the initial HTML document.',
      symbol: <HttpIcon />,
    },
    start: 0.5,
    end: 1,
    color: '#D48338', // slightly darker orange
    priority: 1,
  },
  {
    data: {
      title: 'API Data Request',
      description: 'Time taken to load data from API requests.',
      symbol: <DatabaseIcon />,
    },
    start: 2,
    end: 3,
    color: '#B04740', // slightly darker indian red
    priority: 2,
  },
];

const timeline = [
  {
    data: {
      title: 'Initial HTML Request',
      description: 'Time taken to load the initial HTML document.',
    },
    start: 0.5,
    color: '#D48338', // slightly darker orange
  },
  {
    data: {
      title: 'Loading Logo Image',
      description: 'Time taken to load the logo image.',
      symbol: '🖼️',
    },
    start: 1,
    color: '#D1508F', // slightly darker hot pink
  },
  {
    data: {
      title: 'Loading Main CSS',
      description: 'Time taken to load the main CSS file.',
      symbol: '📑',
    },
    start: 1,
    color: '#D4A538', // slightly darker gold
  },
  {
    data: {
      title: 'Loading Main JS File',
      description: 'Time taken to load the main JavaScript file.',
      symbol: '📄',
    },
    start: 2,
    color: '#CC4C3B', // slightly darker tomato
  },
  {
    data: {
      title: 'Loading Vendor JS',
      description: 'Time taken to load vendor JavaScript libraries.',
      symbol: '📂',
    },
    start: 3,
    color: '#B04740', // slightly darker indian red
  },
  {
    data: {
      title: 'Loading Thumbnail Images',
      description: 'Time taken to load all thumbnail images.',
      symbol: '🖼️',
    },
    start: 3,
    color: '#CDA33B', // slightly darker gold
  },
  {
    data: {
      title: 'API Data Request',
      description: 'Time taken to load data from API requests.',
      symbol: '🔄',
    },
    start: 4,
    color: '#B04740', // slightly darker indian red
  },
  {
    data: {
      title: 'Loading Hero Image',
      description: 'Time taken to load the hero image.',
      symbol: '🖼️',
    },
    start: 4,
    color: '#187168', // slightly darker light sea green
  },
  {
    data: {
      description: 'Time taken to load analytics JavaScript.',
    },
    start: 5,
    color: '#6C8EC6', // slightly darker light sky blue
  },
];

const loadingTimes1 = [
  { label: 'JavaScript', markers: jsLoadingTimes },
  { label: 'CSS', markers: cssLoadingTimes },
];

const loadingTimes2 = [
  { label: 'Images', markers: imgLoadingTimes },
  { label: 'HTTP Requests', markers: httpRequestTimes },
  { label: 'Summary', markers: timeline },
];

const loadingTimes3 = [
  { label: 'JavaScript', markers: jsLoadingTimes },
  { label: 'CSS', markers: cssLoadingTimes },
  { label: 'Images', markers: imgLoadingTimes },
  { label: 'HTTP Requests', markers: httpRequestTimes },
  { label: 'Summary', markers: timeline },
];

const config =
  '{"type":"annotations-chart","showLabels":true,"xAxisConfig":{"hidden":false,"type":"linear","min":0,"max":6,"unit":"sec","formatter":{"input":[{"group":"hour","index":1,"exponent":1}],"output":[{"group":"second","index":0,"exponent":1}]}},"tooltipConfig":{"hidden":true},"textOverflow":"truncate","truncateMode":"end"}';

const formatter = {
  input: units.time.minute,
  output: units.time.minute,
};

const MultipleChartsConfiguration = () => {
  return (
    // highlight-next-line
    <AnnotationsChartConfig value={config}>
      <AnnotationsChart>
        {loadingTimes1.map((track) => {
          return (
            <AnnotationsChart.Track key={track.label} label={track.label}>
              {track.markers.map((marker, index) => (
                <AnnotationsChart.Marker key={index} {...marker} />
              ))}
            </AnnotationsChart.Track>
          );
        })}
        <AnnotationsChart.XAxis min={0} />
      </AnnotationsChart>
      <AnnotationsChart showLabels={false}>
        {loadingTimes2.map((track) => {
          return (
            <AnnotationsChart.Track key={track.label} label={track.label}>
              {track.markers.map((marker, index) => (
                <AnnotationsChart.Marker key={index} {...marker} />
              ))}
            </AnnotationsChart.Track>
          );
        })}
        <AnnotationsChart.XAxis formatter={formatter} />
      </AnnotationsChart>
      <AnnotationsChart textOverflow="expand">
        {loadingTimes3.map((track) => {
          return (
            <AnnotationsChart.Track key={track.label} label={track.label}>
              {track.markers.map((marker, index) => (
                <AnnotationsChart.Marker key={index} {...marker} />
              ))}
            </AnnotationsChart.Track>
          );
        })}
        <AnnotationsChart.XAxis formatter={formatter} />
      </AnnotationsChart>
    </AnnotationsChartConfig>
  );
};
```
