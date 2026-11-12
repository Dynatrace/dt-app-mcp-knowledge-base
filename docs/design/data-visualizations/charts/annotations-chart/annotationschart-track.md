## AnnotationsChart.Track

Tracks in the AnnotationsChart are horizontal bands that group related markers. Each track can have a `label`, which is displayed on the left side, and can represent a specific category of data.

Label width for tracks can be set by `labelWidth` property in AnnotationsChart component

**WidthLabelCustom**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';
import {
  DatabaseIcon,
  DynatraceSignetIcon,
  HttpIcon,
  LineChartIcon,
} from '@dynatrace/strato-icons';

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
    title: '📂 Loading Vendor JS',
    description: 'Time taken to load vendor JavaScript libraries.',
    start: 3,
    end: 5,
    color: '#B04740', // slightly darker indian red
    priority: 2,
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

const cssLoadingTimes = [
  {
    title: '📑 Loading Main CSS',
    description: 'Time taken to load the main CSS file.',
    start: 1,
    end: 2,
    color: '#D4A538', // slightly darker gold
    priority: 1,
  },
  {
    title: '🎨 Loading Theme CSS',
    description: 'Time taken to load theme-related CSS.',
    start: 1.5,
    end: 3,
    color: '#D29068', // slightly darker light salmon
    priority: 2,
  },
];

