## Usage

To display a Dot Series, add the `XYChart.DotSeries` subcomponent within the `XYChart` component.

This series requires four essential properties that will function as data accessors and identifier of the series:

- `x0Accessor`: indicates the X value of the data point within the X-domain.
- `y0Accessor`: indicates the Y value of the data point within the Y-domain.
- `name`: indicates the name of the series.
- `seriesIdAccessor`: specifies which data should be used as the unique identifier for each series. This identifier will be used to group data points belonging to the same series, allowing multiple series per slot.
- `nameAccessor`: indicates what data should be used as the name of the series.

These accessors support numerical, categorical and time data. When using the time data, a single accessor is enough for timestamps, but this series also supports timeframes. If using a timeframe, a second pair of accessors is needed in order to define the position of the point. In this case the series will position the data point in the average time of both end points of the timeframe.

- `x1Accessor`: indicates the X end point value for a data point timeframe.
- `y1Accessor`: indicates the Y end point value for a data point timeframe.

It's relevant to comment that these two accessors have no utility when using non-temporal data.

These accessors will extract the specified data from the provided object array via the `data` property. It’s crucial to note that the accessors are used to position the data points in the 2-dimensional space; incorrect specification of any accessor will result in an inability to generate the DotSeries correctly.

Additionally, a `XYChart.DotSeries` will need to be assigned to at least one x-axis and one y-axis via valid `xAxisId` and `yAxisId` properties. For a more detailed explanation of the axis configuration, please refer to the [XYChart docs](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md).

**DotSeriesSimple**

