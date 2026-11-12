## Runtime limitations

The following restrictions currently apply to functions:

- Function execution times out after 120 seconds.
- Functions can't call functions of other apps.
- Functions can't call the [function executor](https://developer.dynatrace.com/develop/platform-services/services/app-engine.md#function-executor) API.
- Functions are deployed in an environment with 256 MB of RAM.
- Functions can't send binary responses.
- Function inputs and outputs can't be larger than 5 MB, respectively.
- There's a limit on concurrent requests you can make to app functions. You'll get the **429 Too Many Requests** HTTP response status code when you reach the limit.
- Calls to external hosts need to be explicitly allowed. See how to [allow outbound connections](https://developer.dynatrace.com/develop/guides/app-functions/allow-outbound-connections.md).
- You can't use WebSocket API in app functions. See the [available APIs](#web-apis).
