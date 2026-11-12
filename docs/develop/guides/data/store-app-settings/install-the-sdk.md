## Install the SDK

First, you need to install the required SDK via the terminal as follows:

```bash
npm i @dynatrace-sdk/client-app-settings-v2
```

### Migration guide

The `@dynatrace-sdk/client-app-settings-v2` SDK replaces `@dynatrace-sdk/client-app-settings`.

The following methods now only accept a single `schemaId`, since the `schemaIds` parameter has been replaced by `schemaId`:

- `getEffectiveAppSettingsValues`
- `getAppSettingsObjects`

The `AppSettingsErrorEnvelope` parameter has been replaced by `ErrorResponse`.

Only version 2 supports new features such as filtering, sorting, and owner-based access control. We recommend using the `@dynatrace-sdk/client-app-settings-v2` SDK.
