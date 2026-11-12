## Get available analyzers

Before getting started, one of the main questions to answer is which data analyzers are available for you to use. To see the available analyzers, you have two options:

- Check out the `/analyzers` endpoint in the . It's the easiest way of accessing every option of the different endpoints.
- Use the Dynatrace data analyzers SDK in your app:

  ```ts testable
  import { analyzersClient } from '@dynatrace-sdk/client-davis-analyzers';

  const { analyzers, totalCount, nextPageKey } = await analyzersClient.queryAnalyzers({
    filter: "name contains 'statistic'",
    addFields: 'baseAnalyzer, type, input',
  });
  ```

  This operation requires the scope `davis:analyzers:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

Once you've chosen the analyzer that best fits your use case, you need to understand its requirements. The next section describes how to do that.
