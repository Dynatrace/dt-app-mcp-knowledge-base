### SecurityContextResultDto

The response payload holding the result of the security context application.

| Name              | Type           | Description                                                                                                                                    |
| ----------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| entityIds         | Array\<string> | The entity ids that matched the entity selector and now have the supplied security context set.                                                |
| managementZoneIds | Array\<number> | The management zone ids that is applied to the entity ids, if the security context matched an existing management zone's name, otherwise null. |
