## Annotations

Annotations are used to visualize specific events or contextual notes on the `HistogramChart` in the form of markers placed in the bins position.

The marker represents an annotation at a certain bin. They can be either a value (a certain number) or a range (from-to object), depending on the data provided to the Annotation. Annotations within the same bin are grouped together under a single marker that displays the number of grouped annotations. Markers can be displayed on a single or multiple tracks. When there are more than three tracks, an overflow scroll is applied.

### Add annotations

In order to visualize annotation data inside the `HistogramChart`, a `HistogramChart.Annotations` component should be initialized. This component should have at least one track, that contains a marker component per annotation data point.

An annotation data point should contain the from-to bin information (`value: {from: number, to:number}`) or a certain point (`value: number`), an optional `symbol`, `title`, and `description`, which will be displayed in the tooltip.

**AnnotationsData**

```tsx
import {
  HistogramAnnotations,
  HistogramAnnotationsMarkerProps,
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const histogramLoadBalancerEvents: HistogramAnnotationsMarkerProps[] = [
  {
    start: 0,
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
  },
  {
    start: 60,
    title: 'jQuery 2.1.1 was detected',
    description: 'weather dynatrace-dev',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
  },
  {
    start: 90,
    end: 100,
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
  },
  {
    start: 120,
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
  },
  {
    start: 160,
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
  },
  {
    start: 190,
    end: 200,
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
  },
  {
    start: 220,
    end: 230,
    title: 'Hardware failure',
    description: 'Host 1',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
  },
  {
    start: 270,
    title: 'Synthetic monitor performance',
    description: 'Increase by 10%',
    color: Colors.Charts.CategoricalThemed.Swamps.Color02.Default,
  },
  {
    start: 300,
    end: 310,
    title: 'Balancer Node added',
    description: 'Performance recovered to normal',
    color: Colors.Charts.Logstatus.Info.Default,
  },
];
const nightPriceDistribution: HistogramSeries[] = [
  {
    name: 'Price',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 75,
      },
      {
        from: 20,
        to: 30,
        value: 300,
      },
      {
        from: 30,
        to: 40,
        value: 450,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 870,
      },
      {
        from: 60,
        to: 70,
        value: 890,
      },
      {
        from: 70,
        to: 80,
        value: 480,
      },
      {
        from: 80,
        to: 90,
        value: 520,
      },
      {
        from: 90,
        to: 100,
        value: 850,
      },
      {
        from: 100,
        to: 110,
        value: 730,
      },
      {
        from: 110,
        to: 120,
        value: 630,
      },
      {
        from: 120,
        to: 130,
        value: 270,
      },
      {
        from: 130,
        to: 140,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 170,
        to: 180,
        value: 130,
      },
      {
        from: 180,
        to: 190,
        value: 430,
      },
      {
        from: 190,
        to: 200,
        value: 75,
      },
      {
        from: 200,
        to: 210,
        value: 89,
      },
      {
        from: 210,
        to: 220,
        value: 94,
      },
      {
        from: 220,
        to: 230,
        value: 63,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 60,
      },
      {
        from: 250,
        to: 260,
        value: 80,
      },
      {
        from: 260,
        to: 270,
        value: 70,
      },
      {
        from: 270,
        to: 280,
        value: 98,
      },
      {
        from: 280,
        to: 290,
        value: 89,
      },
      {
        from: 290,
        to: 300,
        value: 88,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 46,
      },
      {
        from: 320,
        to: 330,
        value: 55,
      },
    ],
  },
];

const AnnotationsData = () => {
  return (
    <Flex gap={32} flexDirection="column">
      <HistogramChart data={nightPriceDistribution}>
        <HistogramChart.Legend hidden={true} />
        {/* highlight-start */}
        <HistogramChart.Annotations>
          <HistogramAnnotations.Track>
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[2]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[1]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[5]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[7]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[8]} />
          </HistogramAnnotations.Track>
        </HistogramChart.Annotations>
        {/* highlight-end */}
      </HistogramChart>

      <HistogramChart data={nightPriceDistribution}>
        <HistogramChart.Legend hidden={true} />
        <HistogramChart.Annotations>
          <HistogramAnnotations.Track>
            {histogramLoadBalancerEvents.map((marker, index) => (
              <HistogramAnnotations.Marker key={index} {...marker} />
            ))}
          </HistogramAnnotations.Track>
        </HistogramChart.Annotations>
      </HistogramChart>
    </Flex>
  );
};
```

