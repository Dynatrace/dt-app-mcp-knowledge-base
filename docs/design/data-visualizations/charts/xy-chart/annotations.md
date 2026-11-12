## Annotations

Annotations are used to visualize specific events or contextual notes on the `XYChart` in the form of markers placed in time-based or numerical-based tracks.

The marker represents an annotation at a certain point. They can be either a value (a certain time or number) or a range (from-to object), depending on the data provided to the Annotation. Annotations within the same timestamp/timeframe/number are grouped together under a single marker that displays the number of grouped annotations. Markers can be displayed on a single or multiple tracks. When there are more than three tracks, an overflow scroll is applied.

### Add annotations to the chart

In order to visualize annotation data inside the `XYChart`, a `XYChart.Annotations` component should be initialized. This component should have at least one track, that contains a marker component per annotation data point.

The data provided to the `XYChart.Annotations` component via the `data` property is combined with the defined accessors to generate the corresponding tracks and markers. Also a mandatory `xAxisId` is required to match with the corresponding `XYChart.XAxis`, which can be either the bottom or the top one.

The `XYChartAnnotations.Track` should have a unique track ID (`trackIdAccessor`) that will be used to match all the markers that belong to that specific track. Additional optional parameters include: `labelAccessor`, `colorAccessor`, `symbol`, `indicatorDisplay` and `hidden`.

An annotation data point `XYChartAnnotations.Marker` should have a unique track ID (`trackByAccessor`) that will be used to match the track it belongs. Additional parameters include some which are mandatory `startAccessor` and `endAccessor`, and an optional `symbol`, `titleAccessor`, `descriptionAccessor`, `colorAccessor` and `priority`, which will be displayed in the tooltip.

**AnnotationsData**

