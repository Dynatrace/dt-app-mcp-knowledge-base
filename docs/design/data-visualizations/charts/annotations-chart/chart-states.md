## Chart states

### Error state

The `ErrorState` subcomponent is responsible for handling errors in a graceful manner, ultimately improving the overall user experience. Its primary function is to catch any errors that may occur with the data and display a fallback UI instead of crashing the entire application.

In case of an error thrown inside the chart, a predefined error message will be shown.

**DefaultError**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const DefaultError = () => {
  return (
    <div style={{ height: '300px' }}>
      <AnnotationsChart>
        <AnnotationsChart.Track>
          <AnnotationsChart.Marker
            start={new Date('Tue, 12 Feb 2024 12:00:00 UTC')}
          />
        </AnnotationsChart.Track>
        <AnnotationsChart.XAxis
          formatter={() => {
            throw new Error();
          }}
        />
      </AnnotationsChart>
    </div>
  );
};
```

If you prefer to create your own error screen to preserve styles and information shown, you can create your own error state presenter.

**FormattedCustomError**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const FormattedCustomError = () => {
  return (
    <div style={{ height: '300px' }}>
      <AnnotationsChart>
        <AnnotationsChart.Track>
          <AnnotationsChart.Marker
            start={new Date('Tue, 12 Feb 2024 12:00:00 UTC')}
          />
        </AnnotationsChart.Track>
        {/* highlight-start */}
        <AnnotationsChart.ErrorState>
          An error ocurred in the <b>chart</b>.
        </AnnotationsChart.ErrorState>
        {/* highlight-end */}
        <AnnotationsChart.XAxis
          formatter={() => {
            throw new Error();
          }}
        />
      </AnnotationsChart>
    </div>
  );
};
```

### EmptyState

The `EmptyState` subcomponent serves as a fallback when there is no data available to display in a chart. Its purpose is to provide a user-friendly way of informing the user about the current situation.

When no data is provided to the chart, a predefined empty state message will be displayed.

**EmptyStateDefault**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const EmptyStateDefault = () => {
  return (
    <div style={{ height: '300px' }}>
      <AnnotationsChart />
    </div>
  );
};
```

An empty state message can be customized using `AnnotationsChart.ErrorState` subcomponent.

**EmptyStateCustomFormatted**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const EmptyStateCustomFormatted = () => {
  return (
    <div style={{ height: '300px' }}>
      <AnnotationsChart>
        {/* highlight-start */}
        <AnnotationsChart.EmptyState>
          <span>
            No data to <b>display</b>.
          </span>
        </AnnotationsChart.EmptyState>
        {/* highlight-end */}
      </AnnotationsChart>
    </div>
  );
};
```

### Loading

The `AnnotationsChart` is able to show the default loading indicator by setting the `loading` prop to `true`.

**LoadingWithoutData**

```tsx
import { AnnotationsChart } from '@dynatrace/strato-components/charts';

const LoadingWithoutData = () => {
  return (
    <div style={{ height: '300px' }}>
      <AnnotationsChart
        // highlight-next-line
        loading={true}
      />
    </div>
  );
};
```

**LoadingWithData**

```tsx
import { type ReactNode } from 'react';

import { AnnotationsChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  MailIcon,
  SaveIcon,
  ThumbsDownIcon,
  ViewIcon,
  XmarkIcon,
} from '@dynatrace/strato-icons';

type TrackData = Array<{
  symbol?: ReactNode;
  title: string;
  description?: string;
  priority?: number;
  color?: string;
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

const securityEvents: TrackData = [
  {
    symbol: '⏬',
    title: 'High volume of, downloaded data detected',
    description: 'Possible data breach',
    color: Colors.Charts.Categorical.Color12.Default,
    start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
  },
  {
    symbol: <ViewIcon />,
    title: 'Info security log, message log pattern found',
    description: 'I-174',
    color: Colors.Charts.Logstatus.Info.Default,
    start: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
  },
  {
    symbol: '🕵️‍',
    title: 'Internal Phishing, campaign simulation',
    description: 'Internal employee training',
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
  },
  {
    title: 'Info security log message log pattern found',
    description: 'I-174,',
    color: Colors.Charts.Categorical.Color05.Default,
    start: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
  },
  {
    symbol: <ThumbsDownIcon />,
    title: 'Critical Log4j Vulnerability detected',
    description: 'CVE-2021-44228',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    start: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
  },
  {
    symbol: '✅',
    title: 'Critical Log4j Vulnerability fixed',
    color: Colors.Charts.Apdex.Excellent.Default,
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
  },
];

const releasesEvents: TrackData = [
  {
    symbol: '🚀',
    title: 'DT Sans release',
    description: 'v1.007',
    color: Colors.Charts.Categorical.Color11.Default,
    start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
  },
  {
    symbol: <XmarkIcon />,
    title: 'Strato Design System release',
    description: 'v0.8.1',

    priority: 1,
    start: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
  },
  {
    symbol: <SaveIcon />,
    title: 'DT Sans release',
    description: 'v1.008',
    color: Colors.Charts.Categorical.Color11.Default,

    priority: 2,
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
  },
  {
    symbol: '🎁',
    title: 'Strato Design System release',
    description: 'v0.8.2',
    start: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
  },
];

const serverEvents: TrackData = [
  {
    symbol: <XmarkIcon />,
    title: 'Low number of inodes available',
    description: 'Host138-456-789',
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
  },
  {
    symbol: '🧨',
    title: 'Marked for Termination',
    description: 'AuthenticationService',
    color: Colors.Charts.Loglevel.Info.Default,
    start: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
  },
  {
    symbol: '🔥',
    title: 'Spike in, the CPU usage',
    description: 'Host138-4568-4589',
    color: Colors.Charts.Loglevel.Emergency.Default,

    priority: 3,
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
  },
  {
    symbol: <MailIcon />,
    title: 'High rate of dropped packets',
    description: 'Host137-5684-7894',
    color: Colors.Charts.Categorical.Color15.Default,

    priority: 1,
    start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
  },
  {
    symbol: '✉️',
    title: 'High rate of dropped packets',
    description: 'Host145-6745-4365',
    start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
  },
  {
    symbol: '!',
    title: 'User action duration degradation',
    description: 'easyTravel Web',

    priority: 1,
    start: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
  },
  {
    symbol: '👽',
    title: 'Bandwidth overload',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color04.Default,

    priority: 2,
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
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
const multipleTracksData = [
  loadBalancerEvents,
  securityEvents,
  serverEvents,
  releasesEvents,
  userSessions,
];

const LoadingWithData = () => {
  return (
    <AnnotationsChart
      // highlight-next-line
      loading={true}
    >
      {multipleTracksData.map((trackData, trackIndex) => (
        <AnnotationsChart.Track key={trackIndex}>
          {trackData.map((marker, markerIndex) => (
            <AnnotationsChart.Marker key={markerIndex} {...marker} />
          ))}
        </AnnotationsChart.Track>
      ))}
    </AnnotationsChart>
  );
};
```
