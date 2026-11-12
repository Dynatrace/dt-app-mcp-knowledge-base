### Entity

The properties of a monitored entity.

| Name              | Type                                                            | Description                                                            |
| ----------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| displayName       | string                                                          | The name of the entity, displayed in the UI.                           |
| entityId          | string                                                          | The ID of the entity.                                                  |
| firstSeenTms      | number                                                          | The timestamp at which the entity was first seen, in UTC milliseconds. |
| fromRelationships | [EntityFromRelationships](#entityfromrelationships)             | A list of relationships where the entity occupies the FROM position.   |
| icon              | [EntityIcon](#entityicon)                                       | The icon of a monitored entity.                                        |
| lastSeenTms       | number                                                          | The timestamp at which the entity was last seen, in UTC milliseconds.  |
| managementZones   | Array\<[EnrichedManagementZoneDto](#enrichedmanagementzonedto)> | A set of management zones to which the entity belongs.                 |
| properties        | [EntityProperties](#entityproperties)                           | A list of additional properties of the entity.                         |
| tags              | Array\<[EnrichedTagDto](#enrichedtagdto)>                       | A set of tags assigned to the entity.                                  |
| toRelationships   | [EntityToRelationships](#entitytorelationships)                 | A list of relationships where the entity occupies the TO position.     |
| type              | string                                                          | The type of the entity.                                                |
