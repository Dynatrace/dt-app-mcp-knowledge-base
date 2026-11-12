## Reference

### App settings are always environment-wide

Every object the schema stores applies to the whole environment. App settings have no scope parameter and no per-entity variant. None of the `client-app-settings-v2` operations take a scope, so there's nothing scope-related to handle in the form.

Your widget is also only ever reached at the environment scope. The **Apps** category in Settings appears only there, not when an entity such as a host is selected. A user can't open your widget against a narrower scope, so there's no cross-scope case to guard against. Entity-scoped configuration belongs to Dynatrace's own built-in settings schemas, which apps can't define.

### Owner-based access control

If the schema sets `ownerBasedAccessControl` to `true`, the user who first stores an object becomes its owner and, by default, is the only one who can read or write it. Objects the current user can't access don't appear in the response at all, which matters when the form lists multiple objects. To transfer ownership or grant access to other users and groups, see [Owner-based access control](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#owner-based-access-control).

### Get ready for production

The schema ships inside the app artifact and is registered automatically when the app is installed. Each app version carries a matching schema version—to ship a schema change, bump the app version in `app.config.json`.

During local development, the schema isn't registered yet, so reading or writing settings fails. Mock the values locally instead. For more information, see [Local development](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#local-development).

Schemas with `IN_DEVELOPMENT` maturity are hidden from the Settings menu while you build, but your app can still read and write their objects. To make the widget visible to users, promote the schema to `EARLY_ADOPTER` or `GENERAL_AVAILABILITY`. See [Schema maturity](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#schema-maturity).
