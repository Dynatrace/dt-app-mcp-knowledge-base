## What you can do with it

The guide covers three main capabilities:

- **Browse schemas**—use `settingsSchemasClient.listSchemaDefinitions` to discover what settings schemas are available in the environment, and `getSchemaDefinition` to inspect a specific schema's structure, constraints, and supported fields.

- **Read and write settings objects**—use `settingsObjectsClient.listSettingsObjects` to page through existing objects for a given schema, `upsertSettingsObject` to create one, `getSettingsObject` to fetch a single object, and `updateSettingsObject` to update it. Optimistic locking is built in: every update carries the version returned on retrieval.

- **Support interactive settings editors**—the `settingsInteractiveEditingSupportClient` provides helpers for building settings UIs: generate a default value object for pre-populating a new settings form, or generate a human-readable summary string to preview how a value will appear in list views.

> **Tip**
>
> Read the full guide at [Store Dynatrace settings](pathname:///develop/guides/data/store-dynatrace-settings/).
