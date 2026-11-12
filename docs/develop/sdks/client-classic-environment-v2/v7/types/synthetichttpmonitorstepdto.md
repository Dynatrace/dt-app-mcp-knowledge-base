### SyntheticHttpMonitorStepDto

The step of a Http monitor.

| Name                   | Type                                                                    | Description                     |
| ---------------------- | ----------------------------------------------------------------------- | ------------------------------- |
| authentication         | [SyntheticHttpAuthenticationDto](#synthetichttpauthenticationdto)       | The Http step's authentication. |
| configuration          | [SyntheticHttpConfigurationDto](#synthetichttpconfigurationdto)         | The Http step's configuration.  |
| constraints (required) | Array\<[SyntheticMonitorConstraintDto](#syntheticmonitorconstraintdto)> | The list of constraints.        |
| entityId               | string                                                                  | Entity Id.                      |
| methodType (required)  | "DELETE" \| "GET" \| "POST" \| "PUT" \| "HEAD" \| "OPTIONS" \| "PATCH"  | Method type.                    |
| name (required)        | string                                                                  | Step name.                      |
| postScript             | string                                                                  | PostScript.                     |
| preScript              | string                                                                  | PreScript.                      |
| requestBody            | string                                                                  | Request body.                   |
| requestTimeout         | number                                                                  | Request timeout in s.           |
| url (required)         | string                                                                  | Step url.                       |
