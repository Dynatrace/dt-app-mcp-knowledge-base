## Support interactive settings editing

The `settingsInteractiveEditingSupportClient` provides helper operations intended for building interactive settings editors — for example, a UI that guides users through creating or editing a settings object.

### Generate a default value for a schema

To get the default value object for a schema (useful for pre-populating a new settings form), use `generateSchemaDefaultValue`:

```ts
import { settingsInteractiveEditingSupportClient } from '@dynatrace-sdk/client-settings';

const defaults = await settingsInteractiveEditingSupportClient.generateSchemaDefaultValue({
  schemaId: 'builtin:maintenance-windows',
  scope: 'environment',
});
```

### Generate a summary for a settings value

To generate a human-readable summary string for a given settings value without storing it, use `summarizeSettingsValue`. This is useful for previewing how a value will appear in list views:

```ts
import { settingsInteractiveEditingSupportClient } from '@dynatrace-sdk/client-settings';

const summary = await settingsInteractiveEditingSupportClient.summarizeSettingsValue({
  schemaId: 'builtin:maintenance-windows',
  body: {
    value: {
      name: 'Weekend maintenance',
    },
  },
});
```

### Validate a settings value

To validate a settings value or property against a custom validator defined in the schema without saving it, use `validateSettingsContainer` (for a full object) or `validateSettingsProperty` (for a single property):

```ts
import { settingsInteractiveEditingSupportClient } from '@dynatrace-sdk/client-settings';

const result = await settingsInteractiveEditingSupportClient.validateSettingsContainer({
  schemaId: 'builtin:maintenance-windows',
  validatorId: 'schedule-validator',
  scope: 'environment',
  body: {
    value: {
      trigger: {
        type: 'time',
        recurring: { time: '02:00:00' },
      },
      duration: 60,
    },
  },
});
```

```ts
import { settingsInteractiveEditingSupportClient } from '@dynatrace-sdk/client-settings';

const result = await settingsInteractiveEditingSupportClient.validateSettingsProperty({
  schemaId: 'builtin:maintenance-windows',
  validatorId: 'filter-validator',
  body: {
    value: 'entity.type == "HOST"',
  },
});
```

This operation requires the scope `settings:schemas:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
