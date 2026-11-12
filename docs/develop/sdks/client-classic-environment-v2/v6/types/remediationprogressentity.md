### RemediationProgressEntity

An affected or unaffected entity of a remediation for a security problem.

| Name                   | Type                                                                                      | Description                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| assessment             | [RemediationProgressEntityAssessment](#remediationprogressentityassessment)               | Assessment of the remediation progress entity.                                                                       |
| firstAffectedTimestamp | number                                                                                    | The timestamp when the remediation progress entity has first been related to the vulnerability.                      |
| id                     | string                                                                                    | The ID of the remediation progress entity.                                                                           |
| name                   | string                                                                                    | The name of the remediation progress entity.                                                                         |
| state                  | "AFFECTED" \| "UNAFFECTED"                                                                | The current state of the remediation progress entity.                                                                |
| vulnerableComponents   | Array\<[RemediationProgressVulnerableComponent](#remediationprogressvulnerablecomponent)> | A list of vulnerable components of the remediation item. A vulnerable component is what causes the security problem. |
