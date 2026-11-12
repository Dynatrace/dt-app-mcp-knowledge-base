The [state service](https://developer.dynatrace.com/develop/platform-services/services/state-service.md) is your best option if your app needs internal global states or user-specific states. One common usage is [caching the result](https://developer.dynatrace.com/develop/guides/data/cache-data-using-app-state.md) of an app function.

This guide explains how to create, update, and delete [app states](https://developer.dynatrace.com/develop/platform-services/services/state-service.md#app-states) and [user app states](https://developer.dynatrace.com/develop/platform-services/services/state-service.md#user-app-states). The `@dynatrace-sdk/react-hooks` package provides hooks so you can do all these operations.

When you run your app on your local development server, the states are confined to the local development's scope. So, you won't be in danger of overriding the deployed app's states during development.

States are persistent across updates of an app. So, you must migrate any states needed for a new app version in the app's code.
