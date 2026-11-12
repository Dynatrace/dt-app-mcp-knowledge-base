## Error state

The `ErrorState` subcomponent is responsible for handling errors in a graceful manner, ultimately improving the overall user experience. Its primary function is to catch any errors that may occur with the data and display a fallback UI instead of crashing the entire application. The fallback UI occupies the full width and height of the chart, ensuring that users are still provided with a meaningful interface even in the presence of errors.

**DefaultError**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const DefaultError = () => {
  return (
    <TimeseriesChart data={mockTimeseriesCpuUsage}>
      <TimeseriesChart.YAxis
        formatter={() => {
          throw new Error('Here is the error.');
        }}
      />
    </TimeseriesChart>
  );
};
```

The `ErrorState` subcomponent offers a versatile feature that enables it to handle both default and custom error messages. You can provide a custom message through the `ErrorState` subcomponent, which will then override the default error message. This flexibility allows developers to tailor error messages to their specific needs and requirements, ensuring a more personalized and informative user experience. It is also possible to format messages using HTML and to incorporate the original thrown error within your custom error message.

**CustomError**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const CustomError = () => {
  return (
    <>
      <div>
        <h4>Custom message</h4>
        <TimeseriesChart data={mockTimeseriesCpuUsage}>
          <TimeseriesChart.YAxis
            formatter={() => {
              throw new Error('Here is the error.');
            }}
          />
          {/* highlight-start */}
          <TimeseriesChart.ErrorState>
            An error ocurred in the chart.
          </TimeseriesChart.ErrorState>
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Formatted custom message</h4>
        <TimeseriesChart data={mockTimeseriesCpuUsage}>
          <TimeseriesChart.YAxis
            formatter={() => {
              throw new Error('Here is the error.');
            }}
          />
          {/* highlight-start */}
          <TimeseriesChart.ErrorState>
            <span>
              An error ocurred in the <b>chart</b>.
            </span>
          </TimeseriesChart.ErrorState>
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Thrown error in custom message</h4>
        <TimeseriesChart data={mockTimeseriesCpuUsage}>
          <TimeseriesChart.YAxis
            formatter={() => {
              throw new Error('Here is the error.');
            }}
          />
          {/* highlight-start */}
          <TimeseriesChart.ErrorState>
            {(errorMessage) => (
              <span>An error ocurred in the chart: {errorMessage}.</span>
            )}
          </TimeseriesChart.ErrorState>
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
    </>
  );
};
```
