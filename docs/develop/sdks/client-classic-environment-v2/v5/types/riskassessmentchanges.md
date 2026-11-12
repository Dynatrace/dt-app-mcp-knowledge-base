### RiskAssessmentChanges

All changes of the risk assessment.

| Name                               | Type                                                     | Description                                                                               |
| ---------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| deltaBaseRiskScore                 | number                                                   | The delta of the risk score.                                                              |
| deltaNumberOfAffectedNodes         | number                                                   | The delta of the number of currently affected nodes.                                      |
| deltaNumberOfAffectedProcessGroups | number                                                   | The delta of the number of currently affected process groups.                             |
| deltaNumberOfReachableDataAssets   | number                                                   | The delta of the number of data assets that are currently reachable by affected entities. |
| deltaNumberOfRelatedAttacks        | number                                                   | The delta of the number of related attacks.                                               |
| deltaRiskScore                     | number                                                   | The delta of the Davis risk score.                                                        |
| previousExposure                   | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "PUBLIC_NETWORK" | The previous level of exposure of affected entities.                                      |
| previousPublicExploit              | "NOT_AVAILABLE" \| "AVAILABLE"                          | The previous availability status of public exploits.                                      |
| previousVulnerableFunctionUsage    | "NOT_AVAILABLE" \| "IN_USE" \| "NOT_IN_USE"          | The previous state of vulnerable code execution.                                          |