```tsx
import { formatDate as dateFormatter } from '@dynatrace-sdk/units';
import { XYChart } from '@dynatrace/strato-components/charts';

const stdData = [
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-03', ay: 0.2 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-07-01', ay: 26.95 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-05-28', ay: 24.32 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-16', ay: 8.54 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-11', ay: 28.9 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-10-10', ay: 22.83 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-11-05', ay: 18.86 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-22', ay: 10.31 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-08', ay: 3.02 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-01-25', ay: 13.15 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-11-28', ay: 13.82 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-01-30', ay: 4.64 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-21', ay: 8.79 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-06-21', ay: 14.51 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-17', ay: 1.28 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-16', ay: 19.09 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-05-07', ay: 0.48 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-01', ay: 29.26 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-02', ay: 24.89 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-08-25', ay: 15.31 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-06-12', ay: 2.56 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-09-13', ay: 14.35 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-29', ay: 30.39 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-24', ay: 4.99 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-13', ay: 3.94 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-11-03', ay: 0.65 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-12-28', ay: 2.18 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-08', ay: 26.53 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-12', ay: 4.88 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-02-27', ay: 0.81 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-08-18', ay: 23.75 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-10-03', ay: 1.98 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-06-20', ay: 1.78 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-06', ay: 19.37 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-30', ay: 21.54 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-08-15', ay: 5.94 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-21', ay: 0.4 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-05-10', ay: 23.11 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-03', ay: 25.52 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-24', ay: 9.02 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-18', ay: 15.84 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-10-24', ay: 24.78 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-04-30', ay: 14.44 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-24', ay: 15.79 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-07-04', ay: 29.9 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-11-08', ay: 5.72 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-29', ay: 23.95 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-27', ay: 24.48 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-11', ay: 24.19 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-11-30', ay: 11.56 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-06-30', ay: 20.78 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-28', ay: 17.3 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-10-09', ay: 18.39 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-04-14', ay: 21.23 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-23', ay: 10.92 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-03', ay: 22.38 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-09-18', ay: 9.61 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-15', ay: 7.76 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-06-16', ay: 30.69 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-10-24', ay: 11.52 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-13', ay: 21.07 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-01-06', ay: 11.22 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-08-15', ay: 8.07 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-11', ay: 6.26 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-09-28', ay: 12.15 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-03-06', ay: 23.11 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-10', ay: 21.48 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-25', ay: 25.23 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-29', ay: 11.45 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-12', ay: 0.94 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-12-13', ay: 22.94 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-07-16', ay: 6.3 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-02-17', ay: 12.33 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-06', ay: 30 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-05-24', ay: 18.75 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-06-14', ay: 14.59 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-09-30', ay: 6.58 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-09-01', ay: 13.87 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-07-01', ay: 19.88 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-05-10', ay: 9.53 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-08', ay: 5.2 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-07-02', ay: 25.38 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-08-30', ay: 27.5 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-08-03', ay: 7.32 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-08-06', ay: 2.25 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-23', ay: 5.84 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-03-18', ay: 21.25 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-10-20', ay: 15.42 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-09-07', ay: 6.67 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-09-14', ay: 13.2 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-24', ay: 19.06 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-05-19', ay: 12.88 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-04', ay: 3.11 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-08-20', ay: 11.24 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-06-16', ay: 1.1 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-14', ay: 17.94 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-08', ay: 8.89 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-03-27', ay: 1.57 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-10-20', ay: 13.05 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-11-30', ay: 19.71 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-03-04', ay: 11.74 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-10-31', ay: 5.59 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-10-21', ay: 3.9 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-09-12', ay: 2.21 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-06-08', ay: 5.46 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-02-06', ay: 20.59 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-06-25', ay: 21.75 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-03-16', ay: 19.7 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-12-21', ay: 24.5 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-11-05', ay: 14.61 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-01-09', ay: 0.17 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-03-14', ay: 21.4 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-06-26', ay: 3.3 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-12-15', ay: 16.24 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-07-20', ay: 17.75 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-12-16', ay: 30.2 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-05-22', ay: 4.93 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-01-27', ay: 17.36 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-12-07', ay: 17.3 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-10-01', ay: 7.18 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-01-02', ay: 23.13 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-06-02', ay: 10.81 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-05-24', ay: 16.12 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-04-26', ay: 21.02 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-07-11', ay: 10.44 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-10-14', ay: 24.31 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-09-03', ay: 29.17 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-01-31', ay: 11.31 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-06-01', ay: 6.63 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-05-20', ay: 1.7 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-08-24', ay: 15.34 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-04-20', ay: 14.09 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-12-13', ay: 10.81 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-06-11', ay: 1.44 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-04-13', ay: 5.86 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-03-14', ay: 13.73 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-01-02', ay: 5.74 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-01-06', ay: 23.98 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-08-14', ay: 15.3 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-08-24', ay: 0.07 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-01-28', ay: 19.55 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-04-24', ay: 9.13 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-06-14', ay: 4.72 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-04-05', ay: 0.11 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2022-03-04', ay: 14.57 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-12-05', ay: 15.99 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-11-09', ay: 21.72 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2020-04-27', ay: 14.72 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-06-14', ay: 0.53 },
  { seriesId: '3', seriesName: 'Third Series', ax: '2021-04-10', ay: 20.31 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-07-22', ay: 12.19 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-05-16', ay: 18.88 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-10-26', ay: 16.5 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-09-01', ay: 18.52 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-10-27', ay: 7.43 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-09-12', ay: 24.16 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-09-15', ay: 15.24 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-02-05', ay: 1.44 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-09-06', ay: 29.33 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-08-03', ay: 11.03 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-08-05', ay: 2.7 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-09-13', ay: 21.87 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-08-12', ay: 29.87 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-01-18', ay: 4.81 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-08-22', ay: 18.83 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-12-28', ay: 9.84 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-04-29', ay: 5.34 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-08-08', ay: 26.62 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-08-28', ay: 25.48 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-10-13', ay: 4.27 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-08-04', ay: 27.27 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-09-07', ay: 8.75 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-10-26', ay: 17.41 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-08-30', ay: 8.56 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-07-06', ay: 24.46 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-04-18', ay: 12.47 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-08-10', ay: 26.09 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-06-26', ay: 3.21 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-08-30', ay: 15.33 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-08-20', ay: 8.63 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-08-07', ay: 27.04 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-05-19', ay: 5.4 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-08-09', ay: 22.81 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-12-24', ay: 2.83 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-07-31', ay: 11.52 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-11-08', ay: 22.92 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-03-18', ay: 11.91 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-03-02', ay: 11.29 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-05-31', ay: 28.21 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-10-12', ay: 28.91 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-01-14', ay: 2.82 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-04-29', ay: 18.98 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-12-25', ay: 11.66 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-03-03', ay: 15.06 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-04-05', ay: 29.95 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2022-07-11', ay: 25.69 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-05-03', ay: 10.23 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-02-07', ay: 16.43 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2021-06-30', ay: 25.16 },
  { seriesId: '4', seriesName: 'Fourth Series', ax: '2020-12-01', ay: 30.98 },
];

const DotSeriesSimple = () => {
  return (
    <XYChart data={stdData}>
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="ax"
        y0Accessor="ay"
        nameAccessor="seriesName"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis
        id="x-axis"
        type="time"
        position="bottom"
        formatter={dateFormatter}
      />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

The `XYChart.DotSeries` subcomponent includes some other optional properties: `data`, `colorPalette`, `color` and `actions`.

The `data`, `colorPalette` and `color` properties can be used to overwrite the `XYChart` component for a specific series.

### Data

The data provided to the `DotSeries` component via the `data` property will be used in combination with the accessors of each series.

### Coloring

By using the `color` and `colorPalette` properties in the `DotSeries` you can overwrite the coloring from the `XYChart` component. These two properties are mutually exclusive. For more information about how to use coloring in the chart you can refer to the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

#### Color

The `color` property allows you to set any desired color as the color of the dots of a specific series.

**DotSeriesColor**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const stdData = [
  { seriesName: 'Red1 - original palette', x0: 33.46, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 27.01, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 10.54, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 1.88, y0: 'Tiger' },
  { seriesName: 'Red1 - original palette', x0: 35.91, y0: 'Fish' },
  { seriesName: 'Red1 - original palette', x0: 17.73, y0: 'Lion' },
  { seriesName: 'Red1 - original palette', x0: 16.48, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 4.38, y0: 'Lion' },
  { seriesName: 'Red1 - original palette', x0: 24.9, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 34.4, y0: 'Cat' },
  { seriesName: 'Red1 - original palette', x0: 2.21, y0: 'Fish' },
  { seriesName: 'Red1 - original palette', x0: 37.55, y0: 'Lion' },
  { seriesName: 'Red1 - original palette', x0: 20.55, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 30.58, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 30.09, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 0.26, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 17.43, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 43.97, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 14.95, y0: 'Bird' },
  { seriesName: 'Red1 - original palette', x0: 12.42, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 33.66, y0: 'Fish' },
  { seriesName: 'Red1 - original palette', x0: 16.36, y0: 'Tiger' },
  { seriesName: 'Red1 - original palette', x0: 37.18, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 20.74, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 42.5, y0: 'Crocodile' },
  { seriesName: 'Red1 - original palette', x0: 28.64, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 21.81, y0: 'Crocodile' },
  { seriesName: 'Red1 - original palette', x0: 31.16, y0: 'Bird' },
  { seriesName: 'Red1 - original palette', x0: 0.94, y0: 'Bird' },
  { seriesName: 'Red1 - original palette', x0: 40.35, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 39.12, y0: 'Elephant' },
  { seriesName: 'Red1 - original palette', x0: 6.89, y0: 'Bird' },
  { seriesName: 'Red1 - original palette', x0: 20.46, y0: 'Bird' },
  { seriesName: 'Red1 - original palette', x0: 22.54, y0: 'Fish' },
  { seriesName: 'Red1 - original palette', x0: 14.37, y0: 'Cat' },
  { seriesName: 'Red1 - original palette', x0: 21.81, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 30.02, y0: 'Lion' },
  { seriesName: 'Red1 - original palette', x0: 34.05, y0: 'Crocodile' },
  { seriesName: 'Red1 - original palette', x0: 43.38, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 10.32, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 15.94, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 22.34, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 27.73, y0: 'Giraffe' },
  { seriesName: 'Red1 - original palette', x0: 18.59, y0: 'Lion' },
  { seriesName: 'Red1 - original palette', x0: 37.19, y0: 'Lion' },
  { seriesName: 'Red1 - original palette', x0: 18.23, y0: 'Cat' },
  { seriesName: 'Red1 - original palette', x0: 36.79, y0: 'Dog' },
  { seriesName: 'Red1 - original palette', x0: 31.59, y0: 'Tiger' },
  { seriesName: 'Red1 - original palette', x0: 49.07, y0: 'Cat' },
  { seriesName: 'Red1 - original palette', x0: 43.8, y0: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 37.1, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 44.38, y1: 'Cat' },
  { seriesName: 'Red2 - original palette', x1: 0.53, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 47.28, y1: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 4.15, y1: 'Cat' },
  { seriesName: 'Red2 - original palette', x1: 40.07, y1: 'Crocodile' },
  { seriesName: 'Red2 - original palette', x1: 11.03, y1: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 24.4, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 9.5, y1: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 18.59, y1: 'Tiger' },
  { seriesName: 'Red2 - original palette', x1: 23.59, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 24.2, y1: 'Lion' },
  { seriesName: 'Red2 - original palette', x1: 43.71, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 23.2, y1: 'Lion' },
  { seriesName: 'Red2 - original palette', x1: 20.56, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 31.97, y1: 'Tiger' },
  { seriesName: 'Red2 - original palette', x1: 45.67, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 6.15, y1: 'Dog' },
  { seriesName: 'Red2 - original palette', x1: 13.47, y1: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 43.13, y1: 'Giraffe' },
  { seriesName: 'Red2 - original palette', x1: 47.9, y1: 'Dog' },
  { seriesName: 'Red2 - original palette', x1: 3.36, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 7.09, y1: 'Crocodile' },
  { seriesName: 'Red2 - original palette', x1: 2.17, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 36.44, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 29.05, y1: 'Tiger' },
  { seriesName: 'Red2 - original palette', x1: 26.15, y1: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 4.42, y1: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 45.89, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 29.4, y1: 'Elephant' },
  { seriesName: 'Red2 - original palette', x1: 36.59, y1: 'Tiger' },
  { seriesName: 'Red2 - original palette', x1: 6.48, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 25.48, y1: 'Crocodile' },
  { seriesName: 'Red2 - original palette', x1: 31.42, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 23.03, y1: 'Tiger' },
  { seriesName: 'Red2 - original palette', x1: 35.35, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 46.66, y1: 'Lion' },
  { seriesName: 'Red2 - original palette', x1: 31.77, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 4.65, y1: 'Crocodile' },
  { seriesName: 'Red2 - original palette', x1: 0.51, y1: 'Dog' },
  { seriesName: 'Red2 - original palette', x1: 29.63, y1: 'Lion' },
  { seriesName: 'Red2 - original palette', x1: 1.01, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 22.95, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 37.34, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 33.02, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 36.11, y1: 'Fish' },
  { seriesName: 'Red2 - original palette', x1: 32.34, y1: 'Cat' },
  { seriesName: 'Red2 - original palette', x1: 4.27, y1: 'Giraffe' },
  { seriesName: 'Red2 - original palette', x1: 24.16, y1: 'Bird' },
  { seriesName: 'Red2 - original palette', x1: 28.81, y1: 'Fish' },
  { seriesName: 'Green', x2: 46.73, y2: 'Cat' },
  { seriesName: 'Green', x2: 43.48, y2: 'Crocodile' },
  { seriesName: 'Green', x2: 29.29, y2: 'Fish' },
  { seriesName: 'Green', x2: 21.08, y2: 'Fish' },
  { seriesName: 'Green', x2: 12.38, y2: 'Dog' },
  { seriesName: 'Green', x2: 6.94, y2: 'Bird' },
  { seriesName: 'Green', x2: 32.35, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 26.2, y2: 'Dog' },
  { seriesName: 'Green', x2: 31.91, y2: 'Elephant' },
  { seriesName: 'Green', x2: 23.93, y2: 'Dog' },
  { seriesName: 'Green', x2: 3.16, y2: 'Cat' },
  { seriesName: 'Green', x2: 26.02, y2: 'Lion' },
  { seriesName: 'Green', x2: 35.53, y2: 'Fish' },
  { seriesName: 'Green', x2: 11.76, y2: 'Tiger' },
  { seriesName: 'Green', x2: 20.18, y2: 'Crocodile' },
  { seriesName: 'Green', x2: 19.56, y2: 'Cat' },
  { seriesName: 'Green', x2: 2.83, y2: 'Crocodile' },
  { seriesName: 'Green', x2: 18.47, y2: 'Tiger' },
  { seriesName: 'Green', x2: 9.27, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 10.07, y2: 'Lion' },
  { seriesName: 'Green', x2: 46.54, y2: 'Crocodile' },
  { seriesName: 'Green', x2: 44.92, y2: 'Cat' },
  { seriesName: 'Green', x2: 37.24, y2: 'Lion' },
  { seriesName: 'Green', x2: 5.29, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 28.29, y2: 'Elephant' },
  { seriesName: 'Green', x2: 37.62, y2: 'Bird' },
  { seriesName: 'Green', x2: 20.99, y2: 'Bird' },
  { seriesName: 'Green', x2: 38.16, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 45.6, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 33.39, y2: 'Bird' },
  { seriesName: 'Green', x2: 1.32, y2: 'Elephant' },
  { seriesName: 'Green', x2: 42.39, y2: 'Bird' },
  { seriesName: 'Green', x2: 35.9, y2: 'Elephant' },
  { seriesName: 'Green', x2: 34.02, y2: 'Tiger' },
  { seriesName: 'Green', x2: 39.59, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 34.91, y2: 'Bird' },
  { seriesName: 'Green', x2: 1.29, y2: 'Elephant' },
  { seriesName: 'Green', x2: 22.98, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 4.15, y2: 'Dog' },
  { seriesName: 'Green', x2: 43.96, y2: 'Crocodile' },
  { seriesName: 'Green', x2: 35.88, y2: 'Dog' },
  { seriesName: 'Green', x2: 3.33, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 4, y2: 'Lion' },
  { seriesName: 'Green', x2: 50.7, y2: 'Tiger' },
  { seriesName: 'Green', x2: 35, y2: 'Elephant' },
  { seriesName: 'Green', x2: 4.45, y2: 'Elephant' },
  { seriesName: 'Green', x2: 29.29, y2: 'Bird' },
  { seriesName: 'Green', x2: 36.22, y2: 'Giraffe' },
  { seriesName: 'Green', x2: 31.24, y2: 'Fish' },
  { seriesName: 'Green', x2: 29.87, y2: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 18.03, y3: 'Giraffe' },
  { seriesName: 'Red3 - original palette', x3: 44.66, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 49.61, y3: 'Tiger' },
  { seriesName: 'Red3 - original palette', x3: 29.21, y3: 'Giraffe' },
  { seriesName: 'Red3 - original palette', x3: 20.81, y3: 'Tiger' },
  { seriesName: 'Red3 - original palette', x3: 2.8, y3: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 14.6, y3: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 2.49, y3: 'Cat' },
  { seriesName: 'Red3 - original palette', x3: 32.92, y3: 'Bird' },
  { seriesName: 'Red3 - original palette', x3: 18.41, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 40.64, y3: 'Tiger' },
  { seriesName: 'Red3 - original palette', x3: 0.11, y3: 'Lion' },
  { seriesName: 'Red3 - original palette', x3: 22.44, y3: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 14.29, y3: 'Crocodile' },
  { seriesName: 'Red3 - original palette', x3: 33.44, y3: 'Cat' },
  { seriesName: 'Red3 - original palette', x3: 28.16, y3: 'Tiger' },
  { seriesName: 'Red3 - original palette', x3: 23.38, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 7.88, y3: 'Lion' },
  { seriesName: 'Red3 - original palette', x3: 5.9, y3: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 49.82, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 29.32, y3: 'Bird' },
  { seriesName: 'Red3 - original palette', x3: 36.22, y3: 'Lion' },
  { seriesName: 'Red3 - original palette', x3: 43.87, y3: 'Cat' },
  { seriesName: 'Red3 - original palette', x3: 47.16, y3: 'Bird' },
  { seriesName: 'Red3 - original palette', x3: 38.18, y3: 'Bird' },
  { seriesName: 'Red3 - original palette', x3: 10.63, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 33.51, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 5.9, y3: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 13.73, y3: 'Giraffe' },
  { seriesName: 'Red3 - original palette', x3: 50.89, y3: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 40.38, y3: 'Cat' },
  { seriesName: 'Red3 - original palette', x3: 44.39, y3: 'Dog' },
  { seriesName: 'Red3 - original palette', x3: 4.12, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 37.36, y3: 'Cat' },
  { seriesName: 'Red3 - original palette', x3: 41.05, y3: 'Dog' },
  { seriesName: 'Red3 - original palette', x3: 20.84, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 50.51, y3: 'Giraffe' },
  { seriesName: 'Red3 - original palette', x3: 0.9, y3: 'Lion' },
  { seriesName: 'Red3 - original palette', x3: 22.19, y3: 'Dog' },
  { seriesName: 'Red3 - original palette', x3: 21.84, y3: 'Dog' },
  { seriesName: 'Red3 - original palette', x3: 50.38, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 25.61, y3: 'Cat' },
  { seriesName: 'Red3 - original palette', x3: 14.53, y3: 'Cat' },
  { seriesName: 'Red3 - original palette', x3: 30.24, y3: 'Crocodile' },
  { seriesName: 'Red3 - original palette', x3: 12.02, y3: 'Crocodile' },
  { seriesName: 'Red3 - original palette', x3: 7.44, y3: 'Fish' },
  { seriesName: 'Red3 - original palette', x3: 32.46, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 49.37, y3: 'Lion' },
  { seriesName: 'Red3 - original palette', x3: 36.89, y3: 'Elephant' },
  { seriesName: 'Red3 - original palette', x3: 38.48, y3: 'Elephant' },
];

const DotSeriesColor = () => {
  return (
    <XYChart data={stdData} colorPalette="red">
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x1"
        y0Accessor="y1"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x2"
        y0Accessor="y2"
        nameAccessor="seriesName"
        // highlight-next-line
        color="#35d22a"
      />
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x3"
        y0Accessor="y3"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="categorical" position="left" />
    </XYChart>
  );
};
```

