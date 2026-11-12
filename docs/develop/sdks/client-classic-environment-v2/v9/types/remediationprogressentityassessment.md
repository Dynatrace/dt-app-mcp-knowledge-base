### RemediationProgressEntityAssessment

Assessment of the remediation progress entity.

| Name                              | Type                                              | Description                                                            |
| --------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- |
| vulnerableFunctionRestartRequired | boolean                                           | Whether a restart is required for the latest vulnerable function data. |
| vulnerableFunctionUsage           | "NOT_AVAILABLE" \| "IN_USE" \| "NOT_IN_USE"   | The usage of vulnerable functions                                      |
| vulnerableFunctionsInUse          | Array\<[VulnerableFunction](#vulnerablefunction)> | A list of vulnerable functions that are in use.                        |
| vulnerableFunctionsNotAvailable   | Array\<[VulnerableFunction](#vulnerablefunction)> | A list of vulnerable functions that are not available.                 |
| vulnerableFunctionsNotInUse       | Array\<[VulnerableFunction](#vulnerablefunction)> | A list of vulnerable functions that are not in use.                    |
