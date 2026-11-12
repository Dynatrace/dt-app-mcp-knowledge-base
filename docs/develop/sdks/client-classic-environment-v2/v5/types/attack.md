### Attack

Describes an attack.

| Name             | Type                                                                    | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| affectedEntities | [AffectedEntities](#affectedentities)                                   | Information about affected entities of an attack.                             |
| attackId         | string                                                                  | The ID of the attack.                                                         |
| attackTarget     | [AttackTarget](#attacktarget)                                           | Information about the targeted host/database of an attack.                    |
| attackType       | "COMMAND_INJECTION" \| "JNDI_INJECTION" \| "SQL_INJECTION" \| "SSRF" | The type of the attack.                                                       |
| attacker         | [Attacker](#attacker)                                                   | Attacker of an attack.                                                        |
| displayId        | string                                                                  | The display ID of the attack.                                                 |
| displayName      | string                                                                  | The display name of the attack.                                               |
| entrypoint       | [AttackEntrypoint](#attackentrypoint)                                   | Describes the entrypoint used by an attacker to start a specific attack.      |
| managementZones  | Array\<[ManagementZone](#managementzone)>                               | A list of management zones which the affected entities belong to.             |
| request          | [RequestInformation](#requestinformation)                               | Describes the complete request information of an attack.                      |
| securityProblem  | [AttackSecurityProblem](#attacksecurityproblem)                         | Assessment information and the ID of a security problem related to an attack. |
| state            | "ALLOWLISTED" \| "BLOCKED" \| "EXPLOITED"                               | The state of the attack.                                                      |
| technology       | "DOTNET" \| "GO" \| "JAVA" \| "NODE_JS"                                | The technology of the attack.                                                 |
| timestamp        | number                                                                  | The timestamp when the attack occurred.                                       |
| vulnerability    | [Vulnerability](#vulnerability)                                         | Describes the exploited vulnerability.                                        |
