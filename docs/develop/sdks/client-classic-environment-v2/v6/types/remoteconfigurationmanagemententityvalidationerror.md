### RemoteConfigurationManagementEntityValidationError

Entity validation error for remote configuration management.

| Name    | Type                                                                                                                                                                                                | Description                                       |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| entity  | string                                                                                                                                                                                              | The ID of the entity for which validation failed. |
| reasons | Array\<"CLOUD_NATIVE_NOT_SUPPORTED" \| "NOT_ALLOWED_WITH_CLUSTER_ACTIVE_GATE" \| "NOT_CONNECTED" \| "RUNNING_IN_CONTAINER" \| "STANDALONE_NOT_SUPPORTED" \| "VERSION_NOT_SUPPORTED"> | The reason of entity validation failure.          |
