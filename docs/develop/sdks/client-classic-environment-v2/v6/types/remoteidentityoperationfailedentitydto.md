### RemoteIdentityOperationFailedEntityDto

Failed remote configuration management information.

| Name           | Type                               | Description                                                            |
| -------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| entityId       | string                             | Entity ID for which remote configuration management request was failed |
| failureMessage | string                             | Communication settings changing failure error description              |
| failureReason  | "CONNECTION_FAILURE" \| "TIMEOUT" | Reason of communication settings changing failure.                     |
