## Annotations

Annotations are used to visualize specific events or contextual notes on the `TimeseriesChart` in the form of markers placed in time-based tracks.

The marker represents an annotation at a certain point or period in time. They can be either timestamp-based (a circular shaped marker) or timeframe-based (a pill shaped marker) depending on the type of the annotation data point. Annotations with the same timestamp/timeframe are grouped together under a single marker that displays the number of grouped annotations. Markers can be displayed on a single or multiple tracks. When there are more than three tracks, an overflow scroll is applied.

### Add annotations

In order to visualize annotation data inside the `TimeseriesChart` a `TimeseriesChart.Annotations` component should be initialized. This component should have at least one track, that contains a marker component per annotation data point.

An annotation data point should contain a time dimension just as the `TimeseriesChart` (`start` and optional `end`), an optional `symbol`, `title`, and `description`, which will be displayed in the tooltip.

**AnnotationsData**

```tsx
import { mockTimeseriesAnnotationCpuUsage } from '@design-system/mock-data';

import {
  TimeseriesAnnotations,
  type TimeseriesAnnotationsMarkerProps,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import { ThumbsDownIcon, ViewIcon } from '@dynatrace/strato-icons';

const loadBalancerEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'Marked for termination',
    description: 'AuthenticationService',
    symbol: 'T',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'jQuery 2.1.1 was detected',
    description: 'weather dynatrace-dev',
    symbol: 'Q',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb2',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a low failure rate',
    description: 'elb3',
    priority: 10,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
    title: 'Balancer Node removed',
    description: 'Performance degraded by 10%',
    symbol: <ViewIcon />,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:23:30 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:24:30 UTC'),
    title: 'Balancer Node added',
    description: 'Performance recovered to normal',
    symbol: '❤️‍🩹',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor performance',
    description: 'Increase by 10%',
    symbol: '🔼',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor restart',
    description: 'Improve the performance',
    symbol: '🔨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
    title: 'Synthetic monitor performance slow',
    description: 'City of Cambridge',
    symbol: <ThumbsDownIcon />,
    priority: 7,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    symbol: '🐤',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    symbol: 'E',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:36:30 UTC'),
    title: 'Hardware failure',
    description: 'Host 1',
    symbol: '🧨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Web',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Mobile',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'User action duration degradation',
    description: 'easyTravel Mobile',
    symbol: '📱',
    priority: 5,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    symbol: 'A',
  },
];
const securityEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
    title: 'High volume of, downloaded data detected',
    description: 'Possible data breach',
    symbol: '⏬',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
    title: 'Info security log, message log pattern found',
    description: 'I-174',
    symbol: '☻',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
    title: 'Internal Phishing, campaign simulation',
    description: 'Internal employee training against phishing',
    symbol: '🕵️‍',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
    title: 'Info security log message log pattern found',
    description: 'I-174,',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
    title: 'Critical Log4j Vulnerability detected',
    description: 'CVE-2021-44228',
    symbol: '⚠️',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    title: 'Critical Log4j Vulnerability fixed',
    description: 'CVE-2021-44228',
    symbol: '✅',
  },
];
const releasesEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'DT Sans release',
    description: 'v1.007',
    symbol: '🚀',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
    title: 'Strato Design System release',
    description: 'v0.8.1',
    symbol: '🎁',
    priority: 1,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'DT Sans release',
    description: 'v1.008',
    symbol: '🚀',
    priority: 2,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
    title: 'Strato Design System release',
    description: 'v0.8.2',
    symbol: '🎁',
  },
];
const serverEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
    title: 'Low number of inodes available',
    description: 'Host138-456-789',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
    title: 'Marked for Termination',
    description: 'AuthenticationService',
    symbol: '🧨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
    title: 'Spike in, the CPU usage',
    description: 'Host138-4568-4589',
    symbol: '🔥',
    priority: 3,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
    title: 'High rate of dropped packets',
    description: 'Host137-5684-7894',
    symbol: '✉️',
    priority: 1,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
    title: 'High rate of dropped packets',
    description: 'Host145-6745-4365',
    symbol: '✉️',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'User action duration degradation',
    description: 'easyTravel Web',
    symbol: '!',
    priority: 1,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'Bandwidth overload',
    description: 'Host137-5684-7894',
    symbol: '👽',
    priority: 2,
  },
];
const userSessions: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
    title: 'Bad user session experience',
    description: 'VisitorID-1000009-1032',
    symbol: '🙅‍',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
    title: 'Good user session experience',
    description: 'VisitorID-1000009-1032',
    symbol: '🙆‍',
  },
];
const multipleTracksData = [
  loadBalancerEvents,
  securityEvents,
  serverEvents,
  releasesEvents,
  userSessions,
];

const AnnotationsData = () => {
  return (
    <>
      <TimeseriesChart data={mockTimeseriesAnnotationCpuUsage}>
        {/* highlight-start */}
        <TimeseriesChart.Annotations>
          <TimeseriesAnnotations.Track>
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[5]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[6]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[7]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[8]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[10]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[12]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[13]} />
          </TimeseriesAnnotations.Track>
        </TimeseriesChart.Annotations>
        {/* highlight-end */}
      </TimeseriesChart>

      <TimeseriesChart data={mockTimeseriesAnnotationCpuUsage} variant="area">
        {/* highlight-start */}
        <TimeseriesChart.Annotations>
          <TimeseriesAnnotations.Track>
            {loadBalancerEvents.map((marker, index) => (
              <TimeseriesAnnotations.Marker key={index} {...marker} />
            ))}
          </TimeseriesAnnotations.Track>
        </TimeseriesChart.Annotations>
        {/* highlight-end */}
      </TimeseriesChart>

      <TimeseriesChart
        data={mockTimeseriesAnnotationCpuUsage}
        variant="bar"
        height={500}
      >
        {/* highlight-start */}
        <TimeseriesChart.Annotations>
          {multipleTracksData.map((trackData, index) => (
            <TimeseriesAnnotations.Track key={index}>
              {trackData.map((marker, index) => (
                <TimeseriesAnnotations.Marker key={index} {...marker} />
              ))}
            </TimeseriesAnnotations.Track>
          ))}
        </TimeseriesChart.Annotations>
        {/* highlight-end */}
      </TimeseriesChart>
    </>
  );
};
```

