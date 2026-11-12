## Prerequisites

> **Tip**
>
> This how-to requires an existing app settings schema. To learn how schemas work, see [Store app settings](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md).

The form in this guide edits a single property, `url`, so the examples use a matching single-property schema. Save this as `settings/schemas/my-example.schema.json`:

```json title="settings/schemas/my-example.schema.json"
{
  "$schema": "https://developer.dynatrace.com/docs-assets/schema_strict_apps.json",
  "dynatrace": "1",
  "schemaId": "my-example",
  "version": "1.0.0",
  "displayName": "Messaging service connection",
  "description": "",
  "multiObject": false,
  "maturity": "GENERAL_AVAILABILITY",
  "ownerBasedAccessControl": false,
  "properties": {
    "url": {
      "displayName": "URL",
      "description": "The URL of the messaging service",
      "type": "text",
      "default": "",
      "nullable": false
    }
  }
}
```

A write replaces the whole settings object, so the form must send a value for every `nullable: false` property the schema declares. A single `url` property keeps the form simple. For schemas with more properties, or when reusing a richer schema such as the [full `my-example` schema](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#define-a-settings-schema) from Store app settings, extend the form to match. Otherwise the save fails with `400 | The input is invalid`.

The schema is identified in the SDK by its plain ID, `my-example`—the value set in the schema file. The SDK resolves it against the app, so the fully qualified `app:<your-app-id>:my-example` form is never needed.

> **Caution**
>
> Your schema file must live in the `settings/schemas/` directory at the root of your app, and its name must end in `.schema.json`. The `settings/schemas/` directory sits at the same level as `ui/`:
>
> ```text
> my-app/
> ├── settings/
> │   └── schemas/
> │       └── my-example.schema.json
> └── ui/
> ```
>
> A schema placed anywhere else, such as inside `ui/`, is never registered.
>
> A schema also only exists once it's registered on the environment. While the app is at the local `0.0.0` version, reading or writing its settings fails with `Schema '<id>' not found for app version '0.0.0'`. To work on the form without deploying, mock the settings locally. Install `@dynatrace-sdk/dt-app-plugin-client-app-settings-v2` as a dev dependency, add it to `plugins` in `app.config.json`, and start `npx dt-app dev`. The plugin then generates `settings/local-mock-data/values.json`, where the mock objects for the form are defined. Otherwise, deploy the app with `npx dt-app deploy`.
> For more information, see [Local development](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#local-development).
