## AnnotationsChart.Marker

Markers are the individual data points or events within a track, which can represent a single value or a range. Each marker can have a `title`, `symbol`, and `description` to provide more context.

When the `symbol` is provided, it will be shown as marker content. As a fallback, if no `symbol` is provided, the `title` will be chosen as content.

In the case no `symbol` or `title` are provided, no content will be shown.

**Markers**

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
    color: '#B04740', // slightly darker indian red
    priority: 2,
  },
];

const timeline = [
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
  {
    title: 'Loading Hero Image',
    description: 'Time taken to load the hero image.',
    symbol: '🖼️',
    start: 4,
    color: '#187168', // slightly darker light sea green
  },
  {
    title: 'Loading Analytics JS',
    description: 'Time taken to load analytics JavaScript.',
    symbol: '📈',
    start: 5,
    color: '#6C8EC6', // slightly darker light sky blue
  },
];

const loadingTimes = [
  { label: 'JavaScript', markers: jsLoadingTimes },
  { label: 'CSS', markers: cssLoadingTimes },
  { label: 'Images', markers: imgLoadingTimes },
  { label: 'HTTP Requests', markers: httpRequestTimes },
  { label: 'Summary', markers: timeline },
];

const Markers = () => {
  return (
    <AnnotationsChart showLabels={true}>
      {loadingTimes.map((track) => {
        return (
          <AnnotationsChart.Track key={track.label} label={track.label}>
            {track.markers.map((marker, index) => {
              // highlight-next-line
              return <AnnotationsChart.Marker key={index} {...marker} />;
            })}
          </AnnotationsChart.Track>
        );
      })}
    </AnnotationsChart>
  );
};
```

### Symbol color

By default, the symbol color (text or SVG icon) inside a marker is determined automatically using WCAG contrast logic: the system picks either a light or dark token to maximize readability against the marker background.

Use the `symbolColor` prop to override this with an explicit CSS color value:

```tsx
<AnnotationsChart.Marker
  start={1}
  color="#1a237e"
  symbol={<MyIcon />}
  symbolColor="#ffffff"
/>
```

When `symbolColor` is omitted, the existing contrast-based coloring is used unchanged.

### Text overflow

To deal with text longer than the width of the marker containing it, an option between 'expand' and 'truncate' could be chosen. When 'expand' is selected the width of the marker will try to expand to fit all the content within, only applying an ellipsis when the width in the track is not enough to fit all the content. When 'truncate' is selected the width of the marker will be respected and the content will be cropped to fit it. You can specify if this truncation should be made at the 'start', 'middle' or 'end' of the text with the option 'truncateMode'.
