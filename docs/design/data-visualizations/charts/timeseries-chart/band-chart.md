## Band chart

A time series based band chart, also known as a prediction band chart or a confidence band chart, is a type of chart geometry that is commonly used in time series analysis and forecasting. The chart is designed to visualize and understand the uncertainty surrounding a predicted value based on historical data, or fluctuations of a value in a given time period (i.e. `min` & `max`).

A median line chart (displaying the `average`) together with a band chart (displaying `min` & `max` values) is useful for better understanding the context around a given metric value. The band chart helps to visualize the range and/or level of uncertainty because it helps to visualize the trend of the data and the level of uncertainty around a given metric or trend. In forecasting usecases comparing the current value of the data to the prediction band, it is possible to identify whether or not the data is following the expected trend or deviating from it.

In terms of data structure, time series charts typically display a single value for each point in time, whereas band charts, also known as confidence interval charts, display a range of values by plotting two lines: one for the minimum value ('lower band', `y0`) and one for the maximum value (upper band, `y1`).

### Basic usage

The band is defined as a subcomponent within the time series chart by using the `TimeseriesChart.Band` sub-component. See below, for the most simple example of a band chart.

**MinimalBandChart**

```tsx
import { mockTimeseriesTemperatureRange } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const MinimalBandChart = () => {
  return (
    <TimeseriesChart>
      {/* highlight-next-line */}
      <TimeseriesChart.Band data={mockTimeseriesTemperatureRange} />
    </TimeseriesChart>
  );
};
```

### Equal values

When the `y0` and `y1` values in the dataset are equal a line is rendered instead of a band.

**SimpleBandWithOverlap**

```tsx
import { mockTimeseriesTemperatureRangeWithOverlap } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const SimpleBandWithOverlap = () => {
  return (
    <TimeseriesChart>
      <TimeseriesChart.Band data={mockTimeseriesTemperatureRangeWithOverlap} />
    </TimeseriesChart>
  );
};
```

### Gaps in the data

As the band chart is an extension of the time series chart, the same gap policies apply to it (see above).

**SimpleBandWithGaps**

```tsx
import { mockTimeseriesTemperatureRangeWithGaps } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const SimpleBandWithGaps = () => {
  return (
    <TimeseriesChart gapPolicy="gap">
      {/* highlight-next-line */}
      <TimeseriesChart.Band data={mockTimeseriesTemperatureRangeWithGaps} />
    </TimeseriesChart>
  );
};
```

### Multiple bands

Multiple bands can be rendered in the same chart and combined with other geometries. A common use case is rendering a band chart (showing `min` & `max`) together with a `Timeseries.Line` (showing the `average`).

**MultipleBands**

```tsx
import {
  mockTimeseriesTemperatureMedian,
  mockTimeseriesTemperaturePredictionRange,
  mockTimeseriesTemperatureRange,
} from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const MultipleBands = () => {
  return (
    <TimeseriesChart data={mockTimeseriesTemperatureMedian} variant="line">
      {/* highlight-start */}
      <TimeseriesChart.Band data={mockTimeseriesTemperatureRange} />
      <TimeseriesChart.Band data={mockTimeseriesTemperaturePredictionRange} />
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```
