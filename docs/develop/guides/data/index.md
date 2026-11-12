Dynatrace provides different types of storage for different types of data. On this page, you'll see when to use which storage when working with Dynatrace Apps.

Following is the list of Dynatrace storage:

- **Observability data**: To store observability data, use [Grail](https://docs.dynatrace.com/docs/shortlink/dynatrace-grail). Grail is a unified storage for logs, metrics, traces, events, etc. You can retrieve the data using [Dynatrace Query Language](https://docs.dynatrace.com/docs/shortlink/dql-dynatrace-query-language-hub). You can also [ingest](https://developer.dynatrace.com/develop/guides/data/ingest-data.md) observability data from within our apps.
- **App state**: You might want to persist the state of your app across many sessions. You can do that using app state. The app state allows you to store user-specific states using user app states. To learn more, visit [Store app and user states](https://developer.dynatrace.com/develop/guides/data/store-app-user-state.md).
- **User-generated content**: If you want to persist user-generated content in your app, you can use document storage. To learn more, visit [Store user-generated data](https://developer.dynatrace.com/develop/guides/data/store-user-generated-data.md).
- **Settings**: If you want to allow your app to be configurable by the environment administrator, you can use settings storage. You can also store secrets in settings. There are two SDKs available depending on your use case:
  - [Store app settings](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md) — manage settings whose schemas are defined and bundled with your app.
  - [Store Dynatrace settings](https://developer.dynatrace.com/develop/guides/data/store-dynatrace-settings.md) — read and manage any Dynatrace settings, including App Settings and built-in settings. We recommend using this Settings SDK over the Environment v2 SDK for new apps you develop.

> **Note**
>
> Dynatrace also provides a specific [credential storage](https://developer.dynatrace.com/develop/guides/security/manage-secrets.md). It's helpful if you want to sync your credentials with an external vault. If not, you should use Settings to store your secrets.

- [Access external APIs](https://developer.dynatrace.com/develop/guides/data/access-external-apis.md): Create app functions, query data from third-party APIs, and use the data in your app.
- [Build a settings form for your app](https://developer.dynatrace.com/develop/guides/data/build-app-settings-widget.md): Build a reusable form for your app's settings schema, connect it to the app settings SDK, and expose it in both your app and Settings.
- [Cache data using app state](https://developer.dynatrace.com/develop/guides/data/cache-data-using-app-state.md): Use the app state to cache data from external systems.
- [Ingest data](https://developer.dynatrace.com/develop/guides/data/ingest-data.md): Ingest observability data such as metrics, logs, and events within your app into Dynatrace.
- [Store app settings](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md): Create a settings schema and store settings for your app.
- [Store app and user states](https://developer.dynatrace.com/develop/guides/data/store-app-user-state.md): Create, update, and delete app and user app states.
- [Store static data in Grail](https://developer.dynatrace.com/develop/guides/data/store-static-data-in-grail.md): This how-to guide explains how you can store static data in Grail and query and combine it with other data.
- [Store user-generated data](https://developer.dynatrace.com/develop/guides/data/store-user-generated-data.md): Save user-generated data so it's available across several user sessions.
- [Store Dynatrace settings](https://developer.dynatrace.com/develop/guides/data/store-dynatrace-settings.md): Read and manage Dynatrace settings objects for environments and entities.