### Marker content

When the `symbol` is provided, it will become the marker content by default. When not, the `title` will be shown as marker content.

For **timestamp markers** (single-point, has no `end`), if the label is wider than the default marker width, the marker expands to fit the full content, decoupling from the original scale. In these cases, the triangle below the marker is showing the exact point in time.

For **range markers** (bounded spans with a start and end timestamp), by default, label text is truncated to fit within the marker's bounded width. The marker does not expand beyond its natural span. If the range is not big enough to show the full content, it will be truncated. If the marker is too small, and not representative content could be shown, then, the content will be hidden.

The `textOverflow` property on `TimeseriesChart.Annotations` controls this behavior for range markers. Set it to `'expand'` to let range markers also expand beyond their natural span instead of truncating. Timestamp markers always expand to fit their content, regardless of this setting.

### Visual customization

Tracks and markers support visual customization in order to differentiate various types of annotations.

It's possible to set custom colors on both the track (to be applied to all markers) and the marker level by using the `color` property on the respective component. A marker's custom color has precedence over track's. This color can be set to any `Design System color token`, as well as any `rgb`, `hex` or `CSS color`.

The `symbol` property allows you to apply an icon, emoji, single letter, glyph, or Design System icon to either an individual marker or to an entire track. When applied to a track, this `symbol` will be used as the default. As with the color property, a marker's custom symbol has higher priority than track's.

When markers partially overlap one another, the order of the annotations defines which marker is displayed on top. Timestamp-based annotations are always displayed above timeframe-based ones. It's also possible to customize the marker display order, by using the `priority` property. The higher the value of the priority property, the higher precedence the marker has. The priority property also affects the color of markers i.e. within a group, the color of the marker with the highest priority will be applied to the group.