#### Color rules

`ColorRules` are advanced coloring tools for the chart, allowing you to apply conditional coloring based on data values. See more details in the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

### Shapes

The `shape` property on `DotSeries` allows you to display different geometric shapes for each data point in the series. In addition to the default `circle`, you can now choose between `square`, `diamond`, and `triangle` shapes.

**DotShapes**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';

const randomNumber = [
  { seriesName: 'Error', x0: 40, y0: 9 },
  { seriesName: 'Error', x0: 22, y0: 4 },
  { seriesName: 'Error', x0: 47, y0: 19 },
  { seriesName: 'Error', x0: 34, y0: 48 },
  { seriesName: 'Error', x0: 23, y0: 1 },
  { seriesName: 'Error', x0: 1, y0: 35 },
  { seriesName: 'Error', x0: 45, y0: 27 },
  { seriesName: 'Error', x0: 17, y0: 28 },
  { seriesName: 'Error', x0: 33, y0: 6 },
  { seriesName: 'Error', x0: 0, y0: 4 },
  { seriesName: 'Error', x0: 20, y0: 43 },
  { seriesName: 'Error', x0: 27, y0: 0 },
  { seriesName: 'Error', x0: 47, y0: 0 },
  { seriesName: 'Error', x0: 49, y0: 4 },
  { seriesName: 'Error', x0: 25, y0: 0 },
  { seriesName: 'Error', x0: 47, y0: 20 },
  { seriesName: 'Error', x0: 23, y0: 42 },
  { seriesName: 'Error', x0: 24, y0: 38 },
  { seriesName: 'Error', x0: 45, y0: 47 },
  { seriesName: 'Error', x0: 25, y0: 11 },
  { seriesName: 'Error', x0: 47, y0: 10 },
  { seriesName: 'Error', x0: 15, y0: 48 },
  { seriesName: 'Error', x0: 46, y0: 7 },
  { seriesName: 'Error', x0: 47, y0: 13 },
  { seriesName: 'Error', x0: 34, y0: 5 },
  { seriesName: 'Error', x0: 33, y0: 6 },
  { seriesName: 'Error', x0: 31, y0: 18 },
  { seriesName: 'Error', x0: 12, y0: 27 },
  { seriesName: 'Error', x0: 45, y0: 2 },
  { seriesName: 'Error', x0: 36, y0: 48 },
  { seriesName: 'Info', x1: 33, y1: 8 },
  { seriesName: 'Info', x1: 32, y1: 31 },
  { seriesName: 'Info', x1: 41, y1: 46 },
  { seriesName: 'Info', x1: 13, y1: 0 },
  { seriesName: 'Info', x1: 25, y1: 22 },
  { seriesName: 'Info', x1: 36, y1: 3 },
  { seriesName: 'Info', x1: 39, y1: 31 },
  { seriesName: 'Info', x1: 38, y1: 30 },
  { seriesName: 'Info', x1: 9, y1: 10 },
  { seriesName: 'Info', x1: 2, y1: 3 },
  { seriesName: 'Info', x1: 36, y1: 28 },
  { seriesName: 'Info', x1: 37, y1: 3 },
  { seriesName: 'Info', x1: 47, y1: 42 },
  { seriesName: 'Info', x1: 33, y1: 25 },
  { seriesName: 'Info', x1: 27, y1: 30 },
  { seriesName: 'Info', x1: 19, y1: 14 },
  { seriesName: 'Info', x1: 8, y1: 15 },
  { seriesName: 'Info', x1: 18, y1: 20 },
  { seriesName: 'Info', x1: 27, y1: 41 },
  { seriesName: 'Info', x1: 1, y1: 32 },
  { seriesName: 'Info', x1: 50, y1: 31 },
  { seriesName: 'Info', x1: 22, y1: 7 },
  { seriesName: 'Info', x1: 49, y1: 18 },
  { seriesName: 'Info', x1: 38, y1: 36 },
  { seriesName: 'Info', x1: 1, y1: 24 },
  { seriesName: 'Info', x1: 0, y1: 0 },
  { seriesName: 'Info', x1: 29, y1: 25 },
  { seriesName: 'Info', x1: 5, y1: 30 },
  { seriesName: 'Info', x1: 13, y1: 13 },
  { seriesName: 'Info', x1: 33, y1: 18 },
  { seriesName: 'Warning', x2: 37, y2: 43 },
  { seriesName: 'Warning', x2: 27, y2: 2 },
  { seriesName: 'Warning', x2: 45, y2: 43 },
  { seriesName: 'Warning', x2: 46, y2: 32 },
  { seriesName: 'Warning', x2: 45, y2: 42 },
  { seriesName: 'Warning', x2: 25, y2: 49 },
  { seriesName: 'Warning', x2: 15, y2: 15 },
  { seriesName: 'Warning', x2: 15, y2: 38 },
  { seriesName: 'Warning', x2: 30, y2: 40 },
  { seriesName: 'Warning', x2: 29, y2: 14 },
  { seriesName: 'Warning', x2: 1, y2: 0 },
  { seriesName: 'Warning', x2: 31, y2: 36 },
  { seriesName: 'Warning', x2: 27, y2: 21 },
  { seriesName: 'Warning', x2: 38, y2: 11 },
  { seriesName: 'Warning', x2: 23, y2: 37 },
  { seriesName: 'Warning', x2: 11, y2: 46 },
  { seriesName: 'Warning', x2: 2, y2: 20 },
  { seriesName: 'Warning', x2: 5, y2: 32 },
  { seriesName: 'Warning', x2: 2, y2: 5 },
  { seriesName: 'Warning', x2: 17, y2: 1 },
  { seriesName: 'Warning', x2: 20, y2: 47 },
  { seriesName: 'Warning', x2: 22, y2: 35 },
  { seriesName: 'Warning', x2: 0, y2: 4 },
  { seriesName: 'Warning', x2: 37, y2: 36 },
  { seriesName: 'Warning', x2: 44, y2: 37 },
  { seriesName: 'Warning', x2: 21, y2: 28 },
  { seriesName: 'Warning', x2: 37, y2: 38 },
  { seriesName: 'Warning', x2: 50, y2: 37 },
  { seriesName: 'Warning', x2: 28, y2: 2 },
  { seriesName: 'Warning', x2: 28, y2: 32 },
];

