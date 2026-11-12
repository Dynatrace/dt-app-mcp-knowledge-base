### RiskAssessmentDetails

Risk assessment of a security problem.

| Name                              | Type                                                     | Description                                                                            |
| --------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| assessmentAccuracy                | "NOT_AVAILABLE" \| "FULL" \| "REDUCED"                  | The accuracy of the assessment.                                                        |
| assessmentAccuracyDetails         | [AssessmentAccuracyDetails](#assessmentaccuracydetails)  | The assessment accuracy details.                                                       |
| baseRiskLevel                     | "NONE" \| "CRITICAL" \| "HIGH" \| "LOW" \| "MEDIUM"      | The risk level from the CVSS score.                                                    |
| baseRiskScore                     | number                                                   | The risk score (1-10) from the CVSS score.                                             |
| baseRiskVector                    | string                                                   | The original attack vector of the CVSS assessment.                                     |
| dataAssets                        | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "REACHABLE"       | The reachability of related data assets by affected entities.                          |
| exposure                          | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "PUBLIC_NETWORK" | The level of exposure of affected entities.                                            |
| publicExploit                     | "NOT_AVAILABLE" \| "AVAILABLE"                          | The availability status of public exploits.                                            |
| riskLevel                         | "NONE" \| "CRITICAL" \| "HIGH" \| "LOW" \| "MEDIUM"      | The Davis risk level. It is calculated by Dynatrace on the basis of CVSS score.        |
| riskScore                         | number                                                   | The Davis risk score (1-10). It is calculated by Dynatrace on the basis of CVSS score. |
| riskVector                        | string                                                   | The attack vector calculated by Dynatrace based on the CVSS attack vector.             |
| vulnerableFunctionRestartRequired | boolean                                                  | Whether a restart is required for new vulnerable function data.                        |
| vulnerableFunctionUsage           | "NOT_AVAILABLE" \| "IN_USE" \| "NOT_IN_USE"          | The state of vulnerable code execution.                                                |
