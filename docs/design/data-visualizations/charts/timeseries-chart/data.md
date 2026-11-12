## Data

The `TimeseriesChart` expects a data structure composed of an array of `datapoints`, a `name` as a string or an array of strings (which will be displayed in the tooltip and the legend), and an optional `unit` as a string or Unit.

Each `datapoint` should contain the following attributes:

- start: the starting timestamp for the datapoint representation.
- value: A number represented in the datapoint. This can either be the absolute value or a relative value.
- end: An optional attribute that represents an ending timestamp for the datapoint representation.
- center: An optional attribute for that sits in the middle between start and end.

The time dimension can either be handled as a `timestamp` if only a start timestamp is given, or as a `timeframe` if both a start and an end timestamp are provided for the datapoint.

```typescript
[
  {
    name: ['pl1l-vh48.example.com', 'HYPERVISOR-CC7CFC844F787622'],
    unit: 'percent',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        value: 51,
      },
    ],
  },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/TimeseriesChart/props.md).
