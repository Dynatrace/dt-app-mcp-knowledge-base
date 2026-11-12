## X-axis

The `AnnotationsChart` component provides a `AnnotationsChart.XAxis` subcomponent to configure chart's X-Axis and scale. The X-Axis is visible by default. To hide it the `hidden` prop should be set to `true`.

**XAxisHidden**

```tsx
import { type ReactNode } from 'react';

import { AnnotationsChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import { ViewIcon, XmarkIcon } from '@dynatrace/strato-icons';

type TrackData = Array<{
  symbol?: ReactNode;
  title: string;
  description?: string;
  priority?: number;
  color: string;
  start: Date;
  end?: Date;
}>;

const loadBalancerEvents: TrackData = [
  {
    symbol: <ViewIcon />,
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
  },
  {
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
  },
  {
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb2',
    color: Colors.Charts.CategoricalThemed.Swamps.Color01.Default,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
  },
  {
    title: 'Elastic load balancer has a low failure rate',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    priority: 10,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
  },
  {
    symbol: <ViewIcon />,
    title: 'Balancer Node removed',
    description: 'Performance degraded by 10%',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
  },
  {
    symbol: <ViewIcon />,
    title: 'Synthetic monitor performance slow',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color06.Default,
    priority: 7,
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
  },
  {
    symbol: '🐤',
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
  },
  {
    symbol: 'E',
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
  },
  {
    title: 'High rate of dripped packets',
    description: 'easyTravel Web',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    title: 'High rate of dripped packets',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    symbol: '📱',
    title: 'User action duration degradation',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    priority: 5,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    symbol: 'A',
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    symbol: <XmarkIcon />,
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: '#93de43ff',
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
  },
];

const userSessions: TrackData = [
  {
    symbol: '🙅‍',
    title: 'Bad user session experience',
    description: 'VisitorID-1000009-1032',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
  },
  {
    symbol: '🙆‍',
    title: 'Good user session experience',
    description: 'VisitorID-1000009-1032',
    color: Colors.Charts.CategoricalThemed.Swamps.Color04.Default,
    start: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
  },
];

const multipleTracksData = [loadBalancerEvents, userSessions];

const XAxisHidden = () => {
  return (
    <AnnotationsChart>
      {multipleTracksData.map((trackData, trackIndex) => (
        <AnnotationsChart.Track key={trackIndex}>
          {trackData.map((marker, markerIndex) => (
            <AnnotationsChart.Marker key={markerIndex} {...marker} />
          ))}
        </AnnotationsChart.Track>
      ))}
      {/* highlight-next-line */}
      <AnnotationsChart.XAxis hidden={true} />
    </AnnotationsChart>
  );
};
```

To customize chart's min and max scale values, the `min` and `max` props can be used. By default, chart's scale min and max are calculated from the data. Be aware, that customizing the scale values may filter out some markers that are outside of custom scale range.

**XAxisCustomScale**