const DotShapes = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1em',
      }}
    >
      <Surface>
        <XYChart
          data={randomNumber}
          height="300px"
          colorPalette={{
            Error: '#be5d46',
            Info: '#6092c5',
            Warning: '#cdde42',
          }}
        >
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x0"
            y0Accessor="y0"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="diamond"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x1"
            y0Accessor="y1"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="diamond"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x2"
            y0Accessor="y2"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="diamond"
          />
          <XYChart.XAxis
            id="x-first-axis"
            type="numerical"
            position="bottom"
            hidden
          />
          <XYChart.YAxis
            id="y-first-axis"
            type="numerical"
            position="left"
            hidden
          />
        </XYChart>
      </Surface>
      <Surface>
        <XYChart
          height="300px"
          data={randomNumber}
          colorPalette={{
            Error: '#be5d46',
            Info: '#6092c5',
            Warning: '#cdde42',
          }}
        >
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x0"
            y0Accessor="y0"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="square"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x1"
            y0Accessor="y1"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="square"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x2"
            y0Accessor="y2"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="square"
          />
          <XYChart.XAxis
            id="x-first-axis"
            type="numerical"
            position="bottom"
            hidden
          />
          <XYChart.YAxis
            id="y-first-axis"
            type="numerical"
            position="left"
            hidden
          />
        </XYChart>
      </Surface>
      <Surface>
        <XYChart
          height="300px"
          data={randomNumber}
          colorPalette={{
            Error: '#be5d46',
            Info: '#6092c5',
            Warning: '#cdde42',
          }}
        >
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x0"
            y0Accessor="y0"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="triangle"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x1"
            y0Accessor="y1"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="triangle"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x2"
            y0Accessor="y2"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="triangle"
          />
          <XYChart.XAxis
            id="x-first-axis"
            type="numerical"
            position="bottom"
            hidden
          />
          <XYChart.YAxis
            id="y-first-axis"
            type="numerical"
            position="left"
            hidden
          />
        </XYChart>
      </Surface>
      <Surface>
        <XYChart
          height="300px"
          data={randomNumber}
          colorPalette={{
            Error: '#be5d46',
            Info: '#6092c5',
            Warning: '#cdde42',
          }}
        >
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x0"
            y0Accessor="y0"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="triangle"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x1"
            y0Accessor="y1"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="diamond"
          />
          <XYChart.DotSeries
            xAxisId="x-first-axis"
            yAxisId="y-first-axis"
            x0Accessor="x2"
            y0Accessor="y2"
            nameAccessor="seriesName"
            // highlight-next-line
            shape="square"
          />
          <XYChart.XAxis
            id="x-first-axis"
            type="numerical"
            position="bottom"
            hidden
          />
          <XYChart.YAxis
            id="y-first-axis"
            type="numerical"
            position="left"
            hidden
          />
        </XYChart>
      </Surface>
    </div>
  );
};
```

### Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `XYChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useMemo, useState } from 'react';

