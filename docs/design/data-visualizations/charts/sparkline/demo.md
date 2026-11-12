## Demo

The `Sparkline` component requires you to pass data of type `Timeseries` or `Timeseries[]` to the data prop. A `Timeseries` object has a `name`, an array of `TimeseriesDatapoint` and an optional `unit`. Each data point must have a numeric `value`, a `start`, and optional `center` and `end` dates. If you provide more than one series, only the first one is used.

```typescript
[
  {
    name: ['Query consumption'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Wed, 22 Mar 2022 12:00:00 UTC'),
        end: new Date('Wed, 22 Mar 2022 12:01:00 UTC'),
        value: 13434958,
      },
      {
        start: new Date('Thu, 22 Mar 2022 12:01:00 UTC'),
        end: new Date('Wed, 22 Mar 2022 12:02:00 UTC'),
        value: 129555269,
      },
      {
        start: new Date('Thu, 22 Mar 2022 12:02:00 UTC'),
        end: new Date('Wed, 22 Mar 2022 12:03:00 UTC'),
        value: 74177850,
      },
    ],
  },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/Sparkline/props.md).

You can further customise the `Sparkline` by setting its `color` prop to any of the Design System `ColorPalette`.

The `Sparkline` is able to show the default loading indicator setting the `loading` prop to `true`.

Lastly, x-axis ticks can be visualized on the `Sparkline` by using the `showTicks` prop. By default, these ticks are hidden.