```tsx
import { type ReactNode } from 'react';

import { AnnotationsChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import { ViewIcon, XmarkIcon } from '@dynatrace/strato-icons';

type TrackData = Array<{
  symbol?: ReactNode;
  title: string;
  description?: string;
  priority?: number;
  color: string;
  start: Date;
  end?: Date;
}>;

const loadBalancerEvents: TrackData = [
  {
    symbol: <ViewIcon />,
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
  },
  {
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
  },
  {
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb2',
    color: Colors.Charts.CategoricalThemed.Swamps.Color01.Default,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
  },
  {
    title: 'Elastic load balancer has a low failure rate',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    priority: 10,
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
  },
  {
    symbol: <ViewIcon />,
    title: 'Balancer Node removed',
    description: 'Performance degraded by 10%',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
  },
  {
    symbol: <ViewIcon />,
    title: 'Synthetic monitor performance slow',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color06.Default,
    priority: 7,
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
  },
  {
    symbol: '🐤',
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
  },
  {
    symbol: 'E',
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
  },
  {
    title: 'High rate of dripped packets',
    description: 'easyTravel Web',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    title: 'High rate of dripped packets',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    symbol: '📱',
    title: 'User action duration degradation',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    priority: 5,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    symbol: 'A',
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    symbol: <XmarkIcon />,
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: '#93de43ff',
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
  },
];

const userSessions: TrackData = [
  {
    symbol: '🙅‍',
    title: 'Bad user session experience',
    description: 'VisitorID-1000009-1032',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
  },
  {
    symbol: '🙆‍',
    title: 'Good user session experience',
    description: 'VisitorID-1000009-1032',
    color: Colors.Charts.CategoricalThemed.Swamps.Color04.Default,
    start: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
  },
];

const multipleTracksData = [loadBalancerEvents, userSessions];

const XAxisCustomScale = () => {
  return (
    <AnnotationsChart>
      {multipleTracksData.map((trackData, trackIndex) => (
        <AnnotationsChart.Track key={trackIndex}>
          {trackData.map((marker, markerIndex) => (
            <AnnotationsChart.Marker key={markerIndex} {...marker} />
          ))}
        </AnnotationsChart.Track>
      ))}
      <AnnotationsChart.XAxis
        // highlight-start
        min={new Date('Tue, 05 Apr 2022 12:25:00 UTC')}
        max={new Date('Tue, 05 Apr 2022 12:40:00 UTC')}
        // highlight-end
      />
    </AnnotationsChart>
  );
};
```

### Numerical x-axis

The numerical x-axis has additional configuration options, like `scale`, `formatter` and `unit`.

**NumericalXAxis**

```tsx
import { units } from '@dynatrace-sdk/units';
import {
  AnnotationsChart,
  ChartSeriesAction,
} from '@dynatrace/strato-components/charts';
import {
  DatabaseIcon,
  DynatraceSignetIcon,
  HttpIcon,
  LineChartIcon,
  MagnifyingGlassIcon,
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

const NumericalXAxis = () => {
  return (
    <AnnotationsChart
      showLabels={true}
      annotationsActions={(annotation) => (
        <ChartSeriesAction>
          <ChartSeriesAction.Item
            onSelect={() => {
              console.log(annotation);
            }}
          >
            <ChartSeriesAction.ItemIcon>
              <MagnifyingGlassIcon />
            </ChartSeriesAction.ItemIcon>
            Inspect entity details
          </ChartSeriesAction.Item>
        </ChartSeriesAction>
      )}
    >
      {loadingTimes.map((track) => (
        <AnnotationsChart.Track label={track.label} key={track.label}>
          {track.markers.map((marker, index) => (
            <AnnotationsChart.Marker key={index} {...marker} />
          ))}
        </AnnotationsChart.Track>
      ))}
      <AnnotationsChart.XAxis
        // highlight-next-line
        type="linear"
        formatter={{
          input: units.time.minute,
          output: units.time.second,
        }}
      />
    </AnnotationsChart>
  );
};
```

The `scale` option can be used to choose between linear and logarithmic scale. Take into account that the logarithmic scale just supports positive numbers (excluding 0), so if negative or zero values are provided, the scale will fall back to linear.

**XAxisLogScale**

