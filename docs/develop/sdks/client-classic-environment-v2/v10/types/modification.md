### Modification

The additional modification details for this settings object.

| Name                          | Type           | Description                                                                                                            |
| ----------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| first                         | boolean        | If non-moveable settings object is in the first group of non-moveable settings, or in the last (start or end of list). |
| modifiablePaths (required)    | Array\<string> | Property paths which are modifiable, regardless if the `write` operation is allowed.                                   |
| movable                       | boolean        | If settings object can be moved/reordered. Only applicable for ordered list schema.                                    |
| nonModifiablePaths (required) | Array\<string> | Property paths which are not modifiable, even if the `write` operation is allowed.                                     |
