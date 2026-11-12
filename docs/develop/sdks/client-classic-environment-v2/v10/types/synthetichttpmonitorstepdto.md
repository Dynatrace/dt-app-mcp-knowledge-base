### SyntheticHttpMonitorStepDto

The step of a Http monitor.

| Name                   | Type                                                                      | Description                     |
| ---------------------- | ------------------------------------------------------------------------- | ------------------------------- |
| authentication         | null \| [SyntheticHttpAuthenticationDto](#synthetichttpauthenticationdto) | The Http step's authentication. |
| configuration          | [SyntheticHttpConfigurationDto](#synthetichttpconfigurationdto)           | The Http step's configuration.  |
| constraints (required) | Array\<[SyntheticMonitorConstraintDto](#syntheticmonitorconstraintdto)>   | The list of constraints.        |
| entityId               | null \| string                                                            | Entity Id.                      |
| methodType (required)  | "DELETE" \| "GET" \| "POST" \| "PUT" \| "HEAD" \| "OPTIONS" \| "PATCH"    | Method type.                    |
| name (required)        | string                                                                    | Step name.                      |
| postScript             | null \| string                                                            | PostScript.                     |
| preScript              | null \| string                                                            | PreScript.                      |
| requestBody            | null \| string                                                            | Request body.                   |
| requestTimeout         | null \| number                                                            | Request timeout in s.           |
| url (required)         | string                                                                    | Step url.                       |
