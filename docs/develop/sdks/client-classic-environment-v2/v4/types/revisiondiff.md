### RevisionDiff

The diff between two revisions.

| Name              | Type                                                          | Description                                                                                   |
| ----------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| appId             | string                                                        | The id of the app which changed the settings object                                           |
| jsonAfter         | string                                                        | The new value of the changed settings value or null if the value has been deleted.            |
| jsonBefore        | string                                                        | The previous value of the changed settings value or null if the value has been newly created. |
| jsonPatch         | AnyValue                                                      | The JSON Patch for this value. May be null if the diff type is not UPDATE.                    |
| modificationInfo  | [HistoryModificationInfo](#historymodificationinfo)           | Modification information about the setting.                                                   |
| objectId          | string                                                        | The ID of the settings object.                                                                |
| revision          | string                                                        | The revision of the change.                                                                   |
| schemaDisplayName | string                                                        | The display name of the schema to which the revision belongs.                                 |
| schemaId          | string                                                        | Schema ID to which the revision belongs.                                                      |
| schemaVersion     | string                                                        | The schema version the new value complies to.                                                 |
| source            | string                                                        | The source of the change.                                                                     |
| summary           | string                                                        | Summary of the object value corresponding to the summary pattern of the schema.               |
| type              | "CREATE" \| "DELETE" \| "REORDER" \| "UPDATE" \| "NO_CHANGE" | The type of the difference.                                                                   |
