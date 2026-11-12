### ExtensionEventDto

A list of extension events.

| Name               | Type                                  | Description                                                                                  |
| ------------------ | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| content            | string                                | Content of the event                                                                         |
| dt.active_gate.id | string                                | Hexadecimal ID of Active Gate that uses this monitoring configuration. Example: `0x1a2b3c4d` |
| dt.entity.host     | string                                | Host that uses this monitoring configuration. Example: `HOST-ABCDEF0123456789`               |
| dt.extension.ds    | string                                | Data source that uses this monitoring configuration. Example: `snmp`                         |
| severity           | string                                | Severity of the event                                                                        |
| status             | "ERROR" \| "INFO" \| "NONE" \| "WARN" | Status of the event                                                                          |
| timestamp          | string                                | Timestamp of the event                                                                       |
