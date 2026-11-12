### ~~ModificationInfo~~

**DEPRECATED**

The modification info for a single updatable setting. Replaced by `resourceContext`.

| Name                          | Type           | Description                                                                                                          |
| ----------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| deletable (required)          | boolean        | If settings value can be deleted                                                                                     |
| first                         | boolean        | If non-moveable settings value is in the first group of non-moveable settings, or in the last (start or end of list) |
| modifiable (required)         | boolean        | If settings value can be modified                                                                                    |
| modifiablePaths (required)    | Array\<string> | Property paths which are modifiable, regardless of the state of `modifiable`                                         |
| movable (required)            | boolean        | If settings value can be moved/reordered. Only applicable for ordered list schema                                    |
| nonModifiablePaths (required) | Array\<string> | Property paths which are not modifiable, when `modifiable` is true                                                   |
