### Disputed borders and disabled state

The `MapView` component, when used in the Dynatrace infrastructure, supports rendering of disputed borders. Read permissions should be set for fetching disputed borders and map’s disabled state, there is more information about [permission scopes](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md). Depending on country code provided in the tenant configurations, relevant disputed borders (if any) for that country will be rendered, if not the default map will be shown.

The `MapView` component has an automatic disabled state. When set the respective setting is configured in the client environment, the `MapView` component will display a predefined message about the disabled state instead of the map.