### Marker content

When the `symbol` is provided, it will become the marker content by default. When not, the `title` will be shown as marker content.

By default, when the content of a range marker is bigger than the size of the marker (bin size in Histogram), it expands to fit all the content inside, decoupling from the original scale. In these particular cases, it is encouraged to use the indicators, which will represent the real size of the bin. Value markers always expand to fit their content.

The `textOverflow` property on `HistogramChart.Annotations` controls this behavior for range markers. Set it to `'truncate'` to instead truncate the content to fit within the marker's bounded width.

### Visual customization

Tracks and markers support visual customization in order to differentiate various types of annotations.

It's possible to set custom colors on both the track (to be applied to all markers) and the marker level by using the `color` property on the respective component. A marker's custom color has precedence over track's. This color can be set to any `Design System color token`, as well as any `rgb`, `hex` or `CSS color`.

The `symbol` property allows you to apply an icon, emoji, single letter, glyph, or Design System icon to either an individual marker or to an entire track. When applied to a track, this `symbol` will be used as the default.

When markers partially overlap one another, the order of the annotations defines which marker is displayed on top. Value annotations are always displayed above Range-based ones. It's also possible to customize the marker display order, by using the priority property. The higher the value of the priority property, the higher precedence the marker has. The priority property also affects the color of markers i.e. within a group, the color of the marker with the highest priority will be applied to the group.

It's possible to assign a label to a track using the `label` property. Be aware that labels are hidden by default. To show a track's label, the `showLabels` property has to be applied to the `HistogramChart.Annotations` component.

**AnnotationsCustomization**