It's possible to assign a label to a track using the `label` property. Be aware that labels are hidden by default. To show a track's label, the `showLabels` property has to be applied to the `TimeseriesChart.Annotations` component.

**AnnotationsCustomization**

```tsx
import { mockTimeseriesAnnotationCpuUsage } from '@design-system/mock-data';

import {
  TimeseriesAnnotations,
  type TimeseriesAnnotationsMarkerProps,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import { ThumbsDownIcon, ViewIcon } from '@dynatrace/strato-icons';

const loadBalancerEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    symbol: 'T',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'jQuery 2.1.1 was detected',
    description: 'weather dynatrace-dev',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    symbol: 'Q',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb2',
    color: Colors.Charts.CategoricalThemed.Swamps.Color01.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a low failure rate',
    description: 'elb3',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    priority: 10,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
    title: 'Balancer Node removed',
    description: 'Performance degraded by 10%',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
    symbol: <ViewIcon />,
    symbolColor: '#4d94ff',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:23:30 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:24:30 UTC'),
    title: 'Balancer Node added',
    description: 'Performance recovered to normal',
    color: Colors.Charts.Logstatus.Info.Default,
    symbol: '❤️‍🩹',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor performance',
    description: 'Increase by 10%',
    color: Colors.Charts.CategoricalThemed.Swamps.Color02.Default,
    symbol: '🔼',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor restart',
    description: 'Improve the performance',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    symbol: '🔨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
    title: 'Synthetic monitor performance slow',
    description: 'City of Cambridge',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color06.Default,
    symbol: <ThumbsDownIcon />,
    priority: 7,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
    symbol: '🐤',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
    symbol: 'E',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:36:30 UTC'),
    title: 'Hardware failure',
    description: 'Host 1',
    color: Colors.Charts.Logstatus.Warning.Default,
    symbol: '🧨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Web',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'User action duration degradation',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    symbol: '📱',
    priority: 5,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
    symbol: 'A',
  },
];
const securityEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
    title: 'High volume of, downloaded data detected',
    description: 'Possible data breach',
    color: Colors.Charts.Categorical.Color12.Default,
    symbol: '⏬',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
    title: 'Info security log, message log pattern found',
    description: 'I-174',
    color: Colors.Charts.Logstatus.Info.Default,
    symbol: '☻',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
    title: 'Internal Phishing, campaign simulation',
    description: 'Internal employee training against phishing',
    symbol: '🕵️‍',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
    title: 'Info security log message log pattern found',
    description: 'I-174,',
    color: Colors.Charts.Categorical.Color05.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
    title: 'Critical Log4j Vulnerability detected',
    description: 'CVE-2021-44228',
    symbol: '⚠️',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    title: 'Critical Log4j Vulnerability fixed',
    description: 'CVE-2021-44228',
    symbol: '✅',
    color: Colors.Charts.Apdex.Excellent.Default,
  },
];

const AnnotationsCustomization = () => {
  return (
    <TimeseriesChart data={mockTimeseriesAnnotationCpuUsage} variant="bar">
      {/* highlight-start */}
      <TimeseriesChart.Annotations showLabels>
        <TimeseriesAnnotations.Track label="Anomalies">
          {loadBalancerEvents.map((marker, index) => (
            <TimeseriesAnnotations.Marker key={index} {...marker} />
          ))}
        </TimeseriesAnnotations.Track>
        <TimeseriesAnnotations.Track
          label="Issues"
          color={Colors.Charts.CategoricalThemed.Swamps.Color05.Default}
          symbol="🚨"
        >
          {securityEvents.map((marker, index) => (
            <TimeseriesAnnotations.Marker key={index} {...marker} />
          ))}
        </TimeseriesAnnotations.Track>
      </TimeseriesChart.Annotations>
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

### Visibility

An entire track can be hidden by adding the `hidden` property to the `TimeseriesAnnotations.Track` component. The same configuration can be applied to a marker, by setting the `hidden` property on the `TimeseriesAnnotations.Marker` component.

When hovering a marker (with the cursor), an annotation indicator appears over the chart area. The indicator's visibility can be customized on either a track or marker level by using the `indicatorsDisplay` property:

- With the `auto` option, the default behaviour is applied - indicators appear on hover.
- The `always` option sets indicators to always be visible within the chart area, regardless of the hovering behavior.
- The `never` option sets indicators to never be visible.

**AnnotationsVisibility**

```tsx
import { mockTimeseriesAnnotationCpuUsage } from '@design-system/mock-data';

