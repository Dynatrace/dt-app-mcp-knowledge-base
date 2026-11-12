### RelatedService

A service related to a security problem.

| Name                     | Type                                                     | Description                                            |
| ------------------------ | -------------------------------------------------------- | ------------------------------------------------------ |
| affectedEntities         | Array\<string>                                           | A list of affected entities related to the entity.     |
| exposure                 | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "PUBLIC_NETWORK" | The level of exposure of the service.                  |
| id                       | string                                                   | The Dynatrace entity ID of the entity.                 |
| numberOfAffectedEntities | number                                                   | The number of affected entities related to the entity. |
