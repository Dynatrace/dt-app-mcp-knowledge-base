### RemediationAssessment

Assessment of the remediation item.

| Name                              | Type                                                     | Description                                                            |
| --------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| assessmentAccuracy                | "NOT_AVAILABLE" \| "FULL" \| "REDUCED"                  | The accuracy of the assessment.                                        |
| assessmentAccuracyDetails         | [AssessmentAccuracyDetails](#assessmentaccuracydetails)  | The assessment accuracy details.                                       |
| dataAssets                        | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "REACHABLE"       | The reachability of related data assets by affected entities.          |
| exposure                          | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "PUBLIC_NETWORK" | The level of exposure of affected entities.                            |
| numberOfDataAssets                | number                                                   | The number of related data assets.                                     |
| vulnerableFunctionRestartRequired | boolean                                                  | Whether a restart is required for the latest vulnerable function data. |
| vulnerableFunctionUsage           | "NOT_AVAILABLE" \| "IN_USE" \| "NOT_IN_USE"          | The usage of vulnerable functions                                      |
| vulnerableFunctionsInUse          | Array\<[VulnerableFunction](#vulnerablefunction)>        | A list of vulnerable functions that are in use.                        |
| vulnerableFunctionsNotAvailable   | Array\<[VulnerableFunction](#vulnerablefunction)>        | A list of vulnerable functions that are not available.                 |
| vulnerableFunctionsNotInUse       | Array\<[VulnerableFunction](#vulnerablefunction)>        | A list of vulnerable functions that are not in use.                    |
