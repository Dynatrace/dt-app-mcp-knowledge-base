### ProcessGroupVulnerableFunctions

The vulnerable functions of a process group including their usage.

| Name                  | Type                                              | Description                                        |
| --------------------- | ------------------------------------------------- | -------------------------------------------------- |
| functionsInUse        | Array\<[VulnerableFunction](#vulnerablefunction)> | A list of vulnerable functions in use.             |
| functionsNotAvailable | Array\<[VulnerableFunction](#vulnerablefunction)> | A list of vulnerable functions with unknown state. |
| functionsNotInUse     | Array\<[VulnerableFunction](#vulnerablefunction)> | A list of vulnerable functions not in use.         |
| processGroup          | string                                            | The process group identifier.                      |
