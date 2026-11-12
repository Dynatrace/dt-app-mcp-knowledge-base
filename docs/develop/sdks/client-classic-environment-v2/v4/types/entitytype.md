### EntityType

A list of properties of the monitored entity type.

| Name                | Type                                                    | Description                                                                                 |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| dimensionKey        | string                                                  | The dimension key used within metrics for this monitored entity.                            |
| displayName         | string                                                  | The display name of the monitored entity.                                                   |
| entityLimitExceeded | boolean                                                 | Whether the entity creation limit for the given type has been exceeded                      |
| fromRelationships   | Array\<[ToPosition](#toposition)>                       | A list of possible relationships where the monitored entity type occupies the FROM position |
| managementZones     | string                                                  | The placeholder for the list of management zones of an actual entity.                       |
| properties          | Array\<[EntityTypePropertyDto](#entitytypepropertydto)> | A list of additional properties of the monitored entity type.                               |
| tags                | string                                                  | The placeholder for the list of tags of an actual entity.                                   |
| toRelationships     | Array\<[FromPosition](#fromposition)>                   | A list of possible relationships where the monitored entity type occupies the TO position.  |
| type                | string                                                  | The type of the monitored entity.                                                           |