import {
  TimeseriesAnnotations,
  type TimeseriesAnnotationsMarkerProps,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import { ThumbsDownIcon, ViewIcon } from '@dynatrace/strato-icons';

const loadBalancerEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    symbol: 'T',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'jQuery 2.1.1 was detected',
    description: 'weather dynatrace-dev',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    symbol: 'Q',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb2',
    color: Colors.Charts.CategoricalThemed.Swamps.Color01.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a low failure rate',
    description: 'elb3',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    priority: 10,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
    title: 'Balancer Node removed',
    description: 'Performance degraded by 10%',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
    symbol: <ViewIcon />,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:23:30 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:24:30 UTC'),
    title: 'Balancer Node added',
    description: 'Performance recovered to normal',
    color: Colors.Charts.Logstatus.Info.Default,
    symbol: '❤️‍🩹',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor performance',
    description: 'Increase by 10%',
    color: Colors.Charts.CategoricalThemed.Swamps.Color02.Default,
    symbol: '🔼',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor restart',
    description: 'Improve the performance',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    symbol: '🔨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
    title: 'Synthetic monitor performance slow',
    description: 'City of Cambridge',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color06.Default,
    symbol: <ThumbsDownIcon />,
    priority: 7,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
    symbol: '🐤',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
    symbol: 'E',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:36:30 UTC'),
    title: 'Hardware failure',
    description: 'Host 1',
    color: Colors.Charts.Logstatus.Warning.Default,
    symbol: '🧨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Web',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'User action duration degradation',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    symbol: '📱',
    priority: 5,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
    symbol: 'A',
  },
];

const AnnotationsVisibility = () => {
  return (
    <>
      <TimeseriesChart data={mockTimeseriesAnnotationCpuUsage}>
        {/* highlight-start */}
        <TimeseriesChart.Annotations>
          <TimeseriesAnnotations.Track>
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[5]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[6]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[7]} />
            <TimeseriesAnnotations.Marker hidden {...loadBalancerEvents[8]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[10]} />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[12]} />
          </TimeseriesAnnotations.Track>
          <TimeseriesAnnotations.Track hidden>
            {loadBalancerEvents.map((marker, index) => (
              <TimeseriesAnnotations.Marker key={index} {...marker} />
            ))}
          </TimeseriesAnnotations.Track>
        </TimeseriesChart.Annotations>
        {/* highlight-end */}
      </TimeseriesChart>

      <TimeseriesChart
        data={mockTimeseriesAnnotationCpuUsage}
        variant="bar"
        height={500}
      >
        {/* highlight-start */}
        <TimeseriesChart.Annotations>
          <TimeseriesAnnotations.Track indicatorsDisplay="always">
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[3]} />
            <TimeseriesAnnotations.Marker
              {...loadBalancerEvents[6]}
              indicatorsDisplay="auto"
            />
            <TimeseriesAnnotations.Marker
              {...loadBalancerEvents[8]}
              indicatorsDisplay="never"
            />
            <TimeseriesAnnotations.Marker {...loadBalancerEvents[12]} />
          </TimeseriesAnnotations.Track>
        </TimeseriesChart.Annotations>
        {/* highlight-end */}
      </TimeseriesChart>
    </>
  );
};
```

### Annotations tooltip

The Annotations supports both default and custom tooltips for annotations. This allows creators to provide additional detailed information about specific datapoints or events in the chart.

See [Annotations Tooltip](https://developer.dynatrace.com/design/data-visualizations/charts/AnnotationsChart.md#annotationscharttooltip) for details.

### Custom actions

Annotations support both out-of-the-box and custom interactions. When hovering over markers and marker groups, additional detailed information is displayed in the annotation tooltip (out-of-the-box interaction). Similarly to the `TimeseriesChart` series actions, the `TimeseriesChart.Annotations`component supports custom actions which can be defined by the Creator.

**AnnotationsCustomActions**

```tsx
import { mockTimeseriesAnnotationCpuUsage } from '@design-system/mock-data';
import { useMemo, useState } from 'react';

