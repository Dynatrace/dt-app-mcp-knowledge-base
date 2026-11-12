### Release

Contains data related to a single release of a component.
A Release is a combination of a component and a version.
A Component can be any form of deployable that can be associated with a version.
In the first draft, a Component is always a Service.

The tuple \<name, product, stage, version> is always unique.

| Name                              | Type                                        | Description                                                                                                                                                      |
| --------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| affectedByProblems                | boolean                                     | The entity has one or more problems<br /><br />**Example:** `true`                                                                                               |
| affectedBySecurityVulnerabilities | boolean                                     | The entity has one or more security vulnerabilities<br /><br />**Example:** `true`                                                                               |
| instances                         | Array\<[ReleaseInstance](#releaseinstance)> | The instances entityIds included in this release<br /><br />**Example:** `["PROCESS_GROUP_INSTANCE-49D94B90FB71C45B","PROCESS_GROUP_INSTANCE-7EA049157C82D1A5"]` |
| name                              | string                                      | The entity name<br /><br />**Example:** `cluster`                                                                                                                |
| problemCount                      | number                                      | The number of problems of the entity<br /><br />**Example:** `4`<br />**Minimum:** `0`                                                                           |
| product                           | string                                      | The product name<br /><br />**Example:** `Sockshop`                                                                                                              |
| releaseEntityId                   | string                                      | The entity id of correlating release.<br /><br />**Example:** `PROCESS_GROUP-DFDBAC9CBF104253`                                                                   |
| running                           | boolean                                     | The related PGI is still running/monitored<br /><br />**Example:** `true`                                                                                        |
| securityVulnerabilitiesCount      | number                                      | The number of security vulnerabilities of the entity<br /><br />**Example:** `4`<br />**Minimum:** `0`                                                           |
| securityVulnerabilitiesEnabled    | boolean                                     | Indicates that the security vulnerabilities feature is enabled<br /><br />**Example:** `true`                                                                    |
| softwareTechs                     | Array\<[SoftwareTechs](#softwaretechs)>     | The software technologies of the release<br /><br />**Example:** `[{"edition":"OpenJDK","technology":"JAVA","verbatimType":"Java","version":"1.8.0_242"}]`       |
| stage                             | string                                      | The stage name<br /><br />**Example:** `staging`                                                                                                                 |
| throughput                        | number                                      | The count of bytes per second of the entity<br /><br />**Example:** `923234`<br />**Minimum:** `0`                                                               |
| version                           | string                                      | The identified release version<br /><br />**Example:** `1.195.34.12341232423-012342`                                                                             |