import {
  XYChart,
  ChartSeriesAction,
  XYChartDotSeriesActionItem,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { DatabaseIcon, MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const randomNumbersDates = [
  { seriesName: 'First Series', ax0: 13.12, ay0: '2022-03-04' },
  { seriesName: 'First Series', ax0: 21.32, ay0: '2022-07-15' },
  { seriesName: 'First Series', ax0: 28.23, ay0: '2022-01-04' },
  { seriesName: 'First Series', ax0: 9.46, ay0: '2022-02-07' },
  { seriesName: 'First Series', ax0: 21.12, ay0: '2022-08-19' },
  { seriesName: 'First Series', ax0: 0, ay0: '2022-04-17' },
  { seriesName: 'First Series', ax0: 46.5, ay0: '2022-03-20' },
  { seriesName: 'First Series', ax0: 43.97, ay0: '2022-05-09' },
  { seriesName: 'First Series', ax0: 19.65, ay0: '2022-07-25' },
  { seriesName: 'First Series', ax0: 30.01, ay0: '2022-03-05' },
  { seriesName: 'First Series', ax0: 16.62, ay0: '2022-07-26' },
  { seriesName: 'First Series', ax0: 42.95, ay0: '2022-03-08' },
  { seriesName: 'First Series', ax0: 30.46, ay0: '2022-05-31' },
  { seriesName: 'First Series', ax0: 33.21, ay0: '2022-03-02' },
  { seriesName: 'First Series', ax0: 27.52, ay0: '2022-06-10' },
  { seriesName: 'First Series', ax0: 20.74, ay0: '2022-01-19' },
  { seriesName: 'First Series', ax0: 44.99, ay0: '2022-08-21' },
  { seriesName: 'First Series', ax0: 26.78, ay0: '2022-04-13' },
  { seriesName: 'First Series', ax0: 45.54, ay0: '2022-01-27' },
  { seriesName: 'First Series', ax0: 48.02, ay0: '2022-04-11' },
  { seriesName: 'First Series', ax0: 19.8, ay0: '2022-01-06' },
  { seriesName: 'First Series', ax0: 19.91, ay0: '2022-04-25' },
  { seriesName: 'First Series', ax0: 37.8, ay0: '2022-04-29' },
  { seriesName: 'First Series', ax0: 22.16, ay0: '2022-06-09' },
  { seriesName: 'First Series', ax0: 25.13, ay0: '2022-01-27' },
  { seriesName: 'First Series', ax0: 14.27, ay0: '2022-03-07' },
  { seriesName: 'First Series', ax0: 15.57, ay0: '2022-02-11' },
  { seriesName: 'First Series', ax0: 38.61, ay0: '2022-07-17' },
  { seriesName: 'First Series', ax0: 35.94, ay0: '2022-03-30' },
  { seriesName: 'First Series', ax0: 33.98, ay0: '2022-04-14' },
  { seriesName: 'First Series', ax0: 10.09, ay0: '2022-02-25' },
  { seriesName: 'First Series', ax0: 8.53, ay0: '2022-01-04' },
  { seriesName: 'First Series', ax0: 18.3, ay0: '2022-04-24' },
  { seriesName: 'First Series', ax0: 0.06, ay0: '2022-03-15' },
  { seriesName: 'First Series', ax0: 15.11, ay0: '2022-02-13' },
  { seriesName: 'First Series', ax0: 25.09, ay0: '2022-05-15' },
  { seriesName: 'First Series', ax0: 1.14, ay0: '2022-05-18' },
  { seriesName: 'First Series', ax0: 23.13, ay0: '2022-06-27' },
  { seriesName: 'First Series', ax0: 9.59, ay0: '2022-07-14' },
  { seriesName: 'First Series', ax0: 23.49, ay0: '2022-04-30' },
  { seriesName: 'First Series', ax0: 47.36, ay0: '2022-07-15' },
  { seriesName: 'First Series', ax0: 19.79, ay0: '2022-05-16' },
  { seriesName: 'First Series', ax0: 46.32, ay0: '2022-02-19' },
  { seriesName: 'First Series', ax0: 48.86, ay0: '2022-08-01' },
  { seriesName: 'First Series', ax0: 1.27, ay0: '2022-07-25' },
  { seriesName: 'First Series', ax0: 21.53, ay0: '2022-07-08' },
  { seriesName: 'First Series', ax0: 49.65, ay0: '2022-08-01' },
  { seriesName: 'First Series', ax0: 31.27, ay0: '2022-05-12' },
  { seriesName: 'First Series', ax0: 2.72, ay0: '2022-06-03' },
  { seriesName: 'First Series', ax0: 14.84, ay0: '2022-03-17' },
  { seriesName: 'Second Series', ax1: 50.23, ay1: '2022-11-30' },
  { seriesName: 'Second Series', ax1: 43.62, ay1: '2022-05-30' },
  { seriesName: 'Second Series', ax1: 20.6, ay1: '2022-05-08' },
  { seriesName: 'Second Series', ax1: 25.71, ay1: '2022-07-03' },
  { seriesName: 'Second Series', ax1: 30.33, ay1: '2022-10-15' },
  { seriesName: 'Second Series', ax1: 43.55, ay1: '2022-10-05' },
  { seriesName: 'Second Series', ax1: 42.72, ay1: '2022-07-19' },
  { seriesName: 'Second Series', ax1: 49.01, ay1: '2022-03-01' },
  { seriesName: 'Second Series', ax1: 31.97, ay1: '2022-08-03' },
  { seriesName: 'Second Series', ax1: 21.9, ay1: '2022-08-09' },
  { seriesName: 'Second Series', ax1: 48.75, ay1: '2022-09-07' },
  { seriesName: 'Second Series', ax1: 33.23, ay1: '2022-09-12' },
  { seriesName: 'Second Series', ax1: 46.45, ay1: '2022-06-19' },
  { seriesName: 'Second Series', ax1: 37.05, ay1: '2022-02-04' },
  { seriesName: 'Second Series', ax1: 20.14, ay1: '2022-07-29' },
  { seriesName: 'Second Series', ax1: 26.92, ay1: '2022-04-12' },
  { seriesName: 'Second Series', ax1: 33.76, ay1: '2022-07-30' },
  { seriesName: 'Second Series', ax1: 26.29, ay1: '2022-10-07' },
  { seriesName: 'Second Series', ax1: 25.35, ay1: '2022-09-26' },
  { seriesName: 'Second Series', ax1: 25.61, ay1: '2022-05-27' },
  { seriesName: 'Second Series', ax1: 49.64, ay1: '2022-03-11' },
  { seriesName: 'Second Series', ax1: 23.99, ay1: '2022-02-03' },
  { seriesName: 'Second Series', ax1: 42.04, ay1: '2022-07-31' },
  { seriesName: 'Second Series', ax1: 36.51, ay1: '2022-02-04' },
  { seriesName: 'Second Series', ax1: 32.79, ay1: '2022-11-23' },
  { seriesName: 'Second Series', ax1: 48.01, ay1: '2022-06-03' },
  { seriesName: 'Second Series', ax1: 29.48, ay1: '2022-02-24' },
  { seriesName: 'Second Series', ax1: 20.5, ay1: '2022-12-05' },
  { seriesName: 'Second Series', ax1: 27.8, ay1: '2022-05-05' },
  { seriesName: 'Second Series', ax1: 39.29, ay1: '2022-02-25' },
  { seriesName: 'Second Series', ax1: 31.75, ay1: '2022-07-28' },
  { seriesName: 'Second Series', ax1: 38.51, ay1: '2022-08-12' },
  { seriesName: 'Second Series', ax1: 50.76, ay1: '2022-02-07' },
  { seriesName: 'Second Series', ax1: 33.95, ay1: '2022-02-21' },
  { seriesName: 'Second Series', ax1: 43.89, ay1: '2022-08-14' },
  { seriesName: 'Second Series', ax1: 20.93, ay1: '2022-11-13' },
  { seriesName: 'Second Series', ax1: 41.31, ay1: '2022-06-02' },
  { seriesName: 'Second Series', ax1: 37.65, ay1: '2022-04-10' },
  { seriesName: 'Second Series', ax1: 31.75, ay1: '2022-07-30' },
  { seriesName: 'Second Series', ax1: 37.47, ay1: '2022-11-12' },
  { seriesName: 'Second Series', ax1: 49.76, ay1: '2022-03-08' },
  { seriesName: 'Second Series', ax1: 20.34, ay1: '2022-07-24' },
  { seriesName: 'Second Series', ax1: 48.86, ay1: '2022-08-06' },
  { seriesName: 'Second Series', ax1: 23.53, ay1: '2022-09-01' },
  { seriesName: 'Second Series', ax1: 29.68, ay1: '2022-05-14' },
  { seriesName: 'Second Series', ax1: 22.41, ay1: '2022-08-13' },
  { seriesName: 'Second Series', ax1: 25.45, ay1: '2022-05-09' },
  { seriesName: 'Second Series', ax1: 45.01, ay1: '2022-04-06' },
  { seriesName: 'Second Series', ax1: 42.9, ay1: '2022-01-10' },
  { seriesName: 'Second Series', ax1: 25.35, ay1: '2022-08-25' },
];

const SeriesActions = () => {
  const [selectedCell, setSelectedCell] =
    useState<XYChartDotSeriesActionItem>();

  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];

  const data = useMemo(() => {
    if (selectedCell) {
      const { value, x0, y0, name, ...rest } = selectedCell;
      const tableData = [
        { key: 'x0', value: x0 },
        { key: 'y0', value: y0 },
        { key: 'name', value: name },
        { key: 'Rest', value: JSON.stringify(rest) },
      ];

      return [...tableData];
    }
    return [];
  }, [selectedCell]);

  return (
    <>
      <XYChart data={[]} colorPalette="categorical">
        <XYChart.DotSeries
          data={randomNumbersDates}
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="ax0"
          y0Accessor="ay0"
          nameAccessor="seriesName"
          // highlight-start
          actions={(selectedCell) => {
            return (
              <ChartSeriesAction>
                <ChartSeriesAction.Item
                  onSelect={() => {
                    setSelectedCell(selectedCell);
                  }}
                >
                  <ChartSeriesAction.ItemIcon>
                    <MagnifyingGlassIcon />
                  </ChartSeriesAction.ItemIcon>
                  Inspect this Dot datapoint
                </ChartSeriesAction.Item>
                <ChartSeriesAction.Intent
                  payload={{ 'dt.query': 'describe logs' }}
                  options={{
                    keyProperties: [],
                  }}
                >
                  Open with…
                </ChartSeriesAction.Intent>
              </ChartSeriesAction>
            );
          }}
          // highlight-end
        />
        <XYChart.DotSeries
          data={randomNumbersDates}
          color="green"
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="ax1"
          y0Accessor="ay1"
          nameAccessor="seriesName"
          // highlight-start
          actions={(selectedCell) => {
            return (
              <ChartSeriesAction>
                <ChartSeriesAction.Item
                  onSelect={() => {
                    setSelectedCell(selectedCell);
                  }}
                >
                  <ChartSeriesAction.ItemIcon>
                    <MagnifyingGlassIcon />
                  </ChartSeriesAction.ItemIcon>
                  Inspect this Dot datapoint
                </ChartSeriesAction.Item>

                <ChartSeriesAction.Item disabled onSelect={() => void 0}>
                  <ChartSeriesAction.ItemIcon>
                    <DatabaseIcon />
                  </ChartSeriesAction.ItemIcon>
                  A disabled action
                </ChartSeriesAction.Item>
              </ChartSeriesAction>
            );
          }}
          // highlight-end
        />
        <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-axis" type="time" position="left" />
      </XYChart>
      {selectedCell && (
        <>
          <h4>Selected Series: {selectedCell.name}</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```

**SeriesActionsAsync**

```tsx
import { useMemo, useState } from 'react';

import {
  XYChart,
  XYChartData,
  ChartSeriesAction,
  XYChartDotSeriesActionItem,
  type SeriesActionsTemplate,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon, DatabaseIcon } from '@dynatrace/strato-icons';

const xyChartData: XYChartData[] = [
  { seriesName: 'First Series', x: 1, y: 10, series: 'Series A' },
  { seriesName: 'First Series', x: 2, y: 15, series: 'Series A' },
  { seriesName: 'First Series', x: 3, y: 8, series: 'Series A' },
  { seriesName: 'First Series', x: 1, y: 12, series: 'Series B' },
  { seriesName: 'First Series', x: 2, y: 18, series: 'Series B' },
  { seriesName: 'First Series', x: 3, y: 14, series: 'Series B' },
];

const SeriesActionsAsync = () => {
  const [selectedCell, setSelectedCell] =
    useState<XYChartDotSeriesActionItem>();

  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];

  const data = useMemo(() => {
    if (selectedCell) {
      const { value, x0, y0, name, ...rest } = selectedCell;
      const tableData = [
        { key: 'x0', value: x0 },
        { key: 'y0', value: y0 },
        { key: 'name', value: name },
        { key: 'Rest', value: JSON.stringify(rest) },
      ];

      return [...tableData];
    }
    return [];
  }, [selectedCell]);

  const seriesActions = (selectedCell: XYChartDotSeriesActionItem) => {
    return (
      <ChartSeriesAction>
        <ChartSeriesAction.Item
          onSelect={() => {
            setSelectedCell(selectedCell);
          }}
        >
          <ChartSeriesAction.ItemIcon>
            <MagnifyingGlassIcon />
          </ChartSeriesAction.ItemIcon>
          Inspect this Dot datapoint (async)
        </ChartSeriesAction.Item>
        <ChartSeriesAction.Item disabled onSelect={() => void 0}>
          <ChartSeriesAction.ItemIcon>
            <DatabaseIcon />
          </ChartSeriesAction.ItemIcon>
          A disabled action
        </ChartSeriesAction.Item>
      </ChartSeriesAction>
    );
  };

  const handleSeriesActions = (
    selectedCell: XYChartDotSeriesActionItem,
  ): SeriesActionsTemplate => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(seriesActions(selectedCell));
      }, 500);
    });
  };

  return (
    <>
      <XYChart data={xyChartData} colorPalette="categorical">
        <XYChart.DotSeries
          data={xyChartData}
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="x"
          y0Accessor="y"
          nameAccessor="seriesName"
          // highlight-next-line
          actions={handleSeriesActions}
        />
        <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-axis" type="numerical" position="left" />
      </XYChart>
      {selectedCell && (
        <>
          <h4>Selected Series: {selectedCell.name}</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```

### Custom tooltip

Pass a render function as the `XYChart.Tooltip` slot children to take full control over what is displayed when a data point is hovered. The render function receives a payload object whose `dotPayload` key is set when a `DotSeries` point is active. `dotPayload` exposes:

- `seriesName` — the name of the hovered series.
- `color` — the resolved color of the series.
- `datapoint` — the original data record (with accessor values such as `x0`, `y0`, etc.).

Return any JSX to render a custom tooltip, `null` to hide it for a specific series, or `undefined` to fall back to the default tooltip. You can also set `hidden` on `XYChart.Tooltip` to suppress the tooltip entirely.

**Tooltip**

```tsx
import { formatDate as dateFormatter } from '@dynatrace-sdk/units';
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';

const stdData = [
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-03', ay: 0.2 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-07-01', ay: 26.95 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-05-28', ay: 24.32 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-16', ay: 8.54 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-11', ay: 28.9 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-10-10', ay: 22.83 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-11-05', ay: 18.86 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-22', ay: 10.31 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-08', ay: 3.02 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-01-25', ay: 13.15 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-11-28', ay: 13.82 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-01-30', ay: 4.64 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-21', ay: 8.79 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-06-21', ay: 14.51 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-17', ay: 1.28 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-16', ay: 19.09 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-05-07', ay: 0.48 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-01', ay: 29.26 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-02', ay: 24.89 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-08-25', ay: 15.31 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-06-12', ay: 2.56 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-09-13', ay: 14.35 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-29', ay: 30.39 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-24', ay: 4.99 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-13', ay: 3.94 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-11-03', ay: 0.65 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-12-28', ay: 2.18 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-08', ay: 26.53 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-12', ay: 4.88 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-02-27', ay: 0.81 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-08-18', ay: 23.75 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-10-03', ay: 1.98 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-06-20', ay: 1.78 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-06', ay: 19.37 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-30', ay: 21.54 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-08-15', ay: 5.94 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-09-21', ay: 0.4 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-05-10', ay: 23.11 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-03', ay: 25.52 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-12-24', ay: 9.02 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-18', ay: 15.84 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-10-24', ay: 24.78 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-04-30', ay: 14.44 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-03-24', ay: 15.79 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-07-04', ay: 29.9 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2020-11-08', ay: 5.72 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-09-29', ay: 23.95 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-27', ay: 24.48 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2022-05-11', ay: 24.19 },
  { seriesId: '1', seriesName: 'First Series ', ax: '2021-11-30', ay: 11.56 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-06-30', ay: 20.78 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-28', ay: 17.3 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-10-09', ay: 18.39 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-04-14', ay: 21.23 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-23', ay: 10.92 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-03', ay: 22.38 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-09-18', ay: 9.61 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-15', ay: 7.76 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-06-16', ay: 30.69 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-10-24', ay: 11.52 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-13', ay: 21.07 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-01-06', ay: 11.22 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-08-15', ay: 8.07 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-11', ay: 6.26 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-09-28', ay: 12.15 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-03-06', ay: 23.11 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-10', ay: 21.48 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-25', ay: 25.23 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-29', ay: 11.45 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-12', ay: 0.94 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-12-13', ay: 22.94 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-07-16', ay: 6.3 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-02-17', ay: 12.33 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-06', ay: 30 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-05-24', ay: 18.75 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-06-14', ay: 14.59 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-09-30', ay: 6.58 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-09-01', ay: 13.87 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-07-01', ay: 19.88 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-05-10', ay: 9.53 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-08', ay: 5.2 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-07-02', ay: 25.38 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-08-30', ay: 27.5 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-08-03', ay: 7.32 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-08-06', ay: 2.25 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-23', ay: 5.84 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-03-18', ay: 21.25 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-10-20', ay: 15.42 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-09-07', ay: 6.67 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-09-14', ay: 13.2 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-07-24', ay: 19.06 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-05-19', ay: 12.88 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-06-04', ay: 3.11 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-08-20', ay: 11.24 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-06-16', ay: 1.1 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2022-02-14', ay: 17.94 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-07-08', ay: 8.89 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-03-27', ay: 1.57 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2021-10-20', ay: 13.05 },
  { seriesId: '2', seriesName: 'Second Series', ax: '2020-11-30', ay: 19.71 },
];

const Tooltip = () => {
  return (
    <XYChart data={stdData}>
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (
            payload.dotPayload &&
            payload.dotPayload.seriesName === 'Second Series'
          ) {
            return (
              <>
                <ChartTooltip.SeriesItem
                  color={payload.dotPayload.color}
                  name={payload.dotPayload.seriesName}
                  value={String(payload.dotPayload.datapoint.y0)}
                />
                <section>
                  <p>
                    This is a custom tooltip for the{' '}
                    {payload.dotPayload.seriesName} made completely by text.
                  </p>
                  <p>
                    The X value for this specific point is{' '}
                    {String(payload.dotPayload.datapoint.x0)}
                    {', '}
                    and the Y value is {String(payload.dotPayload.datapoint.y0)}
                    .
                  </p>
                </section>
              </>
            );
          }
          return null;
        }}
      </XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="ax"
        y0Accessor="ay"
        nameAccessor="seriesName"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis
        id="x-axis"
        type="time"
        position="bottom"
        formatter={dateFormatter}
      />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data = [
  { x: 13.12, y: '2022-03-04', seriesId: '1', seriesName: 'Series 1' },
  { x: 21.32, y: '2022-07-15', seriesId: '1', seriesName: 'Series 1' },
  { x: 28.23, y: '2022-01-04', seriesId: '1', seriesName: 'Series 1' },
  { x: 9.46, y: '2022-02-07', seriesId: '1', seriesName: 'Series 1' },
  { x: 21.12, y: '2022-08-19', seriesId: '1', seriesName: 'Series 1' },
  { x: 46.5, y: '2022-03-20', seriesId: '2', seriesName: 'Series 2' },
  { x: 43.97, y: '2022-05-09', seriesId: '2', seriesName: 'Series 2' },
  { x: 19.65, y: '2022-07-25', seriesId: '2', seriesName: 'Series 2' },
  { x: 30.01, y: '2022-03-05', seriesId: '2', seriesName: 'Series 2' },
  { x: 16.62, y: '2022-07-26', seriesId: '2', seriesName: 'Series 2' },
];

const GlobalActions = () => {
  return (
    <XYChart data={data} height="300px" colorPalette="categorical">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (!payload.dotPayload) {
            return undefined;
          }
          return (
            <>
              <ChartTooltip.SeriesItem
                color={payload.dotPayload.color}
                name={payload.dotPayload.seriesName}
                value={String(payload.dotPayload.datapoint.x0)}
              />
              <ChartTooltip.Footer
                actions={[
                  <ChartTooltip.Action
                    key="inspect"
                    label="Inspect entity"
                    icon={<MagnifyingGlassIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                  <ChartTooltip.Action
                    key="open"
                    label="Open in Notebooks"
                    icon={<OpenWithIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                ]}
                unpinnedPlaceholderText={undefined}
              />
            </>
          );
        }}
      </XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x"
        y0Accessor="y"
        nameAccessor="seriesName"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="time" position="left" />
    </XYChart>
  );
};
```