import {
  type AnnotationsActionsPayload,
  ChartSeriesAction,
  TimeseriesAnnotations,
  type TimeseriesAnnotationsMarkerProps,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  MagnifyingGlassIcon,
  ThumbsDownIcon,
  ViewIcon,
} from '@dynatrace/strato-icons';

const loadBalancerEvents: TimeseriesAnnotationsMarkerProps[] = [
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    symbol: 'T',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    title: 'jQuery 2.1.1 was detected',
    description: 'weather dynatrace-dev',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    symbol: 'Q',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb2',
    color: Colors.Charts.CategoricalThemed.Swamps.Color01.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
    title: 'Elastic load balancer has a low failure rate',
    description: 'elb3',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
    priority: 10,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
    title: 'Balancer Node removed',
    description: 'Performance degraded by 10%',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
    symbol: <ViewIcon />,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:23:30 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:24:30 UTC'),
    title: 'Balancer Node added',
    description: 'Performance recovered to normal',
    color: Colors.Charts.Logstatus.Info.Default,
    symbol: '❤️‍🩹',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor performance',
    description: 'Increase by 10%',
    color: Colors.Charts.CategoricalThemed.Swamps.Color02.Default,
    symbol: '🔼',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
    title: 'Synthetic monitor restart',
    description: 'Improve the performance',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
    symbol: '🔨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
    title: 'Synthetic monitor performance slow',
    description: 'City of Cambridge',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color06.Default,
    symbol: <ThumbsDownIcon />,
    priority: 7,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
    symbol: '🐤',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
    symbol: 'E',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
    end: new Date('Tue, 05 Apr 2022 12:36:30 UTC'),
    title: 'Hardware failure',
    description: 'Host 1',
    color: Colors.Charts.Logstatus.Warning.Default,
    symbol: '🧨',
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Web',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'High rate of dripped packets',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'User action duration degradation',
    description: 'easyTravel Mobile',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
    symbol: '📱',
    priority: 5,
  },
  {
    start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
    symbol: 'A',
  },
];

const AnnotationsCustomActions = () => {
  const [selectedAnnotation, setSelectedAnnotation] =
    useState<AnnotationsActionsPayload>();
  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];
  const data = useMemo(() => {
    if (selectedAnnotation) {
      const { start, end, title, description } = selectedAnnotation;
      const datapoints = [
        { key: 'Start', value: start.toLocaleString() },
        { key: 'End', value: end?.toLocaleString() },
        { key: 'Title', value: title },
        { key: 'Description', value: description },
      ];
      return [...datapoints];
    }
    return [];
  }, [selectedAnnotation]);

  return (
    <>
      <TimeseriesChart data={mockTimeseriesAnnotationCpuUsage}>
        {/* highlight-start */}
        <TimeseriesChart.Annotations
          annotationsActions={(annotation) => (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                key={`details-${new Date().getTime()}`}
                onSelect={() => {
                  setSelectedAnnotation(annotation);
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
          <TimeseriesAnnotations.Track>
            {loadBalancerEvents.map((marker, index) => (
              <TimeseriesAnnotations.Marker key={index} {...marker} />
            ))}
          </TimeseriesAnnotations.Track>
        </TimeseriesChart.Annotations>
        {/* highlight-end */}
      </TimeseriesChart>
      {selectedAnnotation && <SimpleTable columns={columns} data={data} />}
    </>
  );
};
```