```tsx
import { units } from '@dynatrace-sdk/units';
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const wealthAffordability = [
  {
    title: 'Basic Necessities',
    description:
      'Affording basic necessities like food, clothing, and shelter.',
    symbol: '🍞',
    start: 1000,
    color: '#D9856F', // slightly darker light salmon
    priority: 1,
  },
  {
    title: 'Affordable Transport',
    description:
      'Affording basic personal transportation, like a bicycle or used motorbike.',
    symbol: '🚲',
    start: 5000,
    color: '#7CB28C', // slightly darker pale green
    priority: 2,
  },
  {
    title: 'Basic Electronics',
    description:
      'Affording basic electronics like a smartphone or a personal computer.',
    symbol: '📱',
    start: 10000,
    color: '#00C957', // slightly darker spring green
    priority: 3,
  },
  {
    title: 'Domestic Travel',
    description: 'Affording domestic travel for leisure or business.',
    symbol: '✈️',
    start: 50000,
    color: '#CF3F7D', // slightly darker hot pink
    priority: 4,
  },
  {
    title: 'International Travel',
    description: 'Affording international travel for leisure or business.',
    symbol: '🌍',
    start: 100000,
    color: '#007EC7', // slightly darker deep sky blue
    priority: 5,
  },
  {
    title: 'Luxury Goods',
    description:
      'Affording luxury goods such as designer clothing, high-end electronics, or premium vehicles.',
    symbol: '💎',
    start: 500000,
    color: '#7C26C6', // slightly darker blue violet
    priority: 6,
  },
  {
    title: 'Property Ownership',
    description:
      'Affording ownership of property, such as a house or an apartment.',
    symbol: '🏠',
    start: 1000000,
    color: '#CC7F00', // slightly darker orange
    priority: 7,
  },
  {
    title: 'Investment in Businesses',
    description: 'Affording significant investments in businesses or startups.',
    symbol: '🏢',
    start: 5000000,
    color: '#B63300', // slightly darker orange red
    priority: 8,
  },
  {
    title: 'Philanthropy',
    description: 'Affording to make substantial philanthropic contributions.',
    symbol: '❤️',
    start: 10000000,
    color: '#B53730', // slightly darker tomato
    priority: 9,
  },
  {
    title: 'Private Jet Ownership',
    description: 'Affording ownership of a private jet.',
    symbol: '🛩️',
    start: 50000000,
    color: '#285C7E', // slightly darker steel blue
    priority: 10,
  },
  {
    title: 'Luxury Yacht Ownership',
    description: 'Affording ownership of a luxury yacht.',
    symbol: '🛥️',
    start: 100000000,
    color: '#1A4F2A', // slightly darker sea green
    priority: 11,
  },
  {
    title: 'Space Travel',
    description:
      'Affording private space travel or significant investments in space technology.',
    symbol: '🚀',
    start: 500000000,
    color: '#B59500', // slightly darker gold
    priority: 12,
  },
  {
    title: 'Ownership of Sports Teams',
    description: 'Affording ownership of major professional sports teams.',
    symbol: '🏀',
    start: 1000000000,
    color: '#331A4D', // slightly darker indigo
    priority: 13,
  },
];

const XAxisLogScale = () => {
  return (
    <AnnotationsChart showLabels={true}>
      <AnnotationsChart.Track label="Wealth Level">
        {wealthAffordability.map((marker, index) => {
          return <AnnotationsChart.Marker key={index} {...marker} />;
        })}
      </AnnotationsChart.Track>
      <AnnotationsChart.XAxis
        // highlight-next-line
        type="log"
        formatter={{
          // TODO: Adapt to non deprecated code - APPDEV-10743
          // oxlint-disable-next-line typescript/no-deprecated
          input: units.currency.eur,
        }}
      />
    </AnnotationsChart>
  );
};
```

The `formatter` or `unit` props can be used to customise the formatting of the x-axis ticks and the tooltip numerical data. If both properties are present, the `formatter` will take precedence over `unit`.