```tsx
import type { ReactNode } from 'react';

import {
  XYChart,
  XYChartAnnotations,
  type IndicatorsDisplay,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  DynatraceIcon,
  ExploitIcon,
  ExploitOffIcon,
  IdeaIcon,
  ResearchIcon,
} from '@dynatrace/strato-icons';

const symbols = {
  idea: <IdeaIcon />,
  research: <ResearchIcon />,
  dtLogo: <DynatraceIcon />,
  exploit: <ExploitIcon />,
  exploitOff: <ExploitOffIcon />,
};

const dotData = [
  { seriesName: 'blue-series-name', x: 0, y: 0 },
  { seriesName: 'blue-series-name', x: 500, y: 1000 },
  { seriesName: 'blue-series-name', x: 0, y: 1000 },
  { seriesName: 'blue-series-name', x: 500, y: 0 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.891 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 23.345, y: 89.123 },
  { seriesName: 'blue-series-name', x: 12.234, y: 45.678 },
  { seriesName: 'blue-series-name', x: 45.456, y: 67.891 },
  { seriesName: 'blue-series-name', x: 67.123, y: 23.456 },
  { seriesName: 'blue-series-name', x: 89.789, y: 12.345 },
  { seriesName: 'blue-series-name', x: 12.567, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.678, y: 78.456 },
  { seriesName: 'blue-series-name', x: 34.789, y: 56.789 },
  { seriesName: 'blue-series-name', x: 45.89, y: 34.123 },
  { seriesName: 'blue-series-name', x: 56.789, y: 12.789 },
  { seriesName: 'blue-series-name', x: 67.456, y: 78.123 },
  { seriesName: 'blue-series-name', x: 78.123, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.456, y: 23.89 },
  { seriesName: 'blue-series-name', x: 90.123, y: 12.567 },
  { seriesName: 'blue-series-name', x: 23.89, y: 34.789 },
  { seriesName: 'blue-series-name', x: 34.123, y: 56.89 },
  { seriesName: 'blue-series-name', x: 12.789, y: 78.345 },
  { seriesName: 'blue-series-name', x: 78.89, y: 45.456 },
  { seriesName: 'blue-series-name', x: 45.678, y: 67.123 },
  { seriesName: 'blue-series-name', x: 67.234, y: 89.89 },
  { seriesName: 'blue-series-name', x: 89.567, y: 12.234 },
  { seriesName: 'blue-series-name', x: 12.345, y: 34.567 },
  { seriesName: 'blue-series-name', x: 23.456, y: 56.789 },
  { seriesName: 'blue-series-name', x: 45.678, y: 78.123 },
  { seriesName: 'blue-series-name', x: 67.891, y: 89.456 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.789 },
  { seriesName: 'blue-series-name', x: 67.891, y: 12.345 },
  { seriesName: 'blue-series-name', x: 89.012, y: 45.678 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 78.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 90.789 },
  { seriesName: 'blue-series-name', x: 67.891, y: 23.456 },
  { seriesName: 'blue-series-name', x: 89.012, y: 12.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 45.678 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 89.012 },
  { seriesName: 'blue-series-name', x: 67.891, y: 12.345 },
  { seriesName: 'blue-series-name', x: 89.012, y: 45.678 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 56.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 89.012 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.012, y: 67.89 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 12.345 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.567 },
  { seriesName: 'blue-series-name', x: 67.891, y: 56.789 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 45.678 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 12.345 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.789 },
  { seriesName: 'blue-series-name', x: 45.678, y: 23.456 },
  { seriesName: 'blue-series-name', x: 67.891, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.012, y: 67.89 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 12.345 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.567 },
  { seriesName: 'blue-series-name', x: 67.891, y: 56.789 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 89.012 },
  { seriesName: 'pink-series-name', subX: 451.23, subY: 934.56 },
  { seriesName: 'pink-series-name', subX: 124.32, subY: 435.78 },
  { seriesName: 'pink-series-name', subX: 352.18, subY: 876.12 },
  { seriesName: 'pink-series-name', subX: 97.53, subY: 193.54 },
  { seriesName: 'pink-series-name', subX: 305.67, subY: 678.43 },
  { seriesName: 'pink-series-name', subX: 210.34, subY: 845.22 },
  { seriesName: 'pink-series-name', subX: 467.85, subY: 934.12 },
  { seriesName: 'pink-series-name', subX: 189.34, subY: 124.34 },
  { seriesName: 'pink-series-name', subX: 256.78, subY: 897.56 },
  { seriesName: 'pink-series-name', subX: 384.56, subY: 763.89 },
  { seriesName: 'pink-series-name', subX: 75.23, subY: 293.45 },
  { seriesName: 'pink-series-name', subX: 199.34, subY: 647.12 },
  { seriesName: 'pink-series-name', subX: 423.78, subY: 354.76 },
  { seriesName: 'pink-series-name', subX: 101.54, subY: 987.23 },
  { seriesName: 'pink-series-name', subX: 315.67, subY: 543.78 },
  { seriesName: 'pink-series-name', subX: 271.23, subY: 434.56 },
  { seriesName: 'pink-series-name', subX: 398.12, subY: 287.45 },
  { seriesName: 'pink-series-name', subX: 126.89, subY: 964.12 },
  { seriesName: 'pink-series-name', subX: 449.67, subY: 785.34 },
  { seriesName: 'pink-series-name', subX: 234.76, subY: 413.89 },
  { seriesName: 'pink-series-name', subX: 367.45, subY: 675.23 },
  { seriesName: 'pink-series-name', subX: 92.87, subY: 824.67 },
  { seriesName: 'pink-series-name', subX: 217.56, subY: 324.89 },
  { seriesName: 'pink-series-name', subX: 474.34, subY: 912.34 },
  { seriesName: 'pink-series-name', subX: 162.78, subY: 145.67 },
  { seriesName: 'pink-series-name', subX: 306.34, subY: 827.89 },
  { seriesName: 'pink-series-name', subX: 413.78, subY: 965.23 },
  { seriesName: 'pink-series-name', subX: 234.12, subY: 732.54 },
  { seriesName: 'pink-series-name', subX: 89.23, subY: 283.65 },
  { seriesName: 'pink-series-name', subX: 376.45, subY: 583.23 },
  { seriesName: 'pink-series-name', subX: 127.67, subY: 942.78 },
  { seriesName: 'pink-series-name', subX: 485.12, subY: 765.45 },
  { seriesName: 'pink-series-name', subX: 238.89, subY: 635.89 },
  { seriesName: 'pink-series-name', subX: 410.23, subY: 839.12 },
  { seriesName: 'pink-series-name', subX: 64.12, subY: 193.78 },
  { seriesName: 'pink-series-name', subX: 156.87, subY: 923.45 },
  { seriesName: 'pink-series-name', subX: 343.12, subY: 873.23 },
  { seriesName: 'pink-series-name', subX: 101.23, subY: 319.45 },
  { seriesName: 'pink-series-name', subX: 456.78, subY: 567.89 },
  { seriesName: 'pink-series-name', subX: 278.45, subY: 714.56 },
  { seriesName: 'pink-series-name', subX: 387.12, subY: 934.78 },
  { seriesName: 'pink-series-name', subX: 194.56, subY: 823.12 },
  { seriesName: 'pink-series-name', subX: 143.87, subY: 495.23 },
  { seriesName: 'pink-series-name', subX: 399.23, subY: 265.89 },
  { seriesName: 'pink-series-name', subX: 183.12, subY: 756.45 },
  { seriesName: 'pink-series-name', subX: 329.67, subY: 865.12 },
  { seriesName: 'pink-series-name', subX: 212.78, subY: 412.78 },
  { seriesName: 'pink-series-name', subX: 75.12, subY: 963.12 },
  { seriesName: 'pink-series-name', subX: 457.34, subY: 734.89 },
  { seriesName: 'pink-series-name', subX: 287.23, subY: 213.34 },
  { seriesName: 'pink-series-name', subX: 198.67, subY: 647.12 },
  { seriesName: 'pink-series-name', subX: 312.34, subY: 876.78 },
  { seriesName: 'pink-series-name', subX: 135.45, subY: 543.45 },
  { seriesName: 'pink-series-name', subX: 468.78, subY: 947.23 },
  { seriesName: 'pink-series-name', subX: 123.56, subY: 827.45 },
  { seriesName: 'pink-series-name', subX: 289.45, subY: 783.89 },
  { seriesName: 'pink-series-name', subX: 326.89, subY: 934.45 },
  { seriesName: 'pink-series-name', subX: 78.12, subY: 135.67 },
  { seriesName: 'pink-series-name', subX: 497.23, subY: 743.12 },
  { seriesName: 'pink-series-name', subX: 254.56, subY: 612.89 },
  { seriesName: 'pink-series-name', subX: 192.12, subY: 923.34 },
  { seriesName: 'pink-series-name', subX: 354.34, subY: 543.12 },
  { seriesName: 'pink-series-name', subX: 215.67, subY: 832.45 },
  { seriesName: 'pink-series-name', subX: 478.23, subY: 645.23 },
  { seriesName: 'pink-series-name', subX: 147.56, subY: 934.89 },
  { seriesName: 'pink-series-name', subX: 387.45, subY: 895.34 },
  { seriesName: 'pink-series-name', subX: 178.23, subY: 473.89 },
  { seriesName: 'pink-series-name', subX: 423.12, subY: 743.12 },
  { seriesName: 'pink-series-name', subX: 203.45, subY: 812.34 },
  { seriesName: 'pink-series-name', subX: 357.89, subY: 934.78 },
];

const rectData = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const annotationsNumericalData = [
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 50,
    markerEnd: 75,
    markerTitle: 'T1-M1',
    markerDescription: 'Track 1 - first marker',
    markerColor: Colors.Charts.Apdex.Fair.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 100,
    markerEnd: 150,
    markerTitle: 'T1-M2',
    markerDescription: 'Track 1 - second marker',
    markerColor: Colors.Charts.Loglevel.Notice.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 100,
    markerEnd: 150,
    markerTitle: 'T1-M3',
    markerDescription: 'Track 1 - third marker',
    markerColor: Colors.Charts.Loglevel.Notice.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 200,
    markerEnd: 500,
    markerTitle: 'T1-M4',
    markerDescription: 'Track 1 - fourth marker',
    markerColor: Colors.Charts.Logstatus.Info.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 450,
    markerEnd: 450,
    markerTitle: 'T1-M5',
    markerDescription: 'Track 1 - fifth marker',
    markerColor: Colors.Charts.Loglevel.Emergency.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
];

const AnnotationsData = () => {
  return (
    <Flex gap={32} flexDirection="column">
      <XYChart data={dotData}>
        {/* highlight-start */}
        <XYChart.Annotations
          data={annotationsNumericalData}
          xAxisId="x-bottom-axis"
        >
          <XYChartAnnotations.Track
            trackIdAccessor="trackLabel"
            labelAccessor="trackLabel"
            colorAccessor="trackColor"
            symbol={
              (({ trackSymbol }: { trackSymbol: string }) => {
                if (typeof trackSymbol === 'string' && trackSymbol in symbols) {
                  return symbols[trackSymbol as keyof typeof symbols];
                }
                return trackSymbol;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({
                trackIndicatorDisplay,
              }: {
                trackIndicatorDisplay: IndicatorsDisplay;
              }) => trackIndicatorDisplay) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ trackHidden }: { trackHidden: boolean }) => trackHidden) as (
                t: unknown,
              ) => boolean
            }
          />
          <XYChartAnnotations.Marker
            startAccessor="markerStart"
            endAccessor="markerEnd"
            trackByAccessor="trackLabel"
            descriptionAccessor="markerDescription"
            colorAccessor="markerColor"
            titleAccessor="markerTitle"
            symbol={
              (({ markerIcon }: { markerIcon: string }) => {
                if (typeof markerIcon === 'string' && markerIcon in symbols) {
                  return symbols[markerIcon as keyof typeof symbols];
                }
                return markerIcon;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({ showIndicator }: { showIndicator: IndicatorsDisplay }) =>
                showIndicator) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ showMarker }: { showMarker: boolean }) => !showMarker) as (
                t: unknown,
              ) => boolean
            }
            priority={
              (({ markerPriority }: { markerPriority: number }) =>
                markerPriority) as (t: unknown) => number
            }
          />
        </XYChart.Annotations>
        {/* highlight-end */}
        <XYChart.DotSeries
          xAxisId="x-bottom-axis"
          yAxisId="y-left-axis"
          x0Accessor="x"
          y0Accessor="y"
          nameAccessor="seriesName"
        />
        <XYChart.DotSeries
          colorPalette="pink"
          xAxisId="x-bottom-axis"
          yAxisId="y-right-axis"
          x0Accessor="subX"
          y0Accessor="subY"
          nameAccessor="seriesName"
        />
        <XYChart.XAxis id="x-bottom-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        <XYChart.YAxis id="y-right-axis" type="numerical" position="right" />

        <XYChart.Legend hidden />
      </XYChart>

      <XYChart data={rectData}>
        <XYChart.Annotations
          data={annotationsNumericalData}
          xAxisId="x-bottom-axis"
        >
          <XYChartAnnotations.Track
            trackIdAccessor="trackLabel"
            labelAccessor="trackLabel"
            colorAccessor="trackColor"
            symbol={
              (({ trackSymbol }: { trackSymbol: string }) => {
                if (typeof trackSymbol === 'string' && trackSymbol in symbols) {
                  const key = trackSymbol;
                  return symbols[key as keyof typeof symbols];
                }
                return trackSymbol;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({
                trackIndicatorDisplay,
              }: {
                trackIndicatorDisplay: IndicatorsDisplay;
              }) => trackIndicatorDisplay) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ trackHidden }: { trackHidden: boolean }) => trackHidden) as (
                t: unknown,
              ) => boolean
            }
          />
          <XYChartAnnotations.Marker
            startAccessor="markerStart"
            endAccessor="markerEnd"
            trackByAccessor="trackLabel"
            descriptionAccessor="markerDescription"
            colorAccessor="markerColor"
            titleAccessor="markerTitle"
            symbol={
              (({ markerIcon }: { markerIcon: string }) => {
                if (typeof markerIcon === 'string' && markerIcon in symbols) {
                  return symbols[markerIcon as keyof typeof symbols];
                }
                return markerIcon;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({ showIndicator }: { showIndicator: IndicatorsDisplay }) =>
                showIndicator) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ showMarker }: { showMarker: boolean }) => !showMarker) as (
                t: unknown,
              ) => boolean
            }
            priority={
              (({ markerPriority }: { markerPriority: number }) =>
                markerPriority) as (t: unknown) => number
            }
          />
        </XYChart.Annotations>

        <XYChart.RectSeries
          xAxisId="x-bottom-axis"
          yAxisId="y-left-axis"
          x0Accessor="horizontal.start"
          x1Accessor="horizontal.end"
          y0Accessor="vertical.start"
          y1Accessor="vertical.end"
          valueAccessor="value"
        />
        <XYChart.XAxis id="x-bottom-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        <XYChart.Legend hidden />
      </XYChart>
    </Flex>
  );
};
```