```tsx
import {
  HistogramAnnotations,
  HistogramAnnotationsMarkerProps,
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const histogramLoadBalancerEvents: HistogramAnnotationsMarkerProps[] = [
  {
    start: 0,
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
  },
  {
    start: 60,
    title: 'jQuery 2.1.1 was detected',
    description: 'weather dynatrace-dev',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
    symbol: '!',
    symbolColor: '#ff0000',
  },
  {
    start: 90,
    end: 100,
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
  },
  {
    start: 120,
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
  },
  {
    start: 160,
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
  },
  {
    start: 190,
    end: 200,
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
  },
  {
    start: 220,
    end: 230,
    title: 'Hardware failure',
    description: 'Host 1',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
  },
  {
    start: 270,
    title: 'Synthetic monitor performance',
    description: 'Increase by 10%',
    color: Colors.Charts.CategoricalThemed.Swamps.Color02.Default,
  },
  {
    start: 300,
    end: 310,
    title: 'Balancer Node added',
    description: 'Performance recovered to normal',
    color: Colors.Charts.Logstatus.Info.Default,
  },
];
const securityEvents: HistogramAnnotationsMarkerProps[] = [
  {
    start: 40,
    title: 'High volume of, downloaded data detected',
    description: 'Possible data breach',
    color: Colors.Charts.Categorical.Color12.Default,
    symbol: '⏬',
  },
  {
    start: 80,
    title: 'Info security log, message log pattern found',
    description: 'I-174',
    color: Colors.Charts.Logstatus.Info.Default,
    symbol: '☻',
  },
  {
    start: 120,
    end: 150,
    title: 'Internal Phishing, campaign simulation',
    description: 'Internal employee training against phishing',
    symbol: '🕵️‍',
  },
  {
    start: 170,
    title: 'Info security log message log pattern found',
    description: 'I-174,',
    color: Colors.Charts.Categorical.Color05.Default,
  },
  {
    start: 240,
    title: 'Critical Log4j Vulnerability detected',
    description: 'CVE-2021-44228',
    symbol: '⚠️',
    color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
  },
  {
    start: 260,
    end: 295,
    title: 'Critical Log4j Vulnerability fixed',
    description: 'CVE-2021-44228',
    symbol: '✅',
    color: Colors.Charts.Apdex.Excellent.Default,
  },
];
const nightPriceDistribution: HistogramSeries[] = [
  {
    name: 'Price',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 75,
      },
      {
        from: 20,
        to: 30,
        value: 300,
      },
      {
        from: 30,
        to: 40,
        value: 450,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 870,
      },
      {
        from: 60,
        to: 70,
        value: 890,
      },
      {
        from: 70,
        to: 80,
        value: 480,
      },
      {
        from: 80,
        to: 90,
        value: 520,
      },
      {
        from: 90,
        to: 100,
        value: 850,
      },
      {
        from: 100,
        to: 110,
        value: 730,
      },
      {
        from: 110,
        to: 120,
        value: 630,
      },
      {
        from: 120,
        to: 130,
        value: 270,
      },
      {
        from: 130,
        to: 140,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 170,
        to: 180,
        value: 130,
      },
      {
        from: 180,
        to: 190,
        value: 430,
      },
      {
        from: 190,
        to: 200,
        value: 75,
      },
      {
        from: 200,
        to: 210,
        value: 89,
      },
      {
        from: 210,
        to: 220,
        value: 94,
      },
      {
        from: 220,
        to: 230,
        value: 63,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 60,
      },
      {
        from: 250,
        to: 260,
        value: 80,
      },
      {
        from: 260,
        to: 270,
        value: 70,
      },
      {
        from: 270,
        to: 280,
        value: 98,
      },
      {
        from: 280,
        to: 290,
        value: 89,
      },
      {
        from: 290,
        to: 300,
        value: 88,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 46,
      },
      {
        from: 320,
        to: 330,
        value: 55,
      },
    ],
  },
];

const AnnotationsCustomization = () => {
  return (
    <Flex gap={16} flexDirection="column">
      <HistogramChart data={nightPriceDistribution}>
        <HistogramChart.Legend hidden={true} />
        {/* highlight-start */}
        <HistogramChart.Annotations showLabels>
          <HistogramAnnotations.Track label="Anomalies">
            {histogramLoadBalancerEvents.map((marker, index) => (
              <HistogramAnnotations.Marker key={index} {...marker} />
            ))}
          </HistogramAnnotations.Track>
          <HistogramAnnotations.Track
            label="Issues"
            color={Colors.Charts.CategoricalThemed.Swamps.Color05.Default}
            symbol="🚨"
          >
            {securityEvents.map((marker, index) => (
              <HistogramAnnotations.Marker key={index} {...marker} />
            ))}
          </HistogramAnnotations.Track>
        </HistogramChart.Annotations>
        {/* highlight-end */}
      </HistogramChart>
    </Flex>
  );
};
```

### Visibility

An entire track can be hidden by adding the `hidden` property to the `HistogramAnnotations.Track` component. The same configuration can be applied to a marker, by setting the `hidden` property on the `HistogramAnnotations.Marker` component.

When hovering a marker (with the cursor), an annotation indicator appears over the chart area. The indicator's visibility can be customized on either a track or marker level by using the `indicatorsDisplay` property:

- With the `auto` option, the default behaviour is applied - indicators appear on hover.
- The `always` option sets indicators to always be visible within the chart area, regardless of the hovering behavior.
- The `never` option sets indicators to never be visible.

**AnnotationsVisibility**

