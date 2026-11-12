### ExtensionStatusWithIdDto

| Name                       | Type                                                   | Description                                            |
| -------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| configurationId (required) | string                                                 | Unique ID of the configuration.                        |
| status (required)          | "UNKNOWN" \| "OK" \| "ERROR" \| "PENDING" \| "WARNING" | Latest status of given configuration.                  |
| timestamp                  | number                                                 | Timestamp of the latest status of given configuration. |