### Marker content

When the `symbol` is provided, it will become the marker content by default. When not, the data obtained through `titleAccessor` will be shown as marker content.

By default, when the content of a range marker is bigger than the size of the marker, it expands to fit all the content inside, decoupling from the original scale. In these particular cases, it is encouraged to use the indicators, which will represent the real size of the bin. Value markers always expand to fit their content.

The `textOverflow` property on `XYChart.Annotations` controls this behavior for range markers. Set it to `'truncate'` to instead truncate the content to fit within the marker's bounded width.

### Visual customization

Tracks and markers support visual customization in order to differentiate various types of annotations.

It's possible to set custom colors on both the track (to be applied to all markers) and the marker level by using the data obtained through `colorAccessor` property on the respective component. A marker's custom color has precedence over track's. This color can be set to any `Design System color token`, as well as any `rgb`, `hex` or `CSS color`.

The `symbol` property allows you to apply an icon, emoji, single letter, glyph, or Design System icon to either an individual marker or to an entire track. When applied to a track, this `symbol` will be used as the default.

When markers partially overlap one another, the order of the annotations defines which marker is displayed on top. Value annotations are always displayed above Range-based ones. It's also possible to customize the marker display order, by using the `priority` property. The higher the value of the `priority` property, the higher precedence the marker has. The `priority` property also affects the color of markers i.e. within a group, the color of the marker with the highest priority will be applied to the group.

It's possible to assign a label to a track using the data obtained through `labelAccessor` property. Be aware that labels are hidden by default. To show a track's label, the `showLabels` property has to be applied to the `XYChart.Annotations` component.

**AnnotationsCustomization**

