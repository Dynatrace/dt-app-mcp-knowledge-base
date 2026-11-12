### EnablementDto

Browser monitor enablement settings.

| Name                     | Type                                            | Description                                                                           |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| enableOnGrail (required) | boolean                                         | Enable 3rd gen JS agent reporting. Relevant only for grail-enabled SaaS environments. |
| origin                   | "UNKNOWN" \| "DEFAULT" \| "MONITOR" \| "TENANT" | Indicates the origin of these settings.                                               |
