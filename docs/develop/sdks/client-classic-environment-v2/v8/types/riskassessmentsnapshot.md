### RiskAssessmentSnapshot

A snapshot of the risk assessment of a security problem.

| Name                          | Type                                                     | Description                                                                            |
| ----------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| baseRiskScore                 | number                                                   | The risk score (1-10) from the CVSS score.                                             |
| changes                       | [RiskAssessmentChanges](#riskassessmentchanges)          | All changes of the risk assessment.                                                    |
| exposure                      | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "PUBLIC_NETWORK" | The level of exposure of affected entities.                                            |
| numberOfAffectedEntities      | number                                                   | The number of currently affected entities.                                             |
| numberOfAffectedNodes         | number                                                   | The number of currently affected nodes.                                                |
| numberOfAffectedProcessGroups | number                                                   | The number of currently affected process groups.                                       |
| numberOfReachableDataAssets   | number                                                   | The number of data assets that are currently reachable by affected entities.           |
| numberOfRelatedAttacks        | number                                                   | The number of related attacks.                                                         |
| publicExploit                 | "NOT_AVAILABLE" \| "AVAILABLE"                          | The availability status of public exploits.                                            |
| riskLevel                     | "NONE" \| "CRITICAL" \| "HIGH" \| "LOW" \| "MEDIUM"      | The Davis risk level. It is calculated by Dynatrace on the basis of CVSS score.        |
| riskScore                     | number                                                   | The Davis risk score (1-10). It is calculated by Dynatrace on the basis of CVSS score. |
| vulnerableFunctionUsage       | "NOT_AVAILABLE" \| "IN_USE" \| "NOT_IN_USE"          | The state of vulnerable code execution.                                                |