```tsx
import type { ReactNode } from 'react';

import {
  XYChart,
  XYChartAnnotations,
  type IndicatorsDisplay,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  DynatraceIcon,
  ExploitIcon,
  ExploitOffIcon,
  IdeaIcon,
  ResearchIcon,
} from '@dynatrace/strato-icons';

const symbols = {
  idea: <IdeaIcon />,
  research: <ResearchIcon />,
  dtLogo: <DynatraceIcon />,
  exploit: <ExploitIcon />,
  exploitOff: <ExploitOffIcon />,
};

const dotData = [
  { seriesName: 'blue-series-name', x: 0, y: 0 },
  { seriesName: 'blue-series-name', x: 500, y: 1000 },
  { seriesName: 'blue-series-name', x: 0, y: 1000 },
  { seriesName: 'blue-series-name', x: 500, y: 0 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.891 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 23.345, y: 89.123 },
  { seriesName: 'blue-series-name', x: 12.234, y: 45.678 },
  { seriesName: 'blue-series-name', x: 45.456, y: 67.891 },
  { seriesName: 'blue-series-name', x: 67.123, y: 23.456 },
  { seriesName: 'blue-series-name', x: 89.789, y: 12.345 },
  { seriesName: 'blue-series-name', x: 12.567, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.678, y: 78.456 },
  { seriesName: 'blue-series-name', x: 34.789, y: 56.789 },
  { seriesName: 'blue-series-name', x: 45.89, y: 34.123 },
  { seriesName: 'blue-series-name', x: 56.789, y: 12.789 },
  { seriesName: 'blue-series-name', x: 67.456, y: 78.123 },
  { seriesName: 'blue-series-name', x: 78.123, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.456, y: 23.89 },
  { seriesName: 'blue-series-name', x: 90.123, y: 12.567 },
  { seriesName: 'blue-series-name', x: 23.89, y: 34.789 },
  { seriesName: 'blue-series-name', x: 34.123, y: 56.89 },
  { seriesName: 'blue-series-name', x: 12.789, y: 78.345 },
  { seriesName: 'blue-series-name', x: 78.89, y: 45.456 },
  { seriesName: 'blue-series-name', x: 45.678, y: 67.123 },
  { seriesName: 'blue-series-name', x: 67.234, y: 89.89 },
  { seriesName: 'blue-series-name', x: 89.567, y: 12.234 },
  { seriesName: 'blue-series-name', x: 12.345, y: 34.567 },
  { seriesName: 'blue-series-name', x: 23.456, y: 56.789 },
  { seriesName: 'blue-series-name', x: 45.678, y: 78.123 },
  { seriesName: 'blue-series-name', x: 67.891, y: 89.456 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.789 },
  { seriesName: 'blue-series-name', x: 67.891, y: 12.345 },
  { seriesName: 'blue-series-name', x: 89.012, y: 45.678 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 78.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 90.789 },
  { seriesName: 'blue-series-name', x: 67.891, y: 23.456 },
  { seriesName: 'blue-series-name', x: 89.012, y: 12.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 45.678 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 89.012 },
  { seriesName: 'blue-series-name', x: 67.891, y: 12.345 },
  { seriesName: 'blue-series-name', x: 89.012, y: 45.678 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 56.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 89.012 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.012, y: 67.89 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 12.345 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.567 },
  { seriesName: 'blue-series-name', x: 67.891, y: 56.789 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 45.678 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 12.345 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.789 },
  { seriesName: 'blue-series-name', x: 45.678, y: 23.456 },
  { seriesName: 'blue-series-name', x: 67.891, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.012, y: 67.89 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 12.345 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.567 },
  { seriesName: 'blue-series-name', x: 67.891, y: 56.789 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 89.012 },
  { seriesName: 'pink-series-name', subX: 451.23, subY: 934.56 },
  { seriesName: 'pink-series-name', subX: 124.32, subY: 435.78 },
  { seriesName: 'pink-series-name', subX: 352.18, subY: 876.12 },
  { seriesName: 'pink-series-name', subX: 97.53, subY: 193.54 },
  { seriesName: 'pink-series-name', subX: 305.67, subY: 678.43 },
  { seriesName: 'pink-series-name', subX: 210.34, subY: 845.22 },
  { seriesName: 'pink-series-name', subX: 467.85, subY: 934.12 },
  { seriesName: 'pink-series-name', subX: 189.34, subY: 124.34 },
  { seriesName: 'pink-series-name', subX: 256.78, subY: 897.56 },
  { seriesName: 'pink-series-name', subX: 384.56, subY: 763.89 },
  { seriesName: 'pink-series-name', subX: 75.23, subY: 293.45 },
  { seriesName: 'pink-series-name', subX: 199.34, subY: 647.12 },
  { seriesName: 'pink-series-name', subX: 423.78, subY: 354.76 },
  { seriesName: 'pink-series-name', subX: 101.54, subY: 987.23 },
  { seriesName: 'pink-series-name', subX: 315.67, subY: 543.78 },
  { seriesName: 'pink-series-name', subX: 271.23, subY: 434.56 },
  { seriesName: 'pink-series-name', subX: 398.12, subY: 287.45 },
  { seriesName: 'pink-series-name', subX: 126.89, subY: 964.12 },
  { seriesName: 'pink-series-name', subX: 449.67, subY: 785.34 },
  { seriesName: 'pink-series-name', subX: 234.76, subY: 413.89 },
  { seriesName: 'pink-series-name', subX: 367.45, subY: 675.23 },
  { seriesName: 'pink-series-name', subX: 92.87, subY: 824.67 },
  { seriesName: 'pink-series-name', subX: 217.56, subY: 324.89 },
  { seriesName: 'pink-series-name', subX: 474.34, subY: 912.34 },
  { seriesName: 'pink-series-name', subX: 162.78, subY: 145.67 },
  { seriesName: 'pink-series-name', subX: 306.34, subY: 827.89 },
  { seriesName: 'pink-series-name', subX: 413.78, subY: 965.23 },
  { seriesName: 'pink-series-name', subX: 234.12, subY: 732.54 },
  { seriesName: 'pink-series-name', subX: 89.23, subY: 283.65 },
  { seriesName: 'pink-series-name', subX: 376.45, subY: 583.23 },
  { seriesName: 'pink-series-name', subX: 127.67, subY: 942.78 },
  { seriesName: 'pink-series-name', subX: 485.12, subY: 765.45 },
  { seriesName: 'pink-series-name', subX: 238.89, subY: 635.89 },
  { seriesName: 'pink-series-name', subX: 410.23, subY: 839.12 },
  { seriesName: 'pink-series-name', subX: 64.12, subY: 193.78 },
  { seriesName: 'pink-series-name', subX: 156.87, subY: 923.45 },
  { seriesName: 'pink-series-name', subX: 343.12, subY: 873.23 },
  { seriesName: 'pink-series-name', subX: 101.23, subY: 319.45 },
  { seriesName: 'pink-series-name', subX: 456.78, subY: 567.89 },
  { seriesName: 'pink-series-name', subX: 278.45, subY: 714.56 },
  { seriesName: 'pink-series-name', subX: 387.12, subY: 934.78 },
  { seriesName: 'pink-series-name', subX: 194.56, subY: 823.12 },
  { seriesName: 'pink-series-name', subX: 143.87, subY: 495.23 },
  { seriesName: 'pink-series-name', subX: 399.23, subY: 265.89 },
  { seriesName: 'pink-series-name', subX: 183.12, subY: 756.45 },
  { seriesName: 'pink-series-name', subX: 329.67, subY: 865.12 },
  { seriesName: 'pink-series-name', subX: 212.78, subY: 412.78 },
  { seriesName: 'pink-series-name', subX: 75.12, subY: 963.12 },
  { seriesName: 'pink-series-name', subX: 457.34, subY: 734.89 },
  { seriesName: 'pink-series-name', subX: 287.23, subY: 213.34 },
  { seriesName: 'pink-series-name', subX: 198.67, subY: 647.12 },
  { seriesName: 'pink-series-name', subX: 312.34, subY: 876.78 },
  { seriesName: 'pink-series-name', subX: 135.45, subY: 543.45 },
  { seriesName: 'pink-series-name', subX: 468.78, subY: 947.23 },
  { seriesName: 'pink-series-name', subX: 123.56, subY: 827.45 },
  { seriesName: 'pink-series-name', subX: 289.45, subY: 783.89 },
  { seriesName: 'pink-series-name', subX: 326.89, subY: 934.45 },
  { seriesName: 'pink-series-name', subX: 78.12, subY: 135.67 },
  { seriesName: 'pink-series-name', subX: 497.23, subY: 743.12 },
  { seriesName: 'pink-series-name', subX: 254.56, subY: 612.89 },
  { seriesName: 'pink-series-name', subX: 192.12, subY: 923.34 },
  { seriesName: 'pink-series-name', subX: 354.34, subY: 543.12 },
  { seriesName: 'pink-series-name', subX: 215.67, subY: 832.45 },
  { seriesName: 'pink-series-name', subX: 478.23, subY: 645.23 },
  { seriesName: 'pink-series-name', subX: 147.56, subY: 934.89 },
  { seriesName: 'pink-series-name', subX: 387.45, subY: 895.34 },
  { seriesName: 'pink-series-name', subX: 178.23, subY: 473.89 },
  { seriesName: 'pink-series-name', subX: 423.12, subY: 743.12 },
  { seriesName: 'pink-series-name', subX: 203.45, subY: 812.34 },
  { seriesName: 'pink-series-name', subX: 357.89, subY: 934.78 },
];

const rectData = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const annotationsNumericalData = [
  // Track 1
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 50,
    markerEnd: 75,
    markerTitle: 'T1-M1',
    markerDescription: 'Track 1 - first marker',
    markerIcon: 'exploit',
    markerColor: Colors.Charts.Apdex.Fair.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 100,
    markerEnd: 150,
    markerTitle: 'T1-M2',
    markerDescription: 'Track 1 - second marker - priority 1 - green',
    markerColor: Colors.Charts.Loglevel.Notice.Default,
    markerIcon: 'research',
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 100,
    markerEnd: 150,
    markerTitle: 'T1-M3',
    markerDescription: 'Track 1 - third marker - priority 2 - purple',
    markerIcon: 'dtLogo',
    markerColor: Colors.Charts.Loglevel.Debug.Default,
    markerPriority: 2,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 200,
    markerEnd: 500,
    markerTitle: 'T1-M4',
    markerDescription: 'Track 1 - fourth marker',
    markerIcon: '⚠️',
    markerColor: Colors.Charts.Logstatus.Info.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 450,
    markerEnd: 450,
    markerTitle: 'T1-M5',
    markerDescription: 'Track 1 - fifth marker',
    markerIcon: '✅',
    markerColor: Colors.Charts.Loglevel.Emergency.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  // Track 2
  {
    trackLabel: 'Track 2',
    trackSymbol: '🚨',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 25,
    markerEnd: 100,
    markerTitle: 'T2-M1',
    markerDescription: 'Track 2 - first marker',
    markerIcon: 'exploitOff',
    markerColor: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
    markerSymbolColor: '#ff0000',
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 2',
    trackSymbol: '🚨',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 150,
    markerEnd: 250,
    markerTitle: 'T2-M2',
    markerDescription: 'Track 2 - second marker',
    markerColor: Colors.Charts.Loglevel.Emergency.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 2',
    trackSymbol: '🚨',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 275,
    markerEnd: 325,
    markerTitle: 'T2-M3',
    markerDescription: 'Track 2 - third marker',
    markerIcon: '🔄',
    markerColor: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 2',
    trackSymbol: '🚨',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 350,
    markerEnd: 450,
    markerTitle: 'T2-M4',
    markerDescription: 'Track 2 - fourth marker',
    markerColor: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
];

const AnnotationsCustomization = () => {
  return (
    <Flex gap={32} flexDirection="column">
      <XYChart data={dotData}>
        {/* highlight-start */}
        <XYChart.Annotations
          data={annotationsNumericalData}
          xAxisId="x-bottom-axis"
        >
          <XYChartAnnotations.Track
            trackIdAccessor="trackLabel"
            labelAccessor="trackLabel"
            colorAccessor="trackColor"
            symbol={
              (({ trackSymbol }: { trackSymbol: string }) => {
                if (typeof trackSymbol === 'string' && trackSymbol in symbols) {
                  return symbols[trackSymbol as keyof typeof symbols];
                }
                return trackSymbol;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({
                trackIndicatorDisplay,
              }: {
                trackIndicatorDisplay: IndicatorsDisplay;
              }) => trackIndicatorDisplay) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ trackHidden }: { trackHidden: boolean }) => trackHidden) as (
                t: unknown,
              ) => boolean
            }
          />
          <XYChartAnnotations.Marker
            startAccessor="markerStart"
            endAccessor="markerEnd"
            trackByAccessor="trackLabel"
            descriptionAccessor="markerDescription"
            colorAccessor="markerColor"
            titleAccessor="markerTitle"
            symbolColorAccessor="markerSymbolColor"
            symbol={
              (({ markerIcon }: { markerIcon: string }) => {
                if (typeof markerIcon === 'string' && markerIcon in symbols) {
                  return symbols[markerIcon as keyof typeof symbols];
                }
                return markerIcon;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({ showIndicator }: { showIndicator: IndicatorsDisplay }) =>
                showIndicator) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ showMarker }: { showMarker: boolean }) => !showMarker) as (
                t: unknown,
              ) => boolean
            }
            priority={
              (({ markerPriority }: { markerPriority: number }) =>
                markerPriority) as (t: unknown) => number
            }
          />
        </XYChart.Annotations>
        {/* highlight-end */}
        <XYChart.DotSeries
          xAxisId="x-bottom-axis"
          yAxisId="y-left-axis"
          x0Accessor="x"
          y0Accessor="y"
          nameAccessor="seriesName"
        />
        <XYChart.DotSeries
          colorPalette="pink"
          xAxisId="x-bottom-axis"
          yAxisId="y-right-axis"
          x0Accessor="subX"
          y0Accessor="subY"
          nameAccessor="seriesName"
        />
        <XYChart.XAxis id="x-bottom-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        <XYChart.YAxis id="y-right-axis" type="numerical" position="right" />

        <XYChart.Legend hidden />
      </XYChart>

      <XYChart data={rectData}>
        <XYChart.Annotations
          data={annotationsNumericalData}
          xAxisId="x-bottom-axis"
        >
          <XYChartAnnotations.Track
            trackIdAccessor="trackLabel"
            labelAccessor="trackLabel"
            colorAccessor="trackColor"
            symbol={
              (({ trackSymbol }: { trackSymbol: string }) => {
                if (typeof trackSymbol === 'string' && trackSymbol in symbols) {
                  const key = trackSymbol;
                  return symbols[key as keyof typeof symbols];
                }
                return trackSymbol;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({
                trackIndicatorDisplay,
              }: {
                trackIndicatorDisplay: IndicatorsDisplay;
              }) => trackIndicatorDisplay) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ trackHidden }: { trackHidden: boolean }) => trackHidden) as (
                t: unknown,
              ) => boolean
            }
          />
          <XYChartAnnotations.Marker
            startAccessor="markerStart"
            endAccessor="markerEnd"
            trackByAccessor="trackLabel"
            descriptionAccessor="markerDescription"
            colorAccessor="markerColor"
            titleAccessor="markerTitle"
            symbol={
              (({ markerIcon }: { markerIcon: string }) => {
                if (typeof markerIcon === 'string' && markerIcon in symbols) {
                  return symbols[markerIcon as keyof typeof symbols];
                }
                return markerIcon;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({ showIndicator }: { showIndicator: IndicatorsDisplay }) =>
                showIndicator) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ showMarker }: { showMarker: boolean }) => !showMarker) as (
                t: unknown,
              ) => boolean
            }
            priority={
              (({ markerPriority }: { markerPriority: number }) =>
                markerPriority) as (t: unknown) => number
            }
          />
        </XYChart.Annotations>

        <XYChart.RectSeries
          xAxisId="x-bottom-axis"
          yAxisId="y-left-axis"
          x0Accessor="horizontal.start"
          x1Accessor="horizontal.end"
          y0Accessor="vertical.start"
          y1Accessor="vertical.end"
          valueAccessor="value"
        />
        <XYChart.XAxis id="x-bottom-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        <XYChart.Legend hidden />
      </XYChart>
    </Flex>
  );
};
```

