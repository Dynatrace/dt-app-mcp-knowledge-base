### RemediationDetailsItem

Detailed information of a remediation item for a security problem.

| Name                   | Type                                                                                            | Description                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| assessment             | [RemediationAssessment](#remediationassessment)                                                 | Assessment of the remediation item.                                                                                  |
| entityIds              | Array\<string>                                                                                  |                                                                                                                      |
| firstAffectedTimestamp | number                                                                                          |                                                                                                                      |
| id                     | string                                                                                          |                                                                                                                      |
| muteState              | [RemediationItemMuteState](#remediationitemmutestate)                                           | The mute state of a remediation item of a security problem.                                                          |
| name                   | string                                                                                          |                                                                                                                      |
| remediationProgress    | [RemediationProgress](#remediationprogress)                                                     | The progress of this remediation item. It contains affected and unaffected entities.                                 |
| resolvedTimestamp      | number                                                                                          |                                                                                                                      |
| trackingLink           | [TrackingLink](#trackinglink)                                                                   | External tracking link URL associated with the remediable entity of the security problem.                            |
| vulnerabilityState     | "RESOLVED" \| "VULNERABLE"                                                                      |                                                                                                                      |
| vulnerableComponents   | Array\<[RemediationItemDetailsVulnerableComponent](#remediationitemdetailsvulnerablecomponent)> | A list of vulnerable components of the remediation item. A vulnerable component is what causes the security problem. |
