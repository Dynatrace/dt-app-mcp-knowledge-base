## Settings types

The Settings service manages two categories of settings, distinguished by who defines their schemas:

- **App Settings**: Schemas are defined by app developers and bundled with a Dynatrace app. When the app is installed, the App Settings Service registers these schemas automatically. Both the Settings SDK and the App Settings SDK (`@dynatrace-sdk/client-app-settings-v2`) can then read and manage objects for these schemas. The App Settings SDK additionally provides a local development plugin specific to App Settings.
- **Built-in Settings**: Schemas are defined by Dynatrace itself — for example, OpenTelemetry metrics or maintenance windows. Their schema IDs follow the `builtin:` prefix convention.
