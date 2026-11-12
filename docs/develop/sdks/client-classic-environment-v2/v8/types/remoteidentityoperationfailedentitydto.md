### RemoteIdentityOperationFailedEntityDto

Failed remote configuration management information.

| Name           | Type                               | Description                                                                                                                                           |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityId       | string                             | Entity ID for which remote configuration management request was failed<br /><br />**Example:** `HOST-D454A967666E7970`                                |
| failureMessage | string                             | Communication settings changing failure error description<br /><br />**Example:** `Failed to access new tenant: f47ac10b-58cc-4372-a567-0e02b2c3d479` |
| failureReason  | "CONNECTION_FAILURE" \| "TIMEOUT" | Reason of communication settings changing failure.<br /><br />**Example:** `CONNECTION_FAILURE`                                                       |
