### ReleaseInstance

Contains data related to a single instance of a release.
An instance is a Process Group Instance and has an optional build version.

| Name                    | Type           | Description                                                                                                  |
| ----------------------- | -------------- | ------------------------------------------------------------------------------------------------------------ |
| buildVersion            | null \| string | The build version<br /><br />**Example:** `223005`                                                           |
| entityId                | string         | The entity id of the instance.<br /><br />**Example:** `PROCESS_GROUP_INSTANCE-DFDBAC9CBF104253`             |
| problems                | Array\<string> | List of event Ids of open problems<br /><br />**Example:** `["573177299181554914_1616573184015V2"]`          |
| securityVulnerabilities | Array\<string> | List of Security vulnerabilities Ids<br /><br />**Example:** `["SNYK-JAVA-COMFASTERXMLJACKSONCORE-1234567"]` |
