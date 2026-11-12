## Limitations

You can't configure the [connect-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src) directive for your app. That means you can't fetch resources from external domains. To do so, create an [app function](https://developer.dynatrace.com/develop/guides/app-functions.md) and fetch external data. To learn more, read the [How to create an app function](https://developer.dynatrace.com/develop/guides/app-functions/create-consume.md) guide.

> **Note**
>
> The [unsafe-eval](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#wasm-unsafe-eval) directive is forbidden for all CSP rule exceptions.
