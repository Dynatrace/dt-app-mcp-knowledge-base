### VulnerableFunctionsContainer

A list of vulnerable functions, their security problem wide usages and their usages per process group.
Optional: A list of vulnerable function usages per process group for a security problem.

| Name                              | Type                                                                        | Description                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| vulnerableFunctions               | Array\<[VulnerableFunctionProcessGroups](#vulnerablefunctionprocessgroups)> | A list of vulnerable functions, their security problem wide usages and their usages per process group.                                                                                                                                                                                                                                                                   |
| vulnerableFunctionsByProcessGroup | Array\<[ProcessGroupVulnerableFunctions](#processgroupvulnerablefunctions)> | A list of vulnerable function usages per process group for a security problem. The result is sorted based on the following criteria: * the number of vulnerable functions in use (descending).
* the number of vulnerable functions not in use (descending).
* the number of vulnerable functions not available (descending).
* the process group identifier (ascending) |