### Visibility

An entire track can be hidden by adding the `hidden` property to the `XYChartAnnotations.Track` component. The same configuration can be applied to a marker, by setting the `hidden` property on the `XYChartAnnotations.Marker` component.

When hovering a marker (with the cursor), an annotation indicator appears over the chart area. The indicator's visibility can be customized on either a track or marker level by using the `indicatorsDisplay` property:

- With the `auto` option, the default behaviour is applied - indicators appear on hover.
- The `always` option sets indicators to always be visible within the chart area, regardless of the hovering behavior.
- The `never` option sets indicators to never be visible.

**AnnotationsVisibility**

```tsx
import type { ReactNode } from 'react';

import {
  XYChart,
  XYChartAnnotations,
  type IndicatorsDisplay,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  DynatraceIcon,
  ExploitIcon,
  ExploitOffIcon,
  IdeaIcon,
  ResearchIcon,
} from '@dynatrace/strato-icons';

const symbols = {
  idea: <IdeaIcon />,
  research: <ResearchIcon />,
  dtLogo: <DynatraceIcon />,
  exploit: <ExploitIcon />,
  exploitOff: <ExploitOffIcon />,
};

const dotData = [
  { seriesName: 'blue-series-name', x: 0, y: 0 },
  { seriesName: 'blue-series-name', x: 500, y: 1000 },
  { seriesName: 'blue-series-name', x: 0, y: 1000 },
  { seriesName: 'blue-series-name', x: 500, y: 0 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.891 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 23.345, y: 89.123 },
  { seriesName: 'blue-series-name', x: 12.234, y: 45.678 },
  { seriesName: 'blue-series-name', x: 45.456, y: 67.891 },
  { seriesName: 'blue-series-name', x: 67.123, y: 23.456 },
  { seriesName: 'blue-series-name', x: 89.789, y: 12.345 },
  { seriesName: 'blue-series-name', x: 12.567, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.678, y: 78.456 },
  { seriesName: 'blue-series-name', x: 34.789, y: 56.789 },
  { seriesName: 'blue-series-name', x: 45.89, y: 34.123 },
  { seriesName: 'blue-series-name', x: 56.789, y: 12.789 },
  { seriesName: 'blue-series-name', x: 67.456, y: 78.123 },
  { seriesName: 'blue-series-name', x: 78.123, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.456, y: 23.89 },
  { seriesName: 'blue-series-name', x: 90.123, y: 12.567 },
  { seriesName: 'blue-series-name', x: 23.89, y: 34.789 },
  { seriesName: 'blue-series-name', x: 34.123, y: 56.89 },
  { seriesName: 'blue-series-name', x: 12.789, y: 78.345 },
  { seriesName: 'blue-series-name', x: 78.89, y: 45.456 },
  { seriesName: 'blue-series-name', x: 45.678, y: 67.123 },
  { seriesName: 'blue-series-name', x: 67.234, y: 89.89 },
  { seriesName: 'blue-series-name', x: 89.567, y: 12.234 },
  { seriesName: 'blue-series-name', x: 12.345, y: 34.567 },
  { seriesName: 'blue-series-name', x: 23.456, y: 56.789 },
  { seriesName: 'blue-series-name', x: 45.678, y: 78.123 },
  { seriesName: 'blue-series-name', x: 67.891, y: 89.456 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.789 },
  { seriesName: 'blue-series-name', x: 67.891, y: 12.345 },
  { seriesName: 'blue-series-name', x: 89.012, y: 45.678 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 78.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 90.789 },
  { seriesName: 'blue-series-name', x: 67.891, y: 23.456 },
  { seriesName: 'blue-series-name', x: 89.012, y: 12.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 45.678 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 89.012 },
  { seriesName: 'blue-series-name', x: 67.891, y: 12.345 },
  { seriesName: 'blue-series-name', x: 89.012, y: 45.678 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 56.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 89.012 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.012, y: 67.89 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 12.345 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.567 },
  { seriesName: 'blue-series-name', x: 67.891, y: 56.789 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 45.678 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 12.345 },
  { seriesName: 'blue-series-name', x: 12.345, y: 67.89 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.123 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 90.789 },
  { seriesName: 'blue-series-name', x: 45.678, y: 23.456 },
  { seriesName: 'blue-series-name', x: 67.891, y: 45.678 },
  { seriesName: 'blue-series-name', x: 89.012, y: 67.89 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 12.345 },
  { seriesName: 'blue-series-name', x: 45.678, y: 34.567 },
  { seriesName: 'blue-series-name', x: 67.891, y: 56.789 },
  { seriesName: 'blue-series-name', x: 89.012, y: 78.123 },
  { seriesName: 'blue-series-name', x: 12.345, y: 90.789 },
  { seriesName: 'blue-series-name', x: 23.456, y: 67.89 },
  { seriesName: 'blue-series-name', x: 45.678, y: 12.345 },
  { seriesName: 'blue-series-name', x: 67.891, y: 34.567 },
  { seriesName: 'blue-series-name', x: 89.012, y: 56.789 },
  { seriesName: 'blue-series-name', x: 12.345, y: 78.123 },
  { seriesName: 'blue-series-name', x: 23.456, y: 89.012 },
  { seriesName: 'pink-series-name', subX: 451.23, subY: 934.56 },
  { seriesName: 'pink-series-name', subX: 124.32, subY: 435.78 },
  { seriesName: 'pink-series-name', subX: 352.18, subY: 876.12 },
  { seriesName: 'pink-series-name', subX: 97.53, subY: 193.54 },
  { seriesName: 'pink-series-name', subX: 305.67, subY: 678.43 },
  { seriesName: 'pink-series-name', subX: 210.34, subY: 845.22 },
  { seriesName: 'pink-series-name', subX: 467.85, subY: 934.12 },
  { seriesName: 'pink-series-name', subX: 189.34, subY: 124.34 },
  { seriesName: 'pink-series-name', subX: 256.78, subY: 897.56 },
  { seriesName: 'pink-series-name', subX: 384.56, subY: 763.89 },
  { seriesName: 'pink-series-name', subX: 75.23, subY: 293.45 },
  { seriesName: 'pink-series-name', subX: 199.34, subY: 647.12 },
  { seriesName: 'pink-series-name', subX: 423.78, subY: 354.76 },
  { seriesName: 'pink-series-name', subX: 101.54, subY: 987.23 },
  { seriesName: 'pink-series-name', subX: 315.67, subY: 543.78 },
  { seriesName: 'pink-series-name', subX: 271.23, subY: 434.56 },
  { seriesName: 'pink-series-name', subX: 398.12, subY: 287.45 },
  { seriesName: 'pink-series-name', subX: 126.89, subY: 964.12 },
  { seriesName: 'pink-series-name', subX: 449.67, subY: 785.34 },
  { seriesName: 'pink-series-name', subX: 234.76, subY: 413.89 },
  { seriesName: 'pink-series-name', subX: 367.45, subY: 675.23 },
  { seriesName: 'pink-series-name', subX: 92.87, subY: 824.67 },
  { seriesName: 'pink-series-name', subX: 217.56, subY: 324.89 },
  { seriesName: 'pink-series-name', subX: 474.34, subY: 912.34 },
  { seriesName: 'pink-series-name', subX: 162.78, subY: 145.67 },
  { seriesName: 'pink-series-name', subX: 306.34, subY: 827.89 },
  { seriesName: 'pink-series-name', subX: 413.78, subY: 965.23 },
  { seriesName: 'pink-series-name', subX: 234.12, subY: 732.54 },
  { seriesName: 'pink-series-name', subX: 89.23, subY: 283.65 },
  { seriesName: 'pink-series-name', subX: 376.45, subY: 583.23 },
  { seriesName: 'pink-series-name', subX: 127.67, subY: 942.78 },
  { seriesName: 'pink-series-name', subX: 485.12, subY: 765.45 },
  { seriesName: 'pink-series-name', subX: 238.89, subY: 635.89 },
  { seriesName: 'pink-series-name', subX: 410.23, subY: 839.12 },
  { seriesName: 'pink-series-name', subX: 64.12, subY: 193.78 },
  { seriesName: 'pink-series-name', subX: 156.87, subY: 923.45 },
  { seriesName: 'pink-series-name', subX: 343.12, subY: 873.23 },
  { seriesName: 'pink-series-name', subX: 101.23, subY: 319.45 },
  { seriesName: 'pink-series-name', subX: 456.78, subY: 567.89 },
  { seriesName: 'pink-series-name', subX: 278.45, subY: 714.56 },
  { seriesName: 'pink-series-name', subX: 387.12, subY: 934.78 },
  { seriesName: 'pink-series-name', subX: 194.56, subY: 823.12 },
  { seriesName: 'pink-series-name', subX: 143.87, subY: 495.23 },
  { seriesName: 'pink-series-name', subX: 399.23, subY: 265.89 },
  { seriesName: 'pink-series-name', subX: 183.12, subY: 756.45 },
  { seriesName: 'pink-series-name', subX: 329.67, subY: 865.12 },
  { seriesName: 'pink-series-name', subX: 212.78, subY: 412.78 },
  { seriesName: 'pink-series-name', subX: 75.12, subY: 963.12 },
  { seriesName: 'pink-series-name', subX: 457.34, subY: 734.89 },
  { seriesName: 'pink-series-name', subX: 287.23, subY: 213.34 },
  { seriesName: 'pink-series-name', subX: 198.67, subY: 647.12 },
  { seriesName: 'pink-series-name', subX: 312.34, subY: 876.78 },
  { seriesName: 'pink-series-name', subX: 135.45, subY: 543.45 },
  { seriesName: 'pink-series-name', subX: 468.78, subY: 947.23 },
  { seriesName: 'pink-series-name', subX: 123.56, subY: 827.45 },
  { seriesName: 'pink-series-name', subX: 289.45, subY: 783.89 },
  { seriesName: 'pink-series-name', subX: 326.89, subY: 934.45 },
  { seriesName: 'pink-series-name', subX: 78.12, subY: 135.67 },
  { seriesName: 'pink-series-name', subX: 497.23, subY: 743.12 },
  { seriesName: 'pink-series-name', subX: 254.56, subY: 612.89 },
  { seriesName: 'pink-series-name', subX: 192.12, subY: 923.34 },
  { seriesName: 'pink-series-name', subX: 354.34, subY: 543.12 },
  { seriesName: 'pink-series-name', subX: 215.67, subY: 832.45 },
  { seriesName: 'pink-series-name', subX: 478.23, subY: 645.23 },
  { seriesName: 'pink-series-name', subX: 147.56, subY: 934.89 },
  { seriesName: 'pink-series-name', subX: 387.45, subY: 895.34 },
  { seriesName: 'pink-series-name', subX: 178.23, subY: 473.89 },
  { seriesName: 'pink-series-name', subX: 423.12, subY: 743.12 },
  { seriesName: 'pink-series-name', subX: 203.45, subY: 812.34 },
  { seriesName: 'pink-series-name', subX: 357.89, subY: 934.78 },
];

const rectData = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const annotationsNumericalData = [
  // Track 1
  {
    trackLabel: 'Track 1',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: true,
    trackShowLabel: true,
    markerStart: 50,
    markerEnd: 75,
    markerTitle: 'T1-M1',
    markerIcon: 'exploit',
    markerDescription: 'Track 1 - first marker',
    markerColor: Colors.Charts.Apdex.Fair.Default,
    markerPriority: 1,
    showIndicator: 'never',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: true,
    trackShowLabel: true,
    markerStart: 100,
    markerEnd: 150,
    markerTitle: 'T1-M2',
    markerDescription: 'Track 1 - second marker',
    markerColor: Colors.Charts.Loglevel.Notice.Default,
    markerPriority: 1,
    showIndicator: 'never',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: true,
    trackShowLabel: true,
    markerStart: 200,
    markerEnd: 500,
    markerTitle: 'T1-M3',
    markerIcon: 'alert',
    markerDescription: 'Track 1 - third marker',
    markerColor: Colors.Charts.Logstatus.Info.Default,
    markerPriority: 1,
    showIndicator: 'never',
    showMarker: true,
  },
  {
    trackLabel: 'Track 1',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: true,
    trackShowLabel: true,
    markerStart: 450,
    markerEnd: 450,
    markerTitle: 'T1-M4',
    markerDescription: 'Track 1 - fourth marker',
    markerColor: Colors.Charts.Loglevel.Emergency.Default,
    markerPriority: 1,
    showIndicator: 'never',
    showMarker: true,
  },

  // Track 2
  {
    trackLabel: 'Track 2',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 25,
    markerEnd: 100,
    markerTitle: 'T2-M1',
    markerDescription: 'Track 2 - first marker - indicators auto',
    markerColor: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
    markerPriority: 1,
    showIndicator: 'auto',
    showMarker: true,
  },
  {
    trackLabel: 'Track 2',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 150,
    markerEnd: 250,
    markerTitle: 'T2-M2',
    markerIcon: 'research',
    markerDescription: 'Track 2 - second marker - indicators always',
    markerColor: Colors.Charts.Loglevel.Emergency.Default,
    markerPriority: 1,
    showIndicator: 'always',
    showMarker: true,
  },
  {
    trackLabel: 'Track 2',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 275,
    markerEnd: 325,
    markerTitle: 'T2-M3',
    markerIcon: '⚠️',
    markerDescription: 'Track 2 - third marker - hidden',
    markerColor: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    markerPriority: 1,
    showIndicator: 'never',
    showMarker: false,
  },
  {
    trackLabel: 'Track 2',
    trackSymbol: 'idea',
    trackIndicatorDisplay: 'auto',
    trackHidden: false,
    trackShowLabel: true,
    markerStart: 350,
    markerEnd: 450,
    markerTitle: 'T2-M4',
    markerIcon: '✅',
    markerDescription: 'Track 2 - fourth marker - indicators never',
    markerColor: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
    markerPriority: 1,
    showIndicator: 'never',
    showMarker: true,
  },
];

const AnnotationsVisibility = () => {
  return (
    <Flex gap={32} flexDirection="column">
      <XYChart data={dotData}>
        {/* highlight-start */}
        <XYChart.Annotations
          data={annotationsNumericalData}
          xAxisId="x-bottom-axis"
        >
          <XYChartAnnotations.Track
            trackIdAccessor="trackLabel"
            labelAccessor="trackLabel"
            colorAccessor="trackColor"
            symbol={
              (({ trackSymbol }: { trackSymbol: string }) => {
                if (typeof trackSymbol === 'string' && trackSymbol in symbols) {
                  return symbols[trackSymbol as keyof typeof symbols];
                }
                return trackSymbol;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({
                trackIndicatorDisplay,
              }: {
                trackIndicatorDisplay: IndicatorsDisplay;
              }) => trackIndicatorDisplay) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ trackHidden }: { trackHidden: boolean }) => trackHidden) as (
                t: unknown,
              ) => boolean
            }
          />
          <XYChartAnnotations.Marker
            startAccessor="markerStart"
            endAccessor="markerEnd"
            trackByAccessor="trackLabel"
            descriptionAccessor="markerDescription"
            colorAccessor="markerColor"
            titleAccessor="markerTitle"
            symbol={
              (({ markerIcon }: { markerIcon: string }) => {
                if (typeof markerIcon === 'string' && markerIcon in symbols) {
                  return symbols[markerIcon as keyof typeof symbols];
                }
                return markerIcon;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({ showIndicator }: { showIndicator: IndicatorsDisplay }) =>
                showIndicator) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ showMarker }: { showMarker: boolean }) => !showMarker) as (
                t: unknown,
              ) => boolean
            }
            priority={
              (({ markerPriority }: { markerPriority: number }) =>
                markerPriority) as (t: unknown) => number
            }
          />
        </XYChart.Annotations>
        {/* highlight-end */}
        <XYChart.DotSeries
          xAxisId="x-bottom-axis"
          yAxisId="y-left-axis"
          x0Accessor="x"
          y0Accessor="y"
          nameAccessor="seriesName"
        />
        <XYChart.DotSeries
          colorPalette="pink"
          xAxisId="x-bottom-axis"
          yAxisId="y-right-axis"
          x0Accessor="subX"
          y0Accessor="subY"
          nameAccessor="seriesName"
        />
        <XYChart.XAxis id="x-bottom-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        <XYChart.YAxis id="y-right-axis" type="numerical" position="right" />

        <XYChart.Legend hidden />
      </XYChart>

      <XYChart data={rectData}>
        <XYChart.Annotations
          data={annotationsNumericalData}
          xAxisId="x-bottom-axis"
        >
          <XYChartAnnotations.Track
            trackIdAccessor="trackLabel"
            labelAccessor="trackLabel"
            colorAccessor="trackColor"
            symbol={
              (({ trackSymbol }: { trackSymbol: string }) => {
                if (typeof trackSymbol === 'string' && trackSymbol in symbols) {
                  const key = trackSymbol;
                  return symbols[key as keyof typeof symbols];
                }
                return trackSymbol;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({
                trackIndicatorDisplay,
              }: {
                trackIndicatorDisplay: IndicatorsDisplay;
              }) => trackIndicatorDisplay) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ trackHidden }: { trackHidden: boolean }) => trackHidden) as (
                t: unknown,
              ) => boolean
            }
          />
          <XYChartAnnotations.Marker
            startAccessor="markerStart"
            endAccessor="markerEnd"
            trackByAccessor="trackLabel"
            descriptionAccessor="markerDescription"
            colorAccessor="markerColor"
            titleAccessor="markerTitle"
            symbol={
              (({ markerIcon }: { markerIcon: string }) => {
                if (typeof markerIcon === 'string' && markerIcon in symbols) {
                  return symbols[markerIcon as keyof typeof symbols];
                }
                return markerIcon;
              }) as (t: unknown) => ReactNode
            }
            indicatorsDisplay={
              (({ showIndicator }: { showIndicator: IndicatorsDisplay }) =>
                showIndicator) as (t: unknown) => IndicatorsDisplay
            }
            hidden={
              (({ showMarker }: { showMarker: boolean }) => !showMarker) as (
                t: unknown,
              ) => boolean
            }
            priority={
              (({ markerPriority }: { markerPriority: number }) =>
                markerPriority) as (t: unknown) => number
            }
          />
        </XYChart.Annotations>

        <XYChart.RectSeries
          xAxisId="x-bottom-axis"
          yAxisId="y-left-axis"
          x0Accessor="horizontal.start"
          x1Accessor="horizontal.end"
          y0Accessor="vertical.start"
          y1Accessor="vertical.end"
          valueAccessor="value"
        />
        <XYChart.XAxis id="x-bottom-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        <XYChart.Legend hidden />
      </XYChart>
    </Flex>
  );
};
```

### Annotations tooltip

The Annotations supports both default and custom tooltips for annotations. This allows creators to provide additional detailed information about specific datapoints or events in the chart.

See [Annotations Tooltip](https://developer.dynatrace.com/design/data-visualizations/charts/AnnotationsChart.md#annotationscharttooltip) for details.
