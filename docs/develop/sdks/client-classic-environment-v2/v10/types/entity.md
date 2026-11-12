### Entity

The properties of a monitored entity.

| Name              | Type                                                                    | Description                                                            |
| ----------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| displayName       | string                                                                  | The name of the entity, displayed in the UI.                           |
| entityId          | string                                                                  | The ID of the entity.                                                  |
| firstSeenTms      | null \| number                                                          | The timestamp at which the entity was first seen, in UTC milliseconds. |
| fromRelationships | null \| [EntityFromRelationships](#entityfromrelationships)             | A list of relationships where the entity occupies the FROM position.   |
| icon              | null \| [EntityIcon](#entityicon)                                       | The icon of a monitored entity.                                        |
| lastSeenTms       | null \| number                                                          | The timestamp at which the entity was last seen, in UTC milliseconds.  |
| managementZones   | Array\<null \| [EnrichedManagementZoneDto](#enrichedmanagementzonedto)> | A set of management zones to which the entity belongs.                 |
| properties        | null \| [EntityProperties](#entityproperties)                           | A list of additional properties of the entity.                         |
| tags              | Array\<null \| [EnrichedTagDto](#enrichedtagdto)>                       | A set of tags assigned to the entity.                                  |
| toRelationships   | null \| [EntityToRelationships](#entitytorelationships)                 | A list of relationships where the entity occupies the TO position.     |
| type              | string                                                                  | The type of the entity.                                                |
