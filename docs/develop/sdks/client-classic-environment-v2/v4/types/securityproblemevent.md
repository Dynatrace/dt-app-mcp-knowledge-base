### SecurityProblemEvent

The event of a security problem.

| Name                   | Type                                                                                                                                                                                  | Description                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| muteState              | [MuteState](#mutestate)                                                                                                                                                               | Metadata of the muted state of a security problem in relation to an event. |
| reason                 | "ASSESSMENT_CHANGED" \| "SECURITY_PROBLEM_CREATED" \| "SECURITY_PROBLEM_MUTED" \| "SECURITY_PROBLEM_REOPENED" \| "SECURITY_PROBLEM_RESOLVED" \| "SECURITY_PROBLEM_UNMUTED" | The reason of the event creation.                                          |
| riskAssessmentSnapshot | [RiskAssessmentSnapshot](#riskassessmentsnapshot)                                                                                                                                     | A snapshot of the risk assessment of a security problem.                   |
| timestamp              | number                                                                                                                                                                                | The timestamp when the event occurred.                                     |
