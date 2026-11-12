### 4. Visualize result

The data structure of the DQL result is incompatible with the charting components out of the box. That's why Strato provides the `convertToTimeseries` function, which makes the result compatible with the `TimeseriesChart` component. Add the following snippet in the return statement to visualize the data. Make sure the chart renders only if the result variable is defined.

```tsx skip-testing
{
  result?.data && <TimeseriesChart variant="bar" data={convertToTimeseries(result.data.records, result.data.types)} />;
}
```

The `convertToTimeseries` function takes two parameters: the records from the DQL result and the field types. Once converted into a time series, you can use the result to render the `TimeseriesChart`.
