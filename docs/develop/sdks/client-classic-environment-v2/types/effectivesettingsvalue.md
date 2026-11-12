### EffectiveSettingsValue

An effective settings value.

| Name          | Type     | Description                                                                                                                                                                           |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| author        | string   | The user (identified by a user ID or a public token ID) who performed that most recent modification.<br /><br />**Example:** `john.doe@example.com`                                   |
| created       | number   | The timestamp of the creation.                                                                                                                                                        |
| externalId    | string   | The external identifier of the settings object.                                                                                                                                       |
| modified      | number   | The timestamp of the last modification.                                                                                                                                               |
| origin        | string   | The origin of the settings value.<br /><br />**Example:** `HOST-D3A3C5A146830A79`                                                                                                     |
| schemaId      | string   | The schema on which the object is based.<br /><br />**Example:** `builtin:container.built-in-monitoring-rule`                                                                         |
| schemaVersion | string   | The version of the schema on which the object is based.<br /><br />**Example:** `1.0.0`                                                                                               |
| searchSummary | string   | A searchable summary string of the setting value. Plain text without Markdown.                                                                                                        |
| summary       | string   | A short summary of settings. This can contain Markdown and will be escaped accordingly.                                                                                               |
| value         | AnyValue | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema. <br /><br />**Example:** `{"autoMonitoring":true}` |
