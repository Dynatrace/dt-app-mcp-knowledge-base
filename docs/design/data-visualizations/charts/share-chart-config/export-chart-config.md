## Export chart config

A chart's configuration can be exported at any time for various purposes, such as sharing the configuration with other applications [through an intent](https://dt-url.net/send-intents). The current configuration can be retrieved by creating and assigning a `ref` to the corresponding `ref` property of the chart, and then calling `ref.getConfig()` method.

> **Note**
>
> When the "getConfig" method is invoked, a snapshot of the serialized configuration is returned. As such, it will not change if the chart's configuration is subsequently modified. It is recommended to ensure that all configurations have been applied to the chart before calling this method.

> **Note**
>
> Annotations configured through a `Chart.Annotations` slot or the config provider are included in the exported configuration. Tooltip customization remains slot-only: any custom tooltip content set through `Chart.Annotations.Tooltip` is not included in the exported configuration, and importing a configuration never overrides a chart's own tooltip customization.

**ExportConfig**

```tsx
import { useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  XYChart,
  CategoricalBarChart,
  CategoricalBarChartData,
  CategoricalBarChartRef,
  DonutChart,
  HistogramChart,
  HistogramAnnotations,
  HoneycombChart,
  HoneycombChartRef,
  MeterBarChart,
  MultiMeterBarChart,
  PieChartRef,
  TimeseriesAnnotations,
  TimeseriesChart,
  TimeseriesChartRef,
  XYChartRef,
} from '@dynatrace/strato-components/charts';
import type {
  HistogramChartRef,
  HistogramSeries,
  MeterBarChartElementRef,
  Timeseries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Code, Heading } from '@dynatrace/strato-components/typography';

const apdex = {
  slices: [
    {
      category: 'Excellent',
      value: 35,
    },
    {
      category: 'Good',
      value: 21,
    },
    {
      category: 'Poor',
      value: 12,
    },
    {
      category: 'Unacceptable',
      value: 10,
    },
    {
      category: 'Fair',
      value: 8,
    },
  ],
};
const conversions = [
  {
    category: 'EMEA',
    value: 66,
  },
  {
    category: 'APAC',
    value: 25,
  },
  {
    category: 'LATAM',
    value: 33,
  },
  {
    category: 'NA',
    value: 5,
  },
];
const cpuUsage: Timeseries[] = [
  {
    name: ['pl1l-vh48.example.com', 'HYPERVISOR-CC7CFC844F787622'],
    unit: 'percent',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        value: 51,
      },
      {
        start: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        value: 49.29,
      },
      {
        start: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        value: 51.98,
      },
      {
        start: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        value: 40.14,
      },
      {
        start: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        end: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        value: 46.71,
      },
      {
        start: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        end: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        value: 33.81,
      },
      {
        start: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        value: 41.57,
      },
      {
        start: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        value: 40.33,
      },
      {
        start: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        end: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        value: 43.63,
      },
      {
        start: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        end: new Date('Tue, 07 Jun 2022 12:28:00 UTC'),
        value: 44.81,
      },
    ],
  },
  {
    name: ['pl1l-vh93.example.com', 'HYPERVISOR-610F030E04740015'],
    unit: 'percent',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        value: 23.2,
      },
      {
        start: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        value: 25.54,
      },
      {
        start: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        value: 21.88,
      },
      {
        start: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        value: 24.62,
      },
      {
        start: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        end: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        value: 40,
      },
      {
        start: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        end: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        value: 42.99,
      },
      {
        start: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        value: 33.4,
      },
      {
        start: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        value: 12.15,
      },
      {
        start: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        end: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        value: 23,
      },
      {
        start: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        end: new Date('Tue, 07 Jun 2022 12:28:00 UTC'),
        value: 35.65,
      },
    ],
  },
  {
    name: ['pl1i-vh41.example.com', 'HYPERVISOR-CC7EFC844F606622'],
    unit: 'percent',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        value: 36.84,
      },
      {
        start: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        value: 31.77,
      },
      {
        start: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        value: 79.15,
      },
      {
        start: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        value: 2.1,
      },
      {
        start: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        end: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        value: 2.68,
      },
      {
        start: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        end: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        value: 1.18,
      },
      {
        start: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        value: 77.79,
      },
      {
        start: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        value: 1.56,
      },
      {
        start: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        end: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        value: 69.07,
      },
      {
        start: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        end: new Date('Tue, 07 Jun 2022 12:28:00 UTC'),
        value: 66.87,
      },
    ],
  },
];
const responseTimeDistribution: HistogramSeries[] = [
  {
    name: 'Response time',
    bins: [
      { from: 0, to: 100, value: 12 },
      { from: 100, to: 200, value: 28 },
      { from: 200, to: 300, value: 15 },
      { from: 300, to: 400, value: 6 },
    ],
  },
];
const investment: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000, HR: 20000, Sales: 520000, Support: 380000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000, HR: 37000, Sales: 510000, Support: 427000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000, HR: 45000, Sales: 540000, Support: 489300 },
    unit: '$',
  },
];
const notificationLevel = [
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
  { value: 10958, name: 'Alert' },
  { value: 7095, name: 'Error' },
  { value: 6935, name: 'Emergency' },
  { value: 1273, name: 'None' },
  { value: 2368, name: 'Warning' },
  { value: 10321, name: 'Alert' },
  { value: 3638, name: 'Notice' },
  { value: 6057, name: 'None' },
  { value: 9876, name: 'Error' },
  { value: 10351, name: 'Debug' },
  { value: 6523, name: 'Critical' },
  { value: 4488, name: 'Error' },
  { value: 4888, name: 'Error' },
  { value: 4574, name: 'Critical' },
  { value: 6862, name: 'Debug' },
  { value: 2415, name: 'None' },
  { value: 7899, name: 'Severe' },
  { value: 10818, name: 'Debug' },
  { value: 3216, name: 'Severe' },
  { value: 6535, name: 'Info' },
  { value: 4262, name: 'Notice' },
  { value: 4110, name: 'Warning' },
  { value: 9629, name: 'Alert' },
  { value: 8165, name: 'Critical' },
  { value: 4305, name: 'None' },
  { value: 3980, name: 'Emergency' },
  { value: 1742, name: 'Info' },
  { value: 1038, name: 'Emergency' },
  { value: 4228, name: 'Debug' },
  { value: 5226, name: 'Alert' },
  { value: 4695, name: 'Notice' },
  { value: 9222, name: 'None' },
  { value: 9397, name: 'Debug' },
  { value: 5282, name: 'Emergency' },
  { value: 5290, name: 'Alert' },
  { value: 10450, name: 'Debug' },
  { value: 6656, name: 'Alert' },
  { value: 2180, name: 'Debug' },
  { value: 5759, name: 'Warning' },
  { value: 3617, name: 'Emergency' },
  { value: 7505, name: 'Critical' },
  { value: 3028, name: 'Warning' },
  { value: 3763, name: 'Debug' },
  { value: 3687, name: 'Severe' },
  { value: 10877, name: 'Critical' },
  { value: 7826, name: 'Error' },
  { value: 7651, name: 'Info' },
  { value: 5178, name: 'Debug' },
  { value: 1522, name: 'Alert' },
  { value: 8420, name: 'Info' },
  { value: 8217, name: 'Emergency' },
  { value: 8426, name: 'Notice' },
  { value: 3919, name: 'Error' },
  { value: 5021, name: 'Info' },
  { value: 2616, name: 'Info' },
  { value: 8516, name: 'Emergency' },
  { value: 8313, name: 'None' },
  { value: 1772, name: 'Warning' },
  { value: 4686, name: 'None' },
  { value: 1664, name: 'Info' },
  { value: 4993, name: 'Alert' },
  { value: 10466, name: 'Severe' },
  { value: 5682, name: 'Debug' },
  { value: 1767, name: 'Notice' },
];
const categoricalDataset = [
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 'Error',
  },

  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 'Info',
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 'Warning',
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 'Warning',
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 'Error',
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 'Error',
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 'Warning',
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 'Info',
  },
];

const ConfigViewer = ({ serializedConfig }: { serializedConfig: string }) => {
  return (
    serializedConfig && (
      <>
        <Heading level={5}>Output config:</Heading>
        <Code>{serializedConfig}</Code>
      </>
    )
  );
};

const ExportConfig = () => {
  const categoricalRef = useRef<CategoricalBarChartRef>(null);
  const timeseriesChartRef = useRef<TimeseriesChartRef>(null);
  const histogramChartRef = useRef<HistogramChartRef>(null);
  const donutChartRef = useRef<PieChartRef>(null);
  const meterBarChartRef = useRef<MeterBarChartElementRef>(null);
  const honeycombBarChartRef = useRef<HoneycombChartRef>(null);
  const xYChartRef = useRef<XYChartRef>(null);
  const [categoricalConfig, setCategoricalConfig] = useState<string>('');
  const [timeseriesChartConfig, setTimeseriesChartConfig] =
    useState<string>('');
  const [histogramChartConfig, setHistogramChartConfig] = useState<string>('');
  const [donutChartConfig, setDonutChartConfig] = useState<string>('');
  const [meterBarChartConfig, setMeterBarChartConfig] = useState<string>('');
  const [honeycombChartConfig, setHoneycombChartConfig] = useState<string>('');
  const [xYChartConfig, setxYChartConfig] = useState<string>('');

  function handleShowConfig() {
    setCategoricalConfig(categoricalRef.current?.getConfig() ?? '');
    setTimeseriesChartConfig(timeseriesChartRef.current?.getConfig() ?? '');
    // highlight-next-line
    setHistogramChartConfig(histogramChartRef.current?.getConfig() ?? '');
    setDonutChartConfig(donutChartRef.current?.getConfig() ?? '');
    setMeterBarChartConfig(meterBarChartRef.current?.getConfig() ?? '');
    setHoneycombChartConfig(honeycombBarChartRef.current?.getConfig() ?? '');
    // highlight-next-line
    setxYChartConfig(xYChartRef.current?.getConfig() ?? '');
  }

  function handleHideConfig() {
    setCategoricalConfig('');
    setTimeseriesChartConfig('');
    setHistogramChartConfig('');
    setDonutChartConfig('');
    setMeterBarChartConfig('');
    setHoneycombChartConfig('');
    setxYChartConfig('');
  }

  return (
    <Flex gap={8} flexDirection="column">
      {categoricalConfig ? (
        <Button onClick={handleHideConfig} variant="emphasized">
          Hide charts config
        </Button>
      ) : (
        <Button onClick={handleShowConfig} variant="emphasized">
          Show charts config
        </Button>
      )}

      <CategoricalBarChart ref={categoricalRef} data={investment}>
        <CategoricalBarChart.ValueAxis label="Response time" />
      </CategoricalBarChart>
      <ConfigViewer serializedConfig={categoricalConfig} />

      <TimeseriesChart ref={timeseriesChartRef} data={cpuUsage}>
        {/* highlight-start */}
        <TimeseriesChart.Annotations>
          <TimeseriesAnnotations.Track label="Deployments">
            <TimeseriesAnnotations.Marker
              id="deploy-1"
              start={new Date('Tue, 12 Apr 2022 12:19:00 UTC')}
              title="v2.3.0 release"
            />
          </TimeseriesAnnotations.Track>
        </TimeseriesChart.Annotations>
        {/* highlight-end */}
      </TimeseriesChart>
      <ConfigViewer serializedConfig={timeseriesChartConfig} />

      <HistogramChart
        // highlight-next-line
        ref={histogramChartRef}
        data={responseTimeDistribution}
      >
        {/* highlight-start */}
        <HistogramChart.Annotations>
          <HistogramAnnotations.Track label="Threshold breaches">
            <HistogramAnnotations.Marker id="breach-1" start={250} />
          </HistogramAnnotations.Track>
        </HistogramChart.Annotations>
        {/* highlight-end */}
      </HistogramChart>
      <ConfigViewer serializedConfig={histogramChartConfig} />

      <DonutChart
        ref={donutChartRef}
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      />
      <ConfigViewer serializedConfig={donutChartConfig} />

      <MeterBarChart ref={meterBarChartRef} value={10}>
        <MeterBarChart.Min>0</MeterBarChart.Min>
        <MeterBarChart.Max>100</MeterBarChart.Max>
      </MeterBarChart>
      <MultiMeterBarChart>
        <MultiMeterBarChart.Min>0</MultiMeterBarChart.Min>
        <MultiMeterBarChart.Max>200</MultiMeterBarChart.Max>
        {apdex.slices.map(({ value, category }, index) => (
          <MultiMeterBarChart.Segment
            key={`${category}-${index}`}
            value={value}
            name={category}
          />
        ))}
      </MultiMeterBarChart>
      <ConfigViewer serializedConfig={meterBarChartConfig} />

      <HoneycombChart
        data={notificationLevel}
        ref={honeycombBarChartRef}
        colorScheme="swamps"
      >
        <HoneycombChart.Legend position="auto" />
      </HoneycombChart>
      <ConfigViewer serializedConfig={honeycombChartConfig} />

      <XYChart
        data={categoricalDataset}
        colorPalette="categorical"
        // highlight-next-line
        ref={xYChartRef}
      >
        <XYChart.RectSeries
          xAxisId="x-first-axis"
          yAxisId="y-first-axis"
          x0Accessor="amountRange.start"
          x1Accessor="amountRange.end"
          y0Accessor="peopleRange.start"
          y1Accessor="peopleRange.end"
          valueAccessor="events"
        />
        <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
      </XYChart>

      <ConfigViewer serializedConfig={xYChartConfig} />
    </Flex>
  );
};
```