**XAxisFormatter**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const physicsDiscoveries = [
  {
    title: 'Discovery of Electromagnetism',
    description:
      'James Clerk Maxwell formulated the theory of electromagnetism, unifying electricity, magnetism, and light.',
    symbol: '🔋',
    start: 1865,
    color: '#D9856F', // slightly darker light salmon
    priority: 2,
  },
  {
    title: 'Theory of Special Relativity',
    description:
      'Albert Einstein proposed the theory of special relativity, revolutionizing the understanding of space and time.',
    symbol: '⏱️',
    start: 1905,
    color: '#D4A538', // slightly darker gold
    priority: 3,
  },
  {
    title: 'Theory of General Relativity',
    description:
      'Albert Einstein proposed the theory of general relativity, explaining gravity as the curvature of spacetime.',
    symbol: '🌌',
    start: 1915,
    color: '#187D6F', // slightly darker light sea green
    priority: 4,
  },
  {
    title: 'Development of Quantum Mechanics',
    description:
      'The development of quantum mechanics provided a new framework for understanding atomic and subatomic processes.',
    symbol: '🔬',
    start: 1920,
    end: 1930,
    color: '#7E3D18', // slightly darker saddle brown
    priority: 5,
  },
  {
    title: 'Discovery of the Higgs Boson',
    description:
      'The Higgs boson, a fundamental particle associated with the Higgs field, was discovered at CERN.',
    symbol: '🔎',
    start: 2012,
    color: '#6F1E6F', // slightly darker purple
    priority: 6,
  },
  {
    title: 'Detection of Gravitational Waves',
    description:
      "LIGO detected gravitational waves, confirming a major prediction of Einstein's general relativity.",
    symbol: '🌊',
    start: 2015,
    color: '#197573', // slightly darker dark turquoise
    priority: 7,
  },
];

const techMilestones = [
  {
    title: 'Invention of the Transistor',
    description:
      'The first transistor was invented, marking the beginning of modern computing.',
    symbol: '🔧',
    start: 1947,
    color: '#B89500', // slightly darker gold
    priority: 1,
  },
  {
    title: 'Development of the Integrated Circuit',
    description:
      'The integrated circuit was developed, enabling the creation of more powerful computers.',
    symbol: '🔋',
    start: 1958,
    color: '#A35E50', // slightly darker light salmon
    priority: 2,
  },
  {
    title: 'First Microprocessor',
    description: 'The Intel 4004, the first microprocessor, was released.',
    symbol: '💻',
    start: 1971,
    color: '#37556E', // slightly darker steel blue
    priority: 3,
  },
  {
    title: "Moore's Law Era",
    description:
      "Period during which Moore's Law accurately predicted the doubling of transistors approximately every 18-24 months.",
    symbol: '📈',
    start: 1971,
    end: 2011,
    color: '#992828', // slightly darker tomato
    priority: 4,
  },
  {
    title: 'Introduction of the IBM PC',
    description:
      'The IBM PC was introduced, setting a standard for personal computing.',
    symbol: '🖥️',
    start: 1981,
    color: '#5C885B', // slightly darker pale green
    priority: 5,
  },
  {
    title: 'First Graphical User Interface (GUI)',
    description:
      'The first GUI was developed, revolutionizing user interaction with computers.',
    symbol: '🖱️',
    start: 1983,
    color: '#AB717A', // slightly darker light pink
    priority: 6,
  },
  {
    title: 'Rise of the Internet',
    description:
      'The internet began to see widespread adoption, changing global communication.',
    symbol: '🌐',
    start: 1990,
    end: 1995,
    color: '#005F5F', // slightly darker cyan
    priority: 7,
  },
  {
    title: 'Introduction of the Smartphone',
    description:
      'The first smartphones were released, integrating computing and communication.',
    symbol: '📱',
    start: 2007,
    color: '#6E2B00', // slightly darker orange red
    priority: 8,
  },
  {
    title: 'Era of Quantum Computing',
    description:
      'The ongoing development of quantum computers, which hold the potential to solve problems beyond the capability of classical computers.',
    symbol: '⚛️',
    start: 2020,
    end: 2024,
    color: '#6E005C', // slightly darker dark violet
    priority: 9,
  },
];

