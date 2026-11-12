## Understand scopes and schema IDs

Every settings object has a **scope** that identifies its target. Pass `"environment"` for environment-wide settings, or a **Smartscape node ID** for entity-specific settings.

Every object belongs to a **schema**, identified by a schema ID. Schema IDs follow different conventions depending on the settings type:

- Built-in Dynatrace settings use the `builtin:` prefix, for example `"builtin:maintenance-windows"`.
- App Settings schemas use the format `"app:<app-identifier>:<schema-identifier>"`, for example `"app:my.app:my-example"`.
