### SecurityProblem

Parameters of a security problem

| Name                          | Type                                                                          | Description                                                                                                      |
| ----------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| codeLevelVulnerabilityDetails | [CodeLevelVulnerabilityDetails](#codelevelvulnerabilitydetails)               | The details of a code-level vulnerability.                                                                       |
| cveIds                        | Array\<string>                                                                | A list of CVE IDs of the security problem.                                                                       |
| displayId                     | string                                                                        | The display ID of the security problem.                                                                          |
| externalVulnerabilityId       | string                                                                        | The external vulnerability ID of the security problem.                                                           |
| firstSeenTimestamp            | number                                                                        | The timestamp of the first occurrence of the security problem.                                                   |
| globalCounts                  | [GlobalCountsDto](#globalcountsdto)                                           | Globally calculated statistics about the security problem. No management zone information is taken into account. |
| lastOpenedTimestamp           | number                                                                        | The timestamp when the security problem was last opened.                                                         |
| lastResolvedTimestamp         | number                                                                        | The timestamp when the security problem was last resolved.                                                       |
| lastUpdatedTimestamp          | number                                                                        | The timestamp of the most recent security problem change.                                                        |
| managementZones               | Array\<[ManagementZone](#managementzone)>                                     | A list of management zones which the affected entities belong to.                                                |
| muted                         | boolean                                                                       | The security problem is (`true`) or is not (`false`) muted.                                                      |
| packageName                   | string                                                                        | The package name of the security problem.                                                                        |
| riskAssessment                | [RiskAssessment](#riskassessment)                                             | Risk assessment of a security problem.                                                                           |
| securityProblemId             | string                                                                        | The ID of the security problem.                                                                                  |
| status                        | "OPEN" \| "RESOLVED"                                                          | The status of the security problem.                                                                              |
| technology                    | "KUBERNETES" \| "DOTNET" \| "GO" \| "JAVA" \| "NODE_JS" \| "PHP" \| "PYTHON" | The technology of the security problem.                                                                          |
| title                         | string                                                                        | The title of the security problem.                                                                               |
| url                           | string                                                                        | The URL to the security problem details page.                                                                    |
| vulnerabilityType             | "CODE_LEVEL" \| "RUNTIME" \| "THIRD_PARTY"                                  | The type of the vulnerability.                                                                                   |
