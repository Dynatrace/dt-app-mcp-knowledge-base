### Release

Contains data related to a single release of a component.
A Release is a combination of a component and a version.
A Component can be any form of deployable that can be associated with a version.
In the first draft, a Component is always a Service.

The tuple \<name, product, stage, version> is always unique.

| Name                              | Type                                        | Description                                                    |
| --------------------------------- | ------------------------------------------- | -------------------------------------------------------------- |
| affectedByProblems                | boolean                                     | The entity has one or more problems                            |
| affectedBySecurityVulnerabilities | boolean                                     | The entity has one or more security vulnerabilities            |
| instances                         | Array\<[ReleaseInstance](#releaseinstance)> | The instances entityIds included in this release               |
| name                              | string                                      | The entity name                                                |
| problemCount                      | number                                      | The number of problems of the entity                           |
| product                           | string                                      | The product name                                               |
| releaseEntityId                   | string                                      | The entity id of correlating release.                          |
| running                           | boolean                                     | The related PGI is still running/monitored                     |
| securityVulnerabilitiesCount      | number                                      | The number of security vulnerabilities of the entity           |
| securityVulnerabilitiesEnabled    | boolean                                     | Indicates that the security vulnerabilities feature is enabled |
| softwareTechs                     | Array\<[SoftwareTechs](#softwaretechs)>     | The software technologies of the release                       |
| stage                             | string                                      | The stage name                                                 |
| throughput                        | number                                      | The count of bytes per second of the entity                    |
| version                           | string                                      | The identified release version                                 |