```tsx
import {
  HistogramAnnotations,
  HistogramAnnotationsMarkerProps,
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const histogramLoadBalancerEvents: HistogramAnnotationsMarkerProps[] = [
  {
    start: 0,
    title: 'Marked for termination',
    description: 'AuthenticationService',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color05.Default,
  },
  {
    start: 60,
    title: 'jQuery 2.1.1 was detected',
    description: 'weather dynatrace-dev',
    color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
  },
  {
    start: 90,
    end: 100,
    title: 'Elastic load balancer has a high failure rate',
    description: 'elb1',
    color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
  },
  {
    start: 120,
    title: 'Availability log pattern found',
    description: 'Host137-5689-7893',
    color: Colors.Charts.Loglevel.Notice.Default,
  },
  {
    start: 160,
    title: 'Synthetic monitor performance slowdown',
    description: 'Performance degraded, by 3%',
    color: Colors.Charts.Loglevel.Emergency.Default,
  },
  {
    start: 190,
    end: 200,
    title: 'Canary deployment',
    description: 'Deploying storybook app',
    color: Colors.Charts.Apdex.Fair.Default,
  },
  {
    start: 220,
    end: 230,
    title: 'Hardware failure',
    description: 'Host 1',
    color: Colors.Charts.CategoricalThemed.PurpleRain.Color03.Default,
  },
  {
    start: 270,
    title: 'Synthetic monitor performance',
    description: 'Increase by 10%',
    color: Colors.Charts.CategoricalThemed.Swamps.Color02.Default,
  },
  {
    start: 300,
    end: 310,
    title: 'Balancer Node added',
    description: 'Performance recovered to normal',
    color: Colors.Charts.Logstatus.Info.Default,
  },
];
const nightPriceDistribution: HistogramSeries[] = [
  {
    name: 'Price',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 75,
      },
      {
        from: 20,
        to: 30,
        value: 300,
      },
      {
        from: 30,
        to: 40,
        value: 450,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 870,
      },
      {
        from: 60,
        to: 70,
        value: 890,
      },
      {
        from: 70,
        to: 80,
        value: 480,
      },
      {
        from: 80,
        to: 90,
        value: 520,
      },
      {
        from: 90,
        to: 100,
        value: 850,
      },
      {
        from: 100,
        to: 110,
        value: 730,
      },
      {
        from: 110,
        to: 120,
        value: 630,
      },
      {
        from: 120,
        to: 130,
        value: 270,
      },
      {
        from: 130,
        to: 140,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 170,
        to: 180,
        value: 130,
      },
      {
        from: 180,
        to: 190,
        value: 430,
      },
      {
        from: 190,
        to: 200,
        value: 75,
      },
      {
        from: 200,
        to: 210,
        value: 89,
      },
      {
        from: 210,
        to: 220,
        value: 94,
      },
      {
        from: 220,
        to: 230,
        value: 63,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 60,
      },
      {
        from: 250,
        to: 260,
        value: 80,
      },
      {
        from: 260,
        to: 270,
        value: 70,
      },
      {
        from: 270,
        to: 280,
        value: 98,
      },
      {
        from: 280,
        to: 290,
        value: 89,
      },
      {
        from: 290,
        to: 300,
        value: 88,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 46,
      },
      {
        from: 320,
        to: 330,
        value: 55,
      },
    ],
  },
];

const AnnotationsVisibility = () => {
  return (
    <Flex gap={16} flexDirection="column">
      <HistogramChart data={nightPriceDistribution}>
        <HistogramChart.Legend hidden={true} />
        <HistogramChart.Annotations>
          <HistogramAnnotations.Track>
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[2]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[1]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[5]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[7]} />
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[8]} />
          </HistogramAnnotations.Track>
          {/* highlight-start */}
          <HistogramAnnotations.Track hidden>
            {histogramLoadBalancerEvents.map((marker, index) => (
              <HistogramAnnotations.Marker
                key={index}
                title={histogramLoadBalancerEvents[1].title}
                start={marker.start}
                end={marker.end}
              />
            ))}
          </HistogramAnnotations.Track>
          {/* highlight-end */}
        </HistogramChart.Annotations>
      </HistogramChart>

      <HistogramChart data={nightPriceDistribution} height={500}>
        <HistogramChart.Legend hidden={true} />
        <HistogramChart.Annotations>
          {/* highlight-start */}
          <HistogramAnnotations.Track indicatorsDisplay="always">
            <HistogramAnnotations.Marker {...histogramLoadBalancerEvents[3]} />
            <HistogramAnnotations.Marker
              {...histogramLoadBalancerEvents[6]}
              // highlight-next-line
              indicatorsDisplay="auto"
            />
            <HistogramAnnotations.Marker
              {...histogramLoadBalancerEvents[8]}
              // highlight-next-line
              indicatorsDisplay="never"
            />
          </HistogramAnnotations.Track>
          {/* highlight-end */}
        </HistogramChart.Annotations>
      </HistogramChart>
    </Flex>
  );
};
```

### Annotations tooltip

The Annotations supports both default and custom tooltips for annotations. This allows creators to provide additional detailed information about specific datapoints or events in the chart.

See [Annotations Tooltip](https://developer.dynatrace.com/design/data-visualizations/charts/AnnotationsChart.md#annotationscharttooltip) for details.