const imgLoadingTimes = [
  {
    title: 'Loading Logo Image',
    description: 'Time taken to load the logo image.',
    symbol: <DynatraceSignetIcon />,
    start: 0.5,
    end: 1,
    color: '#D1508F', // slightly darker hot pink
    priority: 1,
  },
  {
    title: 'Loading Hero Image',
    description: 'Time taken to load the hero image.',
    start: 2,
    end: 4,
    color: '#187168', // slightly darker light sea green
    priority: 2,
  },
  {
    title: 'Loading Thumbnail Images',
    description: 'Time taken to load all thumbnail images.',
    start: 3,
    end: 5,
    color: '#CDA33B', // slightly darker gold
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

const timeline = [
  {
    title: 'Initial HTML Request',
    description: 'Time taken to load the initial HTML document.',
    start: 0.5,
    color: '#D48338', // slightly darker orange
  },
  {
    title: 'Loading Logo Image',
    description: 'Time taken to load the logo image.',
    symbol: '🖼️',
    start: 1,
    color: '#D1508F', // slightly darker hot pink
  },
  {
    title: 'Loading Main CSS',
    description: 'Time taken to load the main CSS file.',
    symbol: '📑',
    start: 1,
    color: '#D4A538', // slightly darker gold
  },
  {
    title: 'Loading Main JS File',
    description: 'Time taken to load the main JavaScript file.',
    symbol: '📄',
    start: 2,
    color: '#CC4C3B', // slightly darker tomato
  },
  {
    title: 'Loading Vendor JS',
    description: 'Time taken to load vendor JavaScript libraries.',
    symbol: '📂',
    start: 3,
    color: '#B04740', // slightly darker indian red
  },
  {
    title: 'Loading Thumbnail Images',
    description: 'Time taken to load all thumbnail images.',
    symbol: '🖼️',
    start: 3,
    color: '#CDA33B', // slightly darker gold
  },
  {
    title: 'API Data Request',
    description: 'Time taken to load data from API requests.',
    symbol: '🔄',
    start: 4,
    color: '#B04740', // slightly darker indian red
  },
];

const loadingTimes = [
  { label: 'JavaScript', markers: jsLoadingTimes },
  { label: 'CSS', markers: cssLoadingTimes },
  { label: 'Images', markers: imgLoadingTimes },
  { label: 'HTTP Requests', markers: httpRequestTimes },
  { label: 'Summary', markers: timeline },
];

const WidthLabelCustom = () => {
  return (
    <AnnotationsChart
      showLabels={true}
      // highlight-next-line
      labelWidth={20}
    >
      {loadingTimes.map((track) => {
        return (
          <AnnotationsChart.Track key={track.label} label={track.label}>
            {track.markers.map((marker, index) => (
              <AnnotationsChart.Marker key={index} {...marker} />
            ))}
          </AnnotationsChart.Track>
        );
      })}
    </AnnotationsChart>
  );
};
```

The track is able to provide prop values for the markers inside of it, like `color` and `symbol`, which will be used as default values in case they are not provided on the marker level.

**Tracks**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';
import {
  DatabaseIcon,
  DynatraceSignetIcon,
  HttpIcon,
  LineChartIcon,
} from '@dynatrace/strato-icons';

const jsLoadingTimes = [
  {
    title: 'Loading Main JS File',
    description: '📄 Time taken to load the main JavaScript file.',
    start: 2,
    end: 3,
    priority: 1,
  },
  {
    title: 'Loading Analytics JS',
    description: 'Time taken to load analytics JavaScript.',
    symbol: <LineChartIcon />,
    start: 1,
    end: 2,
    priority: 3,
  },
];

const cssLoadingTimes = [
  {
    title: '📑 Loading Main CSS',
    description: 'Time taken to load the main CSS file.',
    start: 1,
    end: 2,
    color: '#D4A538', // slightly darker gold
    priority: 1,
  },
];

const imgLoadingTimes = [
  {
    title: 'Loading Logo Image',
    description: 'Time taken to load the logo image.',
    symbol: <DynatraceSignetIcon />,
    start: 0.5,
    end: 1,
    color: '#D1508F', // slightly darker hot pink
    priority: 1,
  },
  {
    title: 'Loading Hero Image',
    description: 'Time taken to load the hero image.',
    start: 2,
    end: 4,
    color: '#187168', // slightly darker light sea green
    priority: 2,
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
    priority: 2,
  },
];

const timeline = [
  {
    title: 'Loading Logo Image',
    description: 'Time taken to load the logo image.',
    symbol: '🖼️',
    start: 1,
  },
  {
    title: 'Loading Main CSS',
    description: 'Time taken to load the main CSS file.',
    symbol: '📑',
    start: 1,
  },
  {
    title: 'Loading Main JS File',
    description: 'Time taken to load the main JavaScript file.',
    symbol: '📄',
    start: 2,
  },
  {
    title: 'Loading Vendor JS',
    description: 'Time taken to load vendor JavaScript libraries.',
    symbol: '📂',
    start: 3,
  },
  {
    title: 'Loading Thumbnail Images',
    description: 'Time taken to load all thumbnail images.',
    symbol: '🖼️',
    start: 3,
  },
  {
    title: 'API Data Request',
    description: 'Time taken to load data from API requests.',
    symbol: '🔄',
    start: 4,
  },
  {
    title: 'Loading Hero Image',
    description: 'Time taken to load the hero image.',
    symbol: '🖼️',
    start: 4,
  },
  {
    title: 'Loading Analytics JS',
    description: 'Time taken to load analytics JavaScript.',
    symbol: '📈',
    start: 5,
  },
];

const loadingTimes = [
  { label: 'JavaScript', markers: jsLoadingTimes },
  { label: 'CSS', markers: cssLoadingTimes },
  { label: 'Images', markers: imgLoadingTimes },
  { label: 'HTTP Requests', markers: httpRequestTimes },
  { label: 'Summary', markers: timeline },
];

const Tracks = () => {
  return (
    <AnnotationsChart showLabels={true}>
      {loadingTimes.map((track, index) => {
        return (
          <AnnotationsChart.Track
            key={track.label}
            label={track.label}
            // highlight-next-line
            color={index % 2 === 0 ? '#187168' : '#B04740'}
          >
            {track.markers.map((marker, index) => {
              return <AnnotationsChart.Marker key={index} {...marker} />;
            })}
          </AnnotationsChart.Track>
        );
      })}
      <AnnotationsChart.Tooltip hidden={true}></AnnotationsChart.Tooltip>
    </AnnotationsChart>
  );
};
```