const XAxisFormatter = () => {
  return (
    <AnnotationsChart showLabels={true}>
      <AnnotationsChart.Track label="Tech Milestones">
        {techMilestones.map((marker, index) => {
          return <AnnotationsChart.Marker key={index} {...marker} />;
        })}
      </AnnotationsChart.Track>
      <AnnotationsChart.Track label="Science Discoveries">
        {physicsDiscoveries.map((marker, index) => {
          return <AnnotationsChart.Marker key={index} {...marker} />;
        })}
      </AnnotationsChart.Track>
      <AnnotationsChart.XAxis
        type="linear"
        // highlight-next-line
        formatter={(value) => value.toString()}
        unit="years" // this prop will be ignored in favour of custom formatter
      />
    </AnnotationsChart>
  );
};
```

### Numbers to time conversion

The `scale` prop offers an additional option that allows for the conversion of timestamps to dates. By setting the scale to time, all numeric data used in the markers will be parsed as dates. Consequently, the `min` and `max` props of the axis can accept both number and date types.

In case some invalid number that can't be converted to date is provided, it will be filtered out of the original dataset.

**TimestampXAxis**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const cpuEvents = [
  {
    start: 1649167080000, // Tue, 05 Apr 2022 12:18:00 UTC
    title: 'CPU spike detected',
    description: 'Short burst of high CPU usage',
    symbol: '🔥',
    color: '#C0392B', // dark red
    priority: 2,
  },
  {
    start: 1649167140000, // Tue, 05 Apr 2022 12:19:00 UTC
    end: 1649167200000, // Tue, 05 Apr 2022 12:20:00 UTC
    title: 'CPU high usage',
    description: 'Sustained high CPU usage',
    color: '#E74C3C', // red
    priority: 5,
  },
  {
    start: 1649167260000, // Tue, 05 Apr 2022 12:21:00 UTC
    title: 'CPU temperature warning',
    description: 'Temperature exceeded safe threshold',
    symbol: '⚠️',
    color: '#F39C12', // dark gold
  },
  {
    start: 1649167320000, // Tue, 05 Apr 2022 12:22:00 UTC
    end: 1649167380000, // Tue, 05 Apr 2022 12:23:00 UTC
    title: 'CPU usage normalization',
    description: 'CPU usage back to normal levels',
    color: '#27AE60', // dark green
  },
  {
    start: 1649167440000, // Tue, 05 Apr 2022 12:24:00 UTC
    title: 'CPU throttling',
    description: 'CPU throttling due to high temperature',
    symbol: '❄️',
    color: '#2980B9', // dark blue
    priority: 3,
  },
  {
    start: 1649167500000, // Tue, 05 Apr 2022 12:25:00 UTC
    end: 1649167560000, // Tue, 05 Apr 2022 12:26:00 UTC
    title: 'CPU recovery',
    description: 'CPU temperature and usage back to safe levels',
    color: '#1ABC9C', // dark cyan
  },
  {
    start: 1649167620000, // Tue, 05 Apr 2022 12:27:00 UTC
    title: 'Idle CPU',
    description: 'CPU is idle',
    symbol: '🛌',
    color: '#95A5A6', // dark gray
  },
  {
    start: 1649167680000, // Tue, 05 Apr 2022 12:28:00 UTC
    end: 1649167740000, // Tue, 05 Apr 2022 12:29:00 UTC
    title: 'CPU diagnostic',
    description: 'Running CPU diagnostics',
    color: '#8E44AD', // dark violet
    priority: 4,
  },
  {
    start: 1649167800000, // Tue, 05 Apr 2022 12:30:00 UTC
    title: 'CPU maintenance',
    description: 'Scheduled CPU maintenance',
    symbol: '🛠️',
    color: '#D35400', // dark orange
  },
  {
    start: 1649167860000, // Tue, 05 Apr 2022 12:31:00 UTC
    end: 1649167920000, // Tue, 05 Apr 2022 12:32:00 UTC
    title: 'CPU benchmark',
    description: 'Running CPU benchmark tests',
    color: '#6C3483', // dark purple
  },
];

const TimestampXAxis = () => {
  return (
    <AnnotationsChart>
      <AnnotationsChart.Track label="Load balancer events">
        {cpuEvents.map((marker, markerIndex) => (
          <AnnotationsChart.Marker key={markerIndex} {...marker} />
        ))}
      </AnnotationsChart.Track>
      <AnnotationsChart.XAxis
        // highlight-next-line
        type="time"
        min={1649167020000} // Tue, 05 Apr 2022 12:17:00 UTC
        max={1649167980000} // Tue, 05 Apr 2022 12:33:00 UTC
      />
    </AnnotationsChart>
  );
};
```
