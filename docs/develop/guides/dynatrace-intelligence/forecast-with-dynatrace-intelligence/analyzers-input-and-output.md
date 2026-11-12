## Analyzers input and output

All Dynatrace data analyzers have a basic set of input parameters, like `timeframe` or `logVerbosity`. Additionally, each analyzer needs a specific set of input parameters unique to that analyzer. There are a couple ways to get this information:

- Using the .
- Use the SDK to get the analyzer definition:

  ```ts skip-testing
  const analyzer = await analyzersClient.getAnalyzer({
    analyzerName: 'dt.statistics.GenericForecastAnalyzer',
  });
  ```

  This operation requires the scope `davis:analyzers:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

The output of each analyzer can be very different as well. You need to query the analyzer definition using one of the two methods above to get the output definition.
